import { Calendar1 } from "lucide-react";
import CButton from "../button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OpenForAppointment = () => {
  const iconRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const btnRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from([iconRef.current, headingRef.current, descriptionRef.current], {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.2,
      delay: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.from(btnRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power3.inOut",
      stagger: 0.2,
      delay: 0.9,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className=" bg-primary py-16">
      <div className=" container">
        <div className=" flex  flex-col md:flex-row  md:items-center gap-10">
          <img
            ref={iconRef}
            className=" w-10"
            src="/images/icon-appointment.svg"
            alt=""
          />
          <div className=" text-white flex-1">
            <h1 ref={headingRef} className=" text-4xl font-semibold text-white">
              Open for Appointment
            </h1>
            <p ref={descriptionRef} className=" text-lg mt-2">
              we are delighted to announce that our doors are open, and we are
              now accepting appointments to serve you better.
            </p>
          </div>

          <div ref={btnRef}>
            <CButton icon={<Calendar1 />}>Make Appointment</CButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenForAppointment;
