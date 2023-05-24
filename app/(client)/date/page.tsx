"use client";
import Calendar from "react-calendar";
import ProgressStepper from "@/app/components/ProgressStepper";
import { FC, useState } from "react";
import "./Calendar.css";

interface ChooseADatePageProps {}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ChooseADatePage: FC<ChooseADatePageProps> = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <h1 className="text-[40px]">Western Rehab PT</h1>
      <div className="w-[184px]">
        <ProgressStepper
          currentStep={3}
          length={5}
          label="Select a date and time slot"
        />
      </div>
      <Calendar onChange={onChange} value={value} prevLabel="<" nextLabel=">" />
    </div>
  );
};

export default ChooseADatePage;
