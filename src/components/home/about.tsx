import { ArrowRightCircle, Check } from "lucide-react";
import CButton from "../button";

const healthCareNeeds = [
  "Mental health Solutions",
  "Rapid Patient Improvement",
  "World Class Treatment",
];
const About = () => {
  return (
    <section className=" container my-20 ">
      <div className=" grid md:grid-cols-3 gap-0">
        <div className=" h-full flex flex-col h-full ">
          <div className=" h-full bg-secondary text-white p-10">
            <h3 className=" text-3xl font-medium">
              Don't <span className=" font-bold">Hesitate</span> To Contact us
            </h3>
          </div>
          <div className=" text-center p-5 bg-black text-white">
            Make Appointment
          </div>
        </div>

        <div className=" bg-primary p-10">
          <img src="/images/icon-home-contact-1.svg" alt="" />

          <div className=" mt-5">
            <h4 className=" text-white font-semibold text-xl">
              Need Family Health
            </h4>
            <p className=" text-gray-300 mt-3">
              we understand the importance of family health overall well-being.
            </p>
          </div>
        </div>
        <div className=" bg-primary p-10">
          <img src="/images/icon-home-contact-2.svg" alt="" />

          <div className=" mt-5">
            <h4 className=" text-white font-semibold text-xl">
              24 hours service
            </h4>
            <p className=" text-gray-300 mt-3">
              we take pride in offering 24-hour medical services to ensure that
              you.
            </p>
          </div>
        </div>
      </div>

      <div className=" grid md:grid-cols-2 gap-10 container py-40">
        <div className=" mt-20 md:mt-0 order-2 max-w-md">
          <h4 className=" text-xl uppercase text-secondary">
            about medicalife
          </h4>
          <h1
            className=" mt-5 text-3xl md:text-5xl font-semibold text-primary
           "
          >
            Our Best Services & Poplular Treatment Here.
          </h1>
          <h4 className=" text-gray-700  mt-5">
            we take pride in offering a wide range of best-in-class medical
            services and popular treatments to cater to your diverse healthcare
            needs .
          </h4>

          <div className=" space-y-2 mt-5">
            {healthCareNeeds.map((need, i) => (
              <div key={i} className=" flex items-center gap-2">
                <div className="  rounded-full p-1   bg-secondary">
                  <Check size={16} className=" text-white" />
                </div>
                <p className=" text-gray-700">{need}</p>
              </div>
            ))}
          </div>
          <div className=" mt-5 ">
            <CButton icon={<ArrowRightCircle />}>Read More</CButton>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
            background: "url(/images/about-bg.png) no-repeat center center",
            // backgroundSize: "65% auto",
          }}
          className=" order-1  "
        >
          <div className=" w-1/2 md:w-auto">
            <img
              className=" -translate-y-20 rounded-full"
              src="images/about-img-2.jpg"
              alt=""
            />
          </div>
          <div className=" w-1/2 md:w-auto">
            <img
              className=" translate-y-20 rounded-full"
              src="images/about-img-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
