import Link from "next/link";

const AdminAppointment = () => {
	return (
		<>
			{/* Placeholder to go tto the Appointment Edit Page */}
			<Link
				href={"/admin/dashboard/appointment-details/appointment-details-edit"}
			>
				<button className="bg-purple-500">Edit</button>
			</Link>
		</>
	);
};

export default AdminAppointment;
