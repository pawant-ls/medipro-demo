import { Calendar1 } from "lucide-react";
import CButton from "../button";

const OpenForAppointment = () => {
  return (
    <div className=" bg-primary py-16">
      <div className=" container">
        <div className=" flex  flex-col md:flex-row  md:items-center gap-10">
          <img className=" w-10" src="/images/icon-appointment.svg" alt="" />
          <div className=" text-white flex-1">
            <h1 className=" text-4xl font-semibold text-white">
              Open for Appointment
            </h1>
            <p className=" text-lg mt-2">
              we are delighted to announce that our doors are open, and we are
              now accepting appointments to serve you better.
            </p>
          </div>

          <div>
            <CButton icon={<Calendar1 />}>Make Appointment</CButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenForAppointment;
