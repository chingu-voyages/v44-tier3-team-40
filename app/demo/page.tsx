"use client";
import DatePicker from "../components/DatePicker";
import ProgressStepper from "../components/ProgressStepper";
import { useState } from "react";

const Demo = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<number>(15);
  
  function handleClick() {
    setCurrentStep((prevState) => prevState + 1);
  }

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
      <ProgressStepper currentStep={currentStep} length={5} />
      <button onClick={handleClick} className="bg-[red] px-3">
        Next
      </button>
    </div>
  );
};

export default Demo;
