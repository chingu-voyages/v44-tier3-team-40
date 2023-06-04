import Link from "next/link";
import Button from "@/app/components/Button";

import ProgressStepper from "@/app/components/ProgressStepper";

const ConfirmAppointment = () => {
	// Import context and change hard-coded name, provider, date, and service to the state when available.

	return (
		<>
			<h2 className="ml-[0.5em] mt-[1em]">Western Rehab PT</h2>
			<div className="w-[184px] h-[20px] ml-[1em]">
				<ProgressStepper
					currentStep={4}
					length={5}
					label="Confirm your appointment"
				/>
			</div>

			<div className="ml-[1em] pt-[3em] ">
				<div className="flex w-[345px] ">
					<p className="mr-auto">Name:</p>

					{/* Change href to appropriate page when it is created */}
					<Link href={"/"}>
						<Button 
							text="Edit"
							bgColor="white"
							textColor="#554ad8"
							hoverColor="#554ad8"
							hoverText="white"
							className="border border-black h-[0] w-[41px] text-[13px] pb-[1.75em]"
							onClick={""}
						/>
					</Link>
				</div>

				<div className="w-[345px]">
					<p className="mb-[0px]">Ben Barns</p>
					<p className="mt-[0px] relative bottom-[0.5em]">
						__________________________________________
					</p>
				</div>

				<div className="flex w-[345px] ">
					<p className="mr-auto">Provider:</p>

					{/* Change href to appropriate page when it is created */}
					<Link href={"/"}>
						<Button 
							text="Edit"
							bgColor="white"
							textColor="#554ad8"
							hoverColor="#554ad8"
							hoverText="white"
							className="border border-black h-[0] w-[41px] text-[13px] pb-[1.75em]"
							onClick={""}
						/>
					</Link>
				</div>

				<div className="w-[345px]">
					<p className="mb-[0px]">Dr. John Tomato</p>
					<p className="mt-[0px] relative bottom-[0.5em]">
						__________________________________________
					</p>
				</div>

				<div className="flex w-[345px] ">
					<p className="mr-auto">When:</p>

					{/* Change href to appropriate page when it is created */}
					<Link href={"/"}>
						<Button 
							text="Edit"
							bgColor="white"
							textColor="#554ad8"
							hoverColor="#554ad8"
							hoverText="white"
							className="border border-black h-[0] w-[41px] text-[13px] pb-[1.75em]"
							onClick={""}
						/>
					</Link>
				</div>

				<div className="w-[345px]">
					<p className="mb-[0px]">Tuesday, May 30th 2023 @ 10:20 A.M</p>
					<p className="mt-[0px] relative bottom-[0.5em]">
						__________________________________________
					</p>
				</div>

				<div className="flex w-[345px] ">
					<p className="mr-auto">Service:</p>

					{/* Change href to appropriate page when it is created */}
					<Link href={"/"}>
						{/* <button className="border border-black text-[#554ad8] h-[20px] w-[41px] text-[13px] pb-[1.75em] hover:bg-[#554ad8] hover:text-white">
							EDIT
						</button> */}
						<Button 
							text="Edit"
							bgColor="white"
							textColor="#554ad8"
							hoverColor="#554ad8"
							hoverText="white"
							className="border border-black h-[0] w-[41px] text-[13px] pb-[1.75em]"
							onClick={""}
						/>
					</Link>
				</div>

				<div className="w-[345px]">
					<p className="mb-[0px]">Initial PT Evaluation</p>
					<p className="mt-[0px] relative bottom-[0.5em]">
						__________________________________________
					</p>
				</div>
			</div>

			<Link href={"/success"}>
				<Button 
					text="Confirm"
					bgColor="#554ad8"
					textColor="white"
					hoverColor="#A4A4FF"
					hoverText="white"
					className=" ml-[1em] mt-[1em] text-[16px]"
					onClick={""}
				/>
			</Link>
		</>
	);
};

export default ConfirmAppointment;
