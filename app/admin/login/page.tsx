import TextFormInput from "@/app/components/FormInputs";
import Link from "next/link";

const AdminPortal = () => {
  return (
    <>
      <div className="flex justify-end mr-[1em] relative bottom-[2.5em]">
        <img src="/tp_logo.png" alt="The logo for Therapease" />
      </div>

      <div>
        <h2 className="ml-[0.5em]">Admin Portal</h2>

        <TextFormInput
          type="text"
          label="Username"
          htmlFor="fname"
          placeholder="your username here"
        />

        <TextFormInput
          type="password"
          label="Passwrd"
          htmlFor="password"
          placeholder="your password here"
        />

        {/* Button to be replaced with component once finished */}
        <Link href="/admin/dashboard">
          <button className="h-[48px] w-[160px] ml-[1em] mt-[1em] bg-[#554ad8] text-white center">
            Login
          </button>
        </Link>

        {/* Change href to another page that has yet to be designated */}
        <Link href="/">
          <p className="ml-[1em] mt-[1em] text-[#554ad8] cursor-pointer">
            Trouble logging in?
          </p>
        </Link>
      </div>
    </>
  );
};

export default AdminPortal;
