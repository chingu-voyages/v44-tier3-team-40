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
				<button
					type="submit"
					className="h-[48px] w-[207px] ml-[1em] mt-[2em] text-white  bg-[#554ad8] center"
				>
					BOOK ANOTHER APPOINTMENT
				</button>
			</div>

			{/* Button to be replaced with component once finished */}
			{/* Add link and href to another page when designated */}
			<div>
				<button
					type="submit"
					className="h-[48px] w-[207px] ml-[1em] mt-[1em] text-white  bg-[#554ad8] center"
				>
					ADD TO GOOGLE CALENDAR
				</button>
			</div>
		</>
	);
};

export default Confirmation;
