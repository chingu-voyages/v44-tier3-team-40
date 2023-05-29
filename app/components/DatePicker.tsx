import { FC, SetStateAction, Dispatch } from "react";

interface DatePickerProps {
  selectedDay: number;
  selectedMonth: string;
  setSelectedDay: Dispatch<SetStateAction<number>>; // a setState function passed by the parent
}

/**
 *
 * @param {number} selectedDay number
 * @param {number} selectedMonth number
 * @param {Dispatch<SetStateAction<number>>} setSelectedMonth A useState setter function from the parent
 * @returns React.JSX.Element
 */
const DatePicker: FC<DatePickerProps> = ({
  selectedDay,
  selectedMonth,
  setSelectedDay,
}) => {
  //TODO determine which years are leap year for february
  function CalculateLeapYear() {
    return 28;
  }

  enum Months {
    january = 31,
    february = CalculateLeapYear(),
    march = 31,
    april = 30,
    may = 31,
    june = 30,
    july = 31,
    august = 31,
    september = 30,
    october = 31,
    november = 30,
    december = 31,
  }

  function GenerateNumbers(): Array<number> {
    const listItems = [];
    const dayIndex = Object.keys(Months).indexOf(selectedMonth);
    const day = Object.values(Months)[dayIndex] as number;
    for (let index = 0; index <= day; index++) {
      listItems.push(index);
    }
    return listItems;
  }

  return (
    <ol className="flex overflow-x-scroll">
      {GenerateNumbers().map((day, index) => (
        <li key={`${day}${index}`}>
          <button
            onClick={() => setSelectedDay(day)}
            className={`${
              day === selectedDay
                ? "bg-blueLapis text-[white]"
                : "bg-transparent"
            } min-w-[55px] h-[55px] flex justify-center items-center border-[1px] border-[black] dark:border-[white] text-[14px] font-bold`}
          >
            {day}
          </button>
        </li>
      ))}
    </ol>
  );
};

export default DatePicker;
