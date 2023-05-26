import Link from "next/link";
import { RadioFormInput } from "../../FormComponents/FormInputs";

const ChooseAppointment = () => {
	return (
		<>
			<h2>Western Rehab PT</h2>
			<p>Select a service</p>
			{/* Component */}
			<RadioFormInput label="Initial PT Evaluation 60min - $125" />
			<RadioFormInput label="Personal Training - $125" />
			<RadioFormInput label="PT Follow Up Session - $125" />
			<RadioFormInput label="Back Realignment - $125" />
		</>
	);
};

export default ChooseAppointment;
