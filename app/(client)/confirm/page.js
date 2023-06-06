"use client";
import ProgressStepper from "@/app/components/ProgressStepper";
import { useFormDataContext } from "@/app/components/contexts/FormDataContext";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/config";
import { collection, doc, addDoc } from "firebase/firestore";

const ConfirmAppointment = () => {
  // Import context and change hard-coded name, provider, date, and service to the state when available.
  const { formData, setFormData } = useFormDataContext();
  const router = useRouter();

  const handleClick = async () => {
    router.push("/success");
    const docRef = collection(db, "appointments");
    const payload = {
      ...formData,
    };

    await addDoc(docRef, payload, { merge: true });
  };

  return (
    <div>
      <h2 className="ml-[0.5em] mt-[1em]">Western Rehab PT</h2>
      <div className="w-[184px] h-[20px] ml-[1em]">
        <ProgressStepper
          currentStep={4}
          length={5}
          label="Confirm your appointment"
        />
      </div>

      <div className="ml-[1em] pt-[3em] ">
        <div className="flex w-[345px] ">
          <p className="mr-auto">Name:</p>

          {/* Change href to appropriate page when it is created */}
          <button className="border border-black text-[#554ad8] h-[20px] w-[41px] text-[13px] pb-[1.75em] hover:bg-[#554ad8] hover:text-white">
            EDIT
          </button>
        </div>

        <div className="w-[345px]">
          <p className="mb-[0px]">{formData.patientName}</p>
          <p className="mt-[0px] relative bottom-[0.5em]">
            __________________________________________
          </p>
        </div>

        <div className="flex w-[345px] ">
          <p className="mr-auto">Provider:</p>

          {/* Change href to appropriate page when it is created */}
          <button className="border border-black text-[#554ad8] h-[20px] w-[41px] text-[13px] pb-[1.75em] hover:bg-[#554ad8] hover:text-white">
            EDIT
          </button>
        </div>

        <div className="w-[345px]">
          <p className="mb-[0px]">
            {formData.provider.name + " " + formData.provider?.credentials}
          </p>
          <p className="mt-[0px] relative bottom-[0.5em]">
            __________________________________________
          </p>
        </div>

        <div className="flex w-[345px] ">
          <p className="mr-auto">When:</p>

          {/* Change href to appropriate page when it is created */}
          <button className="border border-black text-[#554ad8] h-[20px] w-[41px] text-[13px] pb-[1.75em] hover:bg-[#554ad8] hover:text-white">
            EDIT
          </button>
        </div>

        <div className="w-[345px]">
          <p className="mb-[0px]">
            {new Date(formData.date).toLocaleDateString() +
              "@" +
              new Date(formData.date).toLocaleTimeString()}
          </p>
          <p className="mt-[0px] relative bottom-[0.5em]">
            __________________________________________
          </p>
        </div>

        <div className="flex w-[345px] ">
          <p className="mr-auto">Service:</p>

          {/* Change href to appropriate page when it is created */}
          <button className="border border-black text-[#554ad8] h-[20px] w-[41px] text-[13px] pb-[1.75em] hover:bg-[#554ad8] hover:text-white">
            EDIT
          </button>
        </div>

        <div className="w-[345px]">
          <p className="mb-[0px]">{formData.service}</p>
          <p className="mt-[0px] relative bottom-[0.5em]">
            __________________________________________
          </p>
        </div>
      </div>

      <button
        onClick={handleClick}
        className="h-[48px] w-[160px] ml-[1em] mt-[1em] bg-[#554ad8] text-white center hover:bg-[#a4a4ff] "
      >
        CONFIRM
      </button>
    </div>
  );
};

export default ConfirmAppointment;
