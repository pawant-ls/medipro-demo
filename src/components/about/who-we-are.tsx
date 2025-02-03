import HeadingSection from "../shared/heading-section";

const WhoWeAre = () => {
  return (
    <section className="  bg-primary py-20 ">
      <div className=" grid md:grid-cols-2 gap-10 container">
        <div>
          <img src="images/improving-img.jpg" alt="" />
        </div>
        <div>
          <HeadingSection
            watchMore
            wfull
            title="who we are"
            heading="Improving The Quality Of
Your Life Through Better
Health.
"
            description="we offer a wide range of comprehensive healthcare services to address all aspects of your health. From preventive care and health screenings to specialized treatments and chronic disease management.

"
          >
            <div></div>
          </HeadingSection>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
