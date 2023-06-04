import Button from '../../components/Button'

const Confirmation = () => {
	const confirmationNumber = () => {
		return Math.floor(Math.random() * 10000);
	};

	return (
		<>
			<div className="mt-[3em] ml-[1em]">
				<h2>Wester Rehab PT</h2>
				<p className="text-[#554ad8]">Your appointment is confirmed!</p>
			</div>

			<h3 className="ml-[0.75em] mt-[1em] w-[445px] h-[78px]">
				Your confirmation number is: {confirmationNumber()}{" "}
			</h3>

			{/* Button to be replaced with component once finished */}
			{/* Add link and href to another page when designated */}
			<div>
				<Button 
					text="book another appointment"
					bgColor="#554ad8"
					textColor="white"
					hoverColor="#A4A4FF"
					hoverText="white"
					className=" ml-[1em] mt-[1em] text-[16px] w-[207px]"
					onClick={""}
				/>
			</div>

			{/* Button to be replaced with component once finished */}
			{/* Add link and href to another page when designated */}
			<div>
				<Button 
					text="add to google calendar"
					bgColor="#554ad8"
					textColor="white"
					hoverColor="#A4A4FF"
					hoverText="white"
					className=" ml-[1em] mt-[1em] text-[16px] w-[207px]"
					onClick={""}
				/>
			</div>
		</>
	);
};

export default Confirmation;
