import { FC } from "react";
import ProgressStepper from "../../components/ProgressStepper"
import DoctorCard from "@/app/CardComponents/DoctorCard";


const ChooseProviderPage = () => {
    return (
        <div>
            <h1 className="text-[40px]">Western Rehab PT</h1>
            <h6 className="text-blueLapis">Schedule your appointment</h6>
            <br />
            <ProgressStepper currentStep={0} length={5} />

            <hr className="h-px my-6 bg-gray-200 border-0 bg-neutral-950" />

            <DoctorCard />

            <hr className="h-px my-8 bg-gray-200 border-0 bg-neutral-950" />
        </div>
    )
}

export default ChooseProviderPage;
