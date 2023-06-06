import Link from "next/link";

import TextFormInput from "@/app/components/FormInputs";
import { TextAreaFormInput } from "@/app/components/FormInputs";
import Button from "../../../../components/Button";

const AppointmentDetailsEdit = () => {
	return (
		<>
			{/* Change hard coded date to context state when available */}
			<h2 className="mt-[1em] ml-[0.25em]">Feb 20 @ 9:30</h2>

			{/* Add state as input when available */}
			<TextFormInput
				type="text"
				label="Provider"
				placeholder="Doctor Lemon"
				htmlFor="provider-name"
			/>

			{/* Add state as input when available */}
			<TextFormInput
				type="text"
				label="Service"
				placeholder="PT Follow Up"
				htmlFor="service"
			/>

			{/* Date & Time Components... */}
			<h3 className=" ml-[0.25em]">Patient Details</h3>

			{/* Add state as input when available */}
			<TextFormInput
				type="text"
				label="Name"
				placeholder="Adrian Beans"
				htmlFor="patient-name"
			/>

			{/* Add state as input when available */}
			<TextFormInput
				type="text"
				label="Email"
				placeholder="agamebeeny@gmail.com"
				htmlFor="email"
			/>

			{/* Add state as input when available */}
			<TextFormInput
				type="text"
				label="Phone"
				placeholder="540-223-4490"
				htmlFor="phone"
			/>

			<TextAreaFormInput
				label="Reason for visit"
				placeholder="Type your message here"
			/>

			<div className="flex ml-[1em]">
				<Link href={"/admin/dashboard/appointment-details"}>
					<div className="mr-[1em]">
						<Button
							text="Save"
							textColor="white"
							bgColor="#554ad8"
							hoverColor="#A4A4FF"
							hoverText={null}
							onClick={null}
						/>
					</div>
				</Link>
				{/* Will need to make sure states are updated upon clicking */}
				<Link href={"/admin/dashboard/appointment-details"}>
					<Button
						text="Cancel"
						textColor="black"
						bgColor="white"
						hoverColor="black"
						hoverText="white"
						onClick={null}
					/>
				</Link>
			</div>
		</>
	);
};

export default AppointmentDetailsEdit;
