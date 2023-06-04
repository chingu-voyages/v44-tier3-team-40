"use client";

import { useState } from "react";
import Modal from "../../../components/Modal";
import Button from '../../../components/Button'

// This component will be replaced with the finished component made by QA. However, the state and logic for the button/Modal will need to be carried over.
const PlaceholderPage = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<Button 
				text="delete"					
				bgColor="#554ad8"
				textColor="white"
				hoverColor="#A4A4FF"
				hoverText="white"
				className=" ml-[1em] mt-[1em] text-[16px] w-[160px]"
				onClick={handleOpenModal}
			/>

			<Modal isOpen={modalOpen} onClose={handleCloseModal}>
				<h3>Are you sure?</h3>
				<p className="mt-[1em]">
					WARNING! This will DELETE the appointment. The client will be
					notified. This cannot be undone.
				</p>
			</Modal>
		</>
	);
};

export default PlaceholderPage;
