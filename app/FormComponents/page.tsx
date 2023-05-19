const FormComponents = () => {
	return (
		<div className="bg-white">
			<div className="m-4">
				<label htmlFor="fname" className="text-[12px] text-black ">
					Name
				</label>
				<br />
				<input type="text" placeholder="Insert your name" />
			</div>

			<div className="m-4">
				<label htmlFor="password" className="text-[12px] text-black ">
					Password
				</label>
				<br />
				<input type="password" placeholder="Wrong Format Example" />
			</div>

			<div className="m-4 border border-[#cfcfcf;] w-[309px] h-[56px] flex  items-center hover:border-[#554ad8]">
				<input
					className=" border border-[#cfcfcf;] mr-[16px] ml-[16px] checked:bg-[#554AD8] rounded-full 
					checked:h-[25px] checked:rounded-full"
					type="radio"
				/>
				<label className="text-[14px]" htmlFor="password">
					Patient 1
				</label>
			</div>

			<div className="m-4 ">
				<label>Number</label>
				<br />
				<button className="p-[2px]  ml-4 transform translate-y-[40px] hover:text-[#de9a74]">
					-
				</button>
				<button className="p-[2px]  ml-6 transform translate-y-[40px] translate-x-[40px] hover:text-[#de9a74]">
					+
				</button>
				<input
					className="appearance-none block bg-[#f1f1f1] h-[48px] w-[120px] text-center"
					type="number"
				/>
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
