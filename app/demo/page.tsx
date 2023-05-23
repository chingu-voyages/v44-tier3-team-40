"use client";
import DatePicker from "../components/DatePicker";
import DropDownMenu from "../components/DropDownMenu";
import ProgressStepper from "../components/ProgressStepper";
import { useState } from "react";
import LinkButton from "../components/LinkButton";

const Demo = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<number>(15);
  const [selectedMonth, setSelectedMonth] = useState<string>("january");
  const [selectedYear, setSelectedYear] = useState<string>("2023");

  function handleClick() {
    setCurrentStep((prevState) => prevState + 1);
  }

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const years = [
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];

  return (
    <div>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>
        paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. In
        corporis nam ipsam! Voluptas minus, suscipit, molestiae doloribus
        commodi adipisci et quo dolore iure animi eos accusamus! Eveniet
        recusandae optio ipsum delectus porro quaerat maiores praesentium soluta
        tempora maxime, pariatur labore enim debitis dolore doloribus! Debitis
        molestiae adipisci corrupti nesciunt! Facere?
      </p>
      <button className="bg-blueLapis">blueLapis</button>
      <button className="bg-blueLapisLight">blueLapisLight</button>
      <button className="bg-grayLight">grayLight</button>
      <DatePicker
        selectedDay={selectedDay}
        selectedMonth="march"
        setSelectedDay={setSelectedDay}
      />
      <ProgressStepper
        currentStep={currentStep}
        length={5}
        label={"Select a date and time slot"}
      />
      <button onClick={handleClick} className="bg-[red] px-3">
        Next
      </button>
      <DropDownMenu
        options={months}
        selectedOption={selectedMonth}
        setSelectedOption={setSelectedMonth}
      />
      <DropDownMenu
        options={years}
        selectedOption={selectedYear}
        setSelectedOption={setSelectedYear}
      />
      <LinkButton text="home" href="/" />
    </div>
  );
};

export default Demo;
