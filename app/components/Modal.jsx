import Button from "../Button";

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) {
		return null; // Return null if modal is not open
	}

	return (
		<div className="z-0 flex justify-center items-center bg-[rgba(0,0,0,0.1)] w-[w-100%] h-[800px]">
			<div className="overlay">
				<div className="w-[356px] h-[388px]  flex flex-col bg-white z-10">
					<div className="w-[256px] h-[82px] ml-[1em] mt-[1em] font-medium">
						{children}
					</div>
					<div className="flex flex-col mt-[8em]">
						<Button onClick={onClose} className="mb-[1em]" text={"Cancel"} />

						<Button
							onClick={onClose}
							className="h-[48px] w-[160px] ml-[1em] mt-[1em] bg-[black] text-white center"
							text={"Delete"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
//     text: PropTypes.string,
//     bgColor: PropTypes.string,
//     textColor: PropTypes.string,
//     hoverColor: PropTypes.string,
//     hoverText: PropTypes.string,
