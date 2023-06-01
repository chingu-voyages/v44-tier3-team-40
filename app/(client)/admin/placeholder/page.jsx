"use client";

import { useState } from "react";
import Modal from "../../../components/Modal";

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
			<button
				onClick={handleOpenModal}
				className="h-[48px] w-[160px] ml-[1em] mt-[1em] bg-[#554ad8] text-white center"
			>
				Delete
			</button>
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
