const data = [
  {
    step: "Book an Appointment",
    image: "/images/icon-work-step-1.svg",
  },
  {
    step: "Conduct Checkup",
    image: "/images/icon-work-step-2.svg",
  },
  {
    step: "Perform Treatment",
    image: "/images/icon-work-step-3.svg",
  },
  {
    step: "Prescribe & Payment",
    image: "/images/icon-work-step-4.svg",
  },
];

const HowWeWork = () => {
  return (
    <section className="  container my-20">
      <div className=" grid md:grid-cols-2 items-center gap-10">
        <div className="  max-w-md">
          <h4 className=" text-xl uppercase text-secondary">how we work</h4>
          <h1
            className=" mt-5 text-3xl md:text-5xl font-semibold text-primary
           "
          >
            A Comprehensive Directory For Your Health Care.{" "}
          </h1>
        </div>
        <div className=" flex items-center h-full text-lg text-gray-400">
          <p>
            we are your trusted one-stop destination for all your healthcare
            needs. Our comprehensive directory is designed to provide you with
            easy access to a wide range of healthcare services and providers,
            ensuring that you and your family.
          </p>
        </div>
      </div>

      <div className=" mt-10 grid grid-cols-2 gap-10 md:grid-cols-4">
        {data.map((item) => (
          <div
            key={item.step}
            className=" flex-col  mt-5 flex gap-3 items-center"
          >
            <img src={item.image} alt="" />
            <p className=" text-xl text-center  font-semibold text-gray-800">{item.step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
