import HeadingSection from "../shared/heading-section";
const images = [
  "/images/cultuer-1.jpg",
  "/images/cultuer-2.jpg",
  "/images/cultuer-3.jpg",
  "/images/cultuer-4.jpg",
  "/images/cultuer-5.jpg",
  "/images/cultuer-6.jpg",
  "/images/cultuer-7.jpg",
  "/images/cultuer-8.jpg",
  "/images/cultuer-9.jpg",
  "/images/cultuer-10.jpg",
];
const OurCulture = () => {
  return (
    <section className=" overflow-x-hidden  my-20 ">
      <div className="container grid md:grid-cols-2 gap-5 s">
        <HeadingSection
          wfull
          dark
          title="our culture
"
          heading="Our Infrastructure & Culture



"
        ></HeadingSection>
        <div className=" flex items-center ">
          <p className=" text-gray-700">
            At our medipro , we pride ourselves on fostering a culture of care,
            where every individual’s well-being is our utmost priority. Our
            commitment to excellence in healthcare is grounded.
          </p>
        </div>
      </div>

      <div className=" my-10 grid grid-cols-5 ">
        {images.map((image, i) => (
          <img
            className=" hover:scale-110 transition-all"
            key={i}
            src={image}
            alt=""
          />
        ))}
      </div>
    </section>
  );
};

export default OurCulture;
