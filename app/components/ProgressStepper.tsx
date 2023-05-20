import { FC } from "react";

interface ProgressStepperProps {
  currentStep: number;
  length: number;
}

/**
 *
 * @param {number} currentStep This determines which steps/circles are colored in
 * @param {number} length This determines how many steps/circles there are
 * @returns React.JSX.Element
 */
const ProgressStepper: FC<ProgressStepperProps> = ({ currentStep, length }) => {
  function GenerateLine(index: number): React.JSX.Element {
    let fillColor: string;

    if (
      index <= currentStep
        ? (fillColor = "bg-blueLapis")
        : (fillColor = "bg-blueLapisLight")
    )
      if (index < length && index !== 0) {
        return (
          <div
            className={`w-full h-[2px] ${fillColor} mx-0 mt-[9px] transition-all`}
          ></div>
        );
      }
    return <></>;
  }

  function GenerateCircle(index: number): React.JSX.Element {
    let fillColor: string;
    let outlineColor: string;

    if (
      index <= currentStep
        ? ((fillColor = "bg-blueLapis"), (outlineColor = "border-blueLapis"))
        : ((fillColor = "bg-transparent"),
          (outlineColor = "border-blueLapisLight"))
    )
      return (
        <div className={`flex flex-col items-center justify-center`}>
          <div
            className={`flex items-center justify-center w-[20px] h-[20px] rounded-full border-[2px] ${outlineColor} ${fillColor} transition-all`}
          ></div>
        </div>
      );
    else return <></>;
  }

  function GenerateSteps(): Array<React.JSX.Element> {
    const listItems: Array<React.JSX.Element> = [];
    for (let index = 0; index < length; index++) {
      listItems.push(
        <li
          key={`step${index}`}
          className="step flex [&:not(:first-child)]:w-full"
        >
          {GenerateLine(index)}
          {GenerateCircle(index)}
        </li>
      );
    }
    return listItems;
  }

  return (
    <div className="w-full max-w-[1110px] min-w-[320px] my-0 mx-auto">
      <ol className="w-full flex overflow-hidden">{GenerateSteps()}</ol>
    </div>
  );
};

export default ProgressStepper;
