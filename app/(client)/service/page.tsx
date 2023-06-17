'use client'
import Link from "next/link";
import { RadioFormInput } from "@/app/components/FormInputs";
import ProgressStepper from "@/app/components/ProgressStepper";
import { useFormDataContext } from "@/app/components/contexts/FormDataContext";
import { useRouter } from "next/navigation";


const ChooseAppointment = () => {
  const {formData , setFormData} = useFormDataContext()
  const router = useRouter();

  const handleChange = (value) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          service: value
        }))
  }

  return (
    <>
      <h2 className="ml-[0.5em] mt-[1em]">Western Rehab PT</h2>
      <div className="w-[184px] h-[20px] ml-[1em]">
        <ProgressStepper currentStep={1} length={5} label="Select a service" />
      </div>

      {/* setFormData((prevFormData) => ({
          ...prevFormData,
          date: finalDate,
        })); */}

      <form className="pt-[3em]">
          <RadioFormInput group='service' label="Initial PT Evaluation 60min - $125" onChange={(e) => handleChange(e.target.value)}/>
          <RadioFormInput group='service' label="Personal Training - $125" onChange={(e) => handleChange(e.target.value)} />
          <RadioFormInput group='service' label="PT Follow Up Session - $125" onChange={(e) => handleChange(e.target.value)}/>
          <RadioFormInput group='service' label="Back Realignment - $125" onChange={(e) => handleChange(e.target.value)}/>
      </form>
      <button onClick={() => router.push('/date')}>Confirm</button>
    </>
  );
};

export default ChooseAppointment;
