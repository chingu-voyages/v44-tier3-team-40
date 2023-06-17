'use client'
import ProgressStepper from "../../components/ProgressStepper";
import DoctorCard from "@/app/components/DoctorCard";
import { useFormDataContext } from "@/app/components/contexts/FormDataContext";
import { useRouter } from "next/navigation";


// onValue(doctorsInDB, function(snapshot) {
//     if (snapshot.exists()) {
//         const doctorsArray = Object.entries(snapshot.val());
//         let doctorDataArray;

//         // const testDoctorName = testDataArray

//         console.log("doctors array" + " " + doctorsArray);
    
//         for (let i = 0; i < doctorsArray.length; i++) {
//             doctorDataArray = doctorsArray[i][1];

//             // console.log("doctor index:" + " " + i + " ");
//             // console.log(doctorsArray[i]);

//             // console.log("doctor name" + " " + i + " ");
//             // console.log(doctorsArray[i][1]);
//         }

//         console.log(doctorDataArray);
//     } else {
//         console.log("in the else of onValue");
//     }
// })




const ChooseProviderPage = () => {
    const router = useRouter();

    const doctors = [
        {
        name: 'Dr. Adam',
        credentials: 'PT DPT'
    },
    {
        name: 'Dr. Mercado',
        credentials: 'PT DPT OCS'
    },
    {
        name: 'Mr. Coleman',
        credentials: 'EXE NA'
    },
    ]
    
    const {formData , setFormData} = useFormDataContext()

    const handleSubmit =(doctor) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            provider: doctor,
          }));
        
          router.push('/service');
    }

    return (
        <div>
            <h1 className="text-[40px]">Western Rehab PT</h1>
            <h6 className="text-blueLapis">Schedule your appointment</h6>
            <br />
            <ProgressStepper currentStep={0} length={5} />

            <hr className="h-px my-6 border-0 bg-neutral-950" />

            {doctors.map((doctor, index)=> (
            <DoctorCard key={doctor + index} name={doctor.name} credentials={doctor.credentials} handleSubmit={() => handleSubmit(doctor)}/>
            ))}

            <hr className="h-px my-8 border-0 bg-neutral-950" />
        </div>
    )
}

export default ChooseProviderPage;