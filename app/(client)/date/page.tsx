"use client";
import Calendar from "react-calendar";
import ProgressStepper from "@/app/components/ProgressStepper";
import { FC, useState } from "react";
import "../../Calendar.css";

import DropDownMenu from "@/app/components/DropDownMenu";
import { useFormDataContext } from "@/app/components/contexts/FormDataContext";
import { useRouter } from "next/navigation";

interface ChooseADatePageProps {}

type ValuePiece = Date | null;

type CalendarValue = ValuePiece | [ValuePiece, ValuePiece];

const ChooseADatePage: FC<ChooseADatePageProps> = () => {
  const router = useRouter();
  const {formData , setFormData} = useFormDataContext()
  const todaysDate: Date = new Date();
  const [selectedDate, setSelectedDate] = useState<CalendarValue>(todaysDate);
  const [timeSlots, setTimeSlots] = useState<Array<string>>(
    generateTimeSlots(todaysDate)
  );
  const [selectedTime, setSelectedTime] = useState<string>(timeSlots[0]);
  const [exampleFinalDate, setExampleFinalDate] = useState<Date>();
  const minDate = todaysDate;
  const maxDate = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  );
  function generateTimeSlots(date: Date) {
    const maxSlots = 8;
    let slots = [];
    let indexedDate = date;
    indexedDate.setHours(9, 0, 0);

    for (let i = 0; i <= maxSlots; i++) {
      const time = indexedDate.toLocaleTimeString("en", {
        timeStyle: "short",
        hour12: true,
        timeZone: "America/New_York",
      });
      indexedDate.setMinutes(0);
      indexedDate.setHours(indexedDate.getHours() + 1);
      slots.push(time);
    }
    return slots;
  }
  console.log(maxDate);

  function handleSubmit() {
    // combine the date and time in a Date object that can be converted to any timezone later
    if (selectedDate !== null && selectedTime !== null) {
      let finalDate = new Date(`${selectedDate}`);
      const regex = /^\d+/;
      let timeString = selectedTime.match(regex);
      if (timeString && selectedTime[0]) {
        const hour = parseInt(timeString[0]);
        finalDate.setHours(hour, 0, 0);
        setExampleFinalDate(finalDate); // TODO  send this to the database
        setFormData((prevFormData) => ({
          ...prevFormData,
          date: finalDate,
        }));
        router.push('/contact');
      }
    }
  }

  return (
    <div className="max-w-[1110px]">
      <h1 className="text-[40px]">Western Rehab PT</h1>
      <div className="w-[184px] mb-[52px]">
        <ProgressStepper
          currentStep={3}
          length={5}
          label="Select a date and time slot"
        />
      </div>
      <div className="flex flex-col justify-center gap-[32px]">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          defaultValue={selectedDate}
          prevLabel="<"
          nextLabel=">"
          defaultView="month"
          minDetail="month"
          maxDetail="month"
          minDate={minDate}
          maxDate={maxDate}
        />
        <div className="max-w-[350px]">
          <DropDownMenu
            options={timeSlots}
            selectedOption={selectedTime}
            setSelectedOption={setSelectedTime}
          />
        </div>
      </div>
      <button className="p-[24px] border-2 border-black" onClick={handleSubmit}>
        Confirm
      </button>
      <p>{exampleFinalDate && exampleFinalDate.toISOString()}</p>
      <p>{exampleFinalDate && exampleFinalDate.toLocaleDateString()}</p>
    </div>
  );
};

export default ChooseADatePage;
