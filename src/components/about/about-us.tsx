import HeadingSection from "../shared/heading-section";

const AboutUsSection = () => {
  return (
    <section className=" grid md:grid-cols-2 gap-10 container my-20">
      <HeadingSection
        dark
        title="about us"
        heading="Caring For The Health & Well
Being Of Family.
"
        description="Our family-centered approach to healthcare ensures that each member of your family receives personalized attention and care tailored to their unique needs. We believe in building strong relationships with our patients, fostering trust.

"
      >
        <div className=" flex gap-5">
          <div>
            <img src="images/about-footer-img.jpg" alt="" />
          </div>
          <div>
            <h4 className=" text-lg capitalize font-semibold">
              dr. elizabeth foster
            </h4>
            <p className=" text-secondary mt-2 capitalize">family physician</p>
            <img className=" mt-5" src="/images/signature.png" alt="" />
          </div>
        </div>
      </HeadingSection>
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
        className="   "
      >
        <div className="w-1/2 md:w-auto">
          <img
            className=" w-2/3 md:w-auto  md:-translate-y-20 rounded-full"
            src="images/hero-img-1.jpg"
            alt=""
          />
        </div>
        <div className=" w-1/2 md:w-auto">
          <img
            className="  w-2/3 md:w-auto translate-y-20 rounded-full"
            src="images/hero-img-2.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
