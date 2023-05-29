"use client";
import { FC, useState, Dispatch, SetStateAction } from "react";

interface DropDownMenuProps {
  options: Array<string>;
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

/**
 * This is a controlled component, the parent should keep track of which option was selected and inform this component with props
 * @param {Array} options Array of strings
 * @param {string} selectedOption string
 * @param {Dispatch<SetStateAction<string>>} setSelectedOption A useState setter function from the parent
 * @returns React.JSX.Element
 */
const DropDownMenu: FC<DropDownMenuProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggle() {
    setIsOpen((prevState) => !prevState);
  }

  function handleSelectOption(option: string) {
    setSelectedOption(option);
    handleToggle();
  }

  const IconChevron: FC = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="text-blueLapis"
      >
        <path
          fill="currentColor"
          d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
        />
      </svg>
    );
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="w-full h-[55px] flex justify-between items-center p-[20px] bg-white border-[1px] border-black font-bold uppercase cursor-pointer"
      >
        {options[options.indexOf(selectedOption)]}
        <IconChevron />
      </button>
      {isOpen && (
        <ol className="max-h-[220px] overflow-y-auto">
          {options.map((option) => (
            <li key={option}>
              <button
                className={`${
                  option === selectedOption ? "bg-blueLapis text-white" : ""
                } w-full h-[55px] flex items-center px-[18px] py-[8px] border-[1px] border-black text-left font-bold uppercase hover:bg-blueLapisLight hover:text-white`}
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default DropDownMenu;
