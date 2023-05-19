const FormComponents = () => {
	return (
		<>
			<div className="m-4">
				<label htmlFor="fname" className="text-sm">
					Name
				</label>
				<br />
				<input type="text" />
			</div>

			<div className="m-4">
				<label htmlFor="password">Password</label>
				<input type="text" placeholder="Wrong Format" />
			</div>

			<div className="m-4">
				<label htmlFor="password">Radio Button</label>
				<input type="radio" />
			</div>

			<div className="m-4">
				<label>Number</label>
				<input type="number" />
			</div>

			<div className="m-4">
				<label>Number</label>
				<input type="textarea" />
			</div>
		</>
	);
};

export default FormComponents;
