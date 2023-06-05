"use client";
import { FC, useState } from "react";
import Calendar from "react-calendar";
import "../../Calendar.css";

interface DashboardPageProps {}

type ValuePiece = Date | null;

type CalendarValue = ValuePiece | [ValuePiece, ValuePiece];

const DashboardPage: FC<DashboardPageProps> = () => {
  const todaysDate: Date = new Date();
  const [selectedDate, setSelectedDate] = useState<any>(todaysDate);
  const [timeSlots, setTimeSlots] = useState<Array<string>>(
    generateTimeSlots(todaysDate)
  );
  const minDate = todaysDate;
  const maxDate = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  );

  // TODO  set the working hours based on the admin's preference
  function generateTimeSlots(date: Date) {
    const startTime = 9;
    const maxSlots = 8;
    let slots = [];
    let indexedDate = date;
    indexedDate.setHours(startTime, 0, 0);

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

  return (
    <div>
      <section>
        <h1 className="my-[32px]">Appointments</h1>
        <Calendar
          onChange={setSelectedDate}
          defaultValue={todaysDate}
          prevLabel="<"
          nextLabel=">"
          defaultView="month"
          minDetail="month"
          maxDetail="month"
          minDate={minDate}
          maxDate={maxDate}
        />
      </section>

      <section className="flex flex-col gap-[32px]">
        <h2 className="my-[32px]">{selectedDate.toDateString()}</h2>
		{/* TODO if there is no appointment at a timeslot, do not render the <ul> with the details */}
        {timeSlots.map((time, index) => (
          <div
            key={`${time}${index}`}
            className="relative flex items-center mb-[32px]"
          >
            <span className="mr-[12px] text-[12px] whitespace-nowrap">
              {time}
            </span>
            <hr className="w-full border-t-[1px] border-black" />
            <div className="absolute translate-x-[50%] px-[16px] py-[8px] border-2 border-black bg-white">
              <ul className="text-[12px">
                <li>
                  <span className="text-blueLapis font-bold">type:</span> PT
                  Follow Up
                </li>
                <li>
                  <span className="text-blueLapis font-bold">who:</span> Dr.
                  Lemon
                </li>
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DashboardPage;
