"use client";

import { useState } from "react";

interface TextFormInputProps {
	label: string;
	type: string;
	placeholder: string;
	htmlFor: string;
}

interface RadioFormInputProps {
	label: string;
}

interface NumberFormInputProps {
	label: string;
}

interface TextAreaFormInputProps {
	label: string;
	placeholder: string;
}

const TextFormInput: React.FC<TextFormInputProps> = ({
	label,
	type,
	placeholder,
	htmlFor,
}) => {
	return (
		<div className="bg-white">
			<div className="m-4">
				<label htmlFor={htmlFor} className="text-[12px] text-black ">
					{label}
				</label>
				<br />
				<input type={type} placeholder={placeholder} />
			</div>
		</div>
	);
};

export default TextFormInput;

export const RadioFormInput: React.FC<RadioFormInputProps> = ({ label }) => {
	return (
		<div className="m-4 border border-[#cfcfcf;] w-[309px] h-[56px] flex  items-center hover:border-[#554ad8]">
			<input
				className=" border border-[#cfcfcf;] mr-[16px] ml-[16px] checked:bg-[#554AD8] rounded-full 
			checked:h-[25px] checked:rounded-full"
				type="radio"
			/>
			<label className="text-[14px]">{label}</label>
		</div>
	);
};

export const NumberFormInput: React.FC<NumberFormInputProps> = ({ label }) => {
	const [formCount, setFormCount] = useState(0);

	return (
		<div className="m-4 ">
			<label>{label}</label>
			<br />
			<button
				className="p-[2px]  ml-4 transform translate-y-[40px] hover:text-[#de9a74]"
				onClick={() => setFormCount((prevCount) => prevCount - 1)}
			>
				-
			</button>
			<button
				className="p-[2px]  ml-6 transform translate-y-[40px] translate-x-[40px] hover:text-[#de9a74]"
				onClick={() => setFormCount((prevCount) => prevCount + 1)}
			>
				+
			</button>
			<div className="inline-block transform translate-y-[40px] translate-x-[-10px]">
				{formCount}
			</div>
			<input
				className="appearance-none block bg-[#f1f1f1] h-[48px] w-[120px]"
				type="number"
			/>
		</div>
	);
};

export const TextAreaFormInput: React.FC<TextAreaFormInputProps> = ({
	label,
	placeholder,
}) => {
	return (
		<div className="m-4">
			<label>{label}</label>
			<br />
			<textarea placeholder={placeholder} />
		</div>
	);
};
