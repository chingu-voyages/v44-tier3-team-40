const FormComponents = () => {
	return (
		<div className="bg-white">
			<div className="m-4">
				<label htmlFor="fname" className="text-[12px] text-black">
					Name
				</label>
				<br />
				<input type="text" placeholder="Insert your name" />
			</div>

			<div className="m-4">
				<label htmlFor="password" className="text-[12px] text-black">
					Password
				</label>
				<br />
				<input type="password" placeholder="Wrong Format Example" />
			</div>

			<div className="m-4 border border-[#cfcfcf;] w-[309px] h-[56px] flex  items-center hover:border-[#554ad8]">
				<input
					className="h-[20px] w-[20px] border border-[#cfcfcf;] mr-[16px] ml-[16px] checked:bg-purple-500"
					type="radio"
				/>
				<label className="text-[14px]" htmlFor="password">
					Patient 1
				</label>
			</div>

			<div className="m-4">
				<label>Number</label>
				<br />
				<input type="number" />
			</div>

			<div className="m-4">
				<label>Reason for visit</label>
				<br />
				<textarea placeholder="Type your message here" />
			</div>
		</div>
	);
};

export default FormComponents;
