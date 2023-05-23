import ProgressStepper from "@/app/components/ProgressStepper";
import { FC } from "react";

interface ChooseADatePageProps {}

const ChooseADatePage: FC<ChooseADatePageProps> = () => {
  return (
    <div>
      <h1 className="text-[40px]">Western Rehab PT</h1>
      <ProgressStepper currentStep={3} length={5} />
    </div>
  );
};

export default ChooseADatePage;
