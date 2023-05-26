import Link from "next/link";
import { RadioFormInput } from "../../FormComponents/FormInputs";
import ProgressStepper from "@/app/components/ProgressStepper";

const ChooseAppointment = () => {
	return (
		<>
			<h2 className="ml-[0.5em] mt-[1em]">Western Rehab PT</h2>
			<div className="w-[184px] h-[20px] ml-[1em]">
				<ProgressStepper currentStep={1} length={5} label="Select a service" />
			</div>

			<div className="pt-[3em]">
				<Link href={"/date"}>
					<RadioFormInput label="Initial PT Evaluation 60min - $125" />
				</Link>

				<Link href={"/date"}>
					<RadioFormInput label="Personal Training - $125" />
				</Link>
				<Link href={"/date"}>
					<RadioFormInput label="PT Follow Up Session - $125" />
				</Link>
				<Link href={"/date"}>
					<RadioFormInput label="Back Realignment - $125" />
				</Link>
			</div>
		</>
	);
};

export default ChooseAppointment;
