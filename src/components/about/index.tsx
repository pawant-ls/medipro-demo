import OpenForAppointment from "../home/open-for-appointment";
import SharedHeroSection from "../shared/hero";
import AboutUsSection from "./about-us";
import Caring from "./caring";
import TopServices from "./top-services";
import WhoWeAre from "./who-we-are";

const AboutUs = () => {
  return (
    <main>
      <SharedHeroSection page="About Us" />

      <AboutUsSection />
      <WhoWeAre />
      <TopServices />
      <Caring />
      <OpenForAppointment />
    </main>
  );
};

export default AboutUs;
