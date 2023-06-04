import Link from "next/link";
import Button from './components/Button'

const Homepage = () => {
	return (
		<div className="mt-[8em]">
			<div className="flex justify-end mr-[1em]  relative bottom-[10.5em]">
				<img src="/tp_logo.png" alt="The logo for Therapease" />
			</div>

			<h2 className="ml-[0.5em] w-[345px] h-[95px]">
				The care you need, when you need it.
			</h2>

			<p className="ml-[1em] mt-[0] w-[324px] h-[86px]">
				Say goodbye to long wait times and scheduling headaches. Book your
				physical therapy session with TherapEase in minutes!
			</p>

			{/* Button to be replaced with component once finished */}
			{/* Change href to "Choose Provider" page when available */}
			<Link href="/">
				<Button 
					text="get started"
					bgColor="white"
					textColor="black"
					hoverColor="black"
					hoverText="white"
					className=" ml-[1em] mt-[1em] text-[16px] border border-black"
					onClick={""}
				/>
			</Link>

			<p className="ml-[1em] mt-[2em] text-[#554ad8]">
				Already have an appointment?
			</p>

			<Link href="/admin/modify">
				<p className="ml-[1em] mt-[0.5em] text-[#554ad8] cursor-pointer">
					Modify it here.
				</p>
			</Link>
		</div>
	);
};

export default Homepage;
