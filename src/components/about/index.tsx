"use client";
import OpenForAppointment from "../home/open-for-appointment";
import SharedHeroSection from "../shared/hero";
import AboutUsSection from "./about-us";
import Caring from "./caring";
import OurBestDoctors from "./our-best-doctors";
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
      <OurBestDoctors />
    </main>
  );
};

export default AboutUs;
