import { ArrowBigRight } from "lucide-react";
import HeadingSection from "../shared/heading-section";
const data = [
  {
    category: "cardiology",
    image: "/images/icon-specialist-1.svg",
  },
  {
    category: "diagnostics",
    image: "/images/icon-specialist-2.svg",
  },
  {
    category: "virology",
    image: "/images/icon-specialist-3.svg",
  },
  {
    category: "therapy",
    image: "/images/icon-specialist-4.svg",
  },
];

const TopServices = () => {
  return (
    <section className=" my-20 container ">
      <div className=" grid md:grid-cols-2 gap-5 s">
        <HeadingSection
          wfull
          dark
          title="top service"
          heading="We Are a Pogressive Medical
Clinic.


"
        ></HeadingSection>
        <div className=" flex items-center ">
          <p className=" text-gray-700">
            Welcome to our comprehensive medical services designed to cater to
            your diverse healthcare needs. We are committed to delivering
            top-notch medical care with a patient-centered approach.
          </p>
        </div>
      </div>

      <div className=" grid mt-5 md:grid-cols-4 gap-5">
        {data.map((item, i) => (
          <div
            className=" p-7 border-2  border-primary flex flex-col items-center gap-5"
            key={i}
          >
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <h4 className=" text-xl capitalize font-semibold">
                {item.category}
              </h4>
            </div>

            <div className=" bg-primary p-1 rounded-full inline-block text-white">
              <ArrowBigRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopServices;
