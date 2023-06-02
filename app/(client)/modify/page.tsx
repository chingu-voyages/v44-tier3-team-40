import TextFormInput from "@/app/components/FormInputs";
import Link from "next/link";

const ModifyAppointment = () => {
  return (
    <>
      <h2 className="ml-[0.5em] mt-[3em]  h-[142px] w-[345px]">
        Modify an appointment
      </h2>

      <TextFormInput
        type="text"
        placeholder="your confirmation number here"
        htmlFor="confirmNum"
        label="Confirmation Number"
      />

      {/* Button to be replaced with component once finished */}
      <Link href="/admin/confirmation">
        <button
          type="submit"
          className="h-[48px] w-[160px] ml-[1em] mt-[1em] mb-[1em] bg-[#554ad8] text-white  center"
        >
          Submit
        </button>
      </Link>

      <div className="ml-[1em] text-[#554ad8]">
        <p>Forgot your confirmation number?</p>
        <p>Call us 513-304-4065</p>
      </div>
    </>
  );
};

export default ModifyAppointment;
