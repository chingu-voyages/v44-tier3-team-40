import ProgressStepper from "../../components/ProgressStepper";
import DoctorCard from "@/app/CardComponents/DoctorCard";
import { ref, onValue } from "firebase/database";
import { doctorsInDB } from "../../../firebase/collections/doctors";


onValue(doctorsInDB, function(snapshot) {
    if (snapshot.exists()) {
        const doctorsArray = Object.entries(snapshot.val());
        let doctorDataArray;

        // const testDoctorName = testDataArray

        console.log("doctors array" + doctorsArray);
    
        for (let i = 0; i < doctorsArray.length; i++) {
            doctorDataArray = doctorsArray[i][1];

            // console.log("doctor index:" + i + " " );
            // console.log(doctorsArray[i]);

            // console.log("doctor name" + i + " " );
            // console.log(doctorsArray[i][1]);
        }

        console.log(doctorDataArray);
    } else {
        console.log("in the else of onValue");
    }
})


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
