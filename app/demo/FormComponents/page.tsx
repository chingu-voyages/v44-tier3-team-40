"use client";

import TextFormInput, {
  RadioFormInput,
  NumberFormInput,
  TextAreaFormInput,
} from "../../components/FormInputs";

const FormComponents = () => {
  return (
    <div className="bg-white">
      <TextFormInput
        htmlFor="fname"
        label="Name"
        type="text"
        placeholder="Insert your name"
      />

      <TextFormInput
        htmlFor="password"
        label="Password"
        type="password"
        placeholder="Wrong Format Example"
      />

      <RadioFormInput label="Patient 1" />

      <NumberFormInput label="Number" />

      <TextAreaFormInput
        label="Reason for visit"
        placeholder="Type your message here"
      />
    </div>
  );
};

export default FormComponents;
