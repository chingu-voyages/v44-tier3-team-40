"use client";
import Button from "@/app/components/Button";
import ProgressStepper from "@/app/components/ProgressStepper";

import {
  TextFormInput,
  RadioFormInput,
  NumberFormInput,
  TextAreaFormInput,
} from "@/app/components/FormInputs";
import { useFormDataContext } from "@/app/components/contexts/FormDataContext";
import { useRouter } from "next/navigation";

const ContactDetailsForm = () => {
  const { formData, setFormData } = useFormDataContext();
  const router = useRouter();

  const handleChange = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  return (
    <div>
      <h2 className="ml-[0.4em] mt-[1em]">Western Rehab PT</h2>
      <div className="w-[310px] h-[20px] ml-[1em] mb-[40px] mt-[10px]">
        <ProgressStepper
          currentStep={3}
          length={5}
          label="Tell us about yourself"
        />
      </div>
      <TextFormInput
        htmlFor="fname"
        label="Name"
        type="text"
        placeholder="your name here"
        onChange={(e) => handleChange("patientName", e.target.value)}
      />
      <TextFormInput
        htmlFor="phone"
        label="Phone"
        type="phone"
        placeholder="your phone here"
        onChange={(e) => handleChange("patientPhone", e.target.value)}
      />
      <TextFormInput
        htmlFor="email"
        label="Email Address"
        type="email"
        placeholder="your email here"
        onChange={(e) => handleChange("patientEmail", e.target.value)}
      />
      <TextAreaFormInput
        label="Reason for visit"
        placeholder="reason for visit"
        onChange={(e) => handleChange("note", e.target.value)}
      />
      <Button
        text="Confirm"
        bgColor="#554ad8"
        textColor="white"
        hoverColor="#A4A4FF"
        hoverText="white"
        className=" ml-[1em] mt-[1em] text-[16px]"
        onClick={() => router.push("/confirm")}
      />
    </div>
  );
};

export default ContactDetailsForm;
