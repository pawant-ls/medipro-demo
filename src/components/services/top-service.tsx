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
      <div className=" grid grid-cols-2 gap-5 s">
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

      <div className=" grid grid-cols-4 gap-5">
        {data.map((item, i) => (
          <div
            className=" p-6 border-2  border-primary flex flex-col items-center gap-5"
            key={i}
          >
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <h4 className=" text-lg capitalize font-semibold">
                {item.category}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopServices;
