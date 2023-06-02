import Button from "../components/Button";

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) {
		return null; // Return null if modal is not open
	}

	return (
		<div className=" flex justify-center items-center bg-black bg-opacity-25 w-[w-100%] h-[800px]">
			<div className="w-[356px] h-[388px]  flex flex-col bg-white ">
				<div className="w-[256px] h-[82px] ml-[1em] mt-[1em] font-medium">
					{children}
				</div>
				<div className="flex flex-col mt-[8em] gap-[1em] ml-[1em]">
					<Button onClick={onClose} text={"Cancel"} />
					<Button
						onClick={onClose}
						text={"Delete"}
						bgColor={"white"}
						textColor={"black"}
						hoverColor="black"
						hoverText="white"
					/>
				</div>
			</div>
		</div>
	);
};

export default Modal;
