import Link from "next/Link";

const DoctorCard = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/images/doctorImage.jpeg" alt="doctor dummy image"></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Dr. Name</div>
                <p className="text-gray-700 text-base">
                    Dr. credentials
                </p>
            </div>
            <Link href="/date">
                <button id="test-add-button" className="w-[245px] border-black rounded-lg border-2 ">BOOK NOW</button>
			</Link>
            
        </div>
    )
}

export default DoctorCard;