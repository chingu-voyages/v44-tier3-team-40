
const DoctorCard = ({name, credentials , handleSubmit}) => {


    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img className="w-full" src="/images/doctorImage.jpeg" alt="doctor dummy image"></img> */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {credentials}
                </p>
            </div>
                <button onClick={handleSubmit} id="test-add-button" className="w-[245px] border-black rounded-lg border-2 ">BOOK NOW</button>
        </div>
    )
}

export default DoctorCard;