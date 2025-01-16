import OurBestDoctors from "../about/our-best-doctors";
import SharedHeroSection from "../shared/hero";
import AppDownload from "./app-download";
import OurCulture from "./our-culture";
import OurServices from "./our-services";
import TopServices from "./top-service";

const Services = () => {
  return (
    <main>
      <SharedHeroSection page="Services"></SharedHeroSection>
      <OurServices />
      <TopServices />
      <OurBestDoctors />
      <OurCulture />
      <AppDownload />
    </main>
  );
};

export default Services;
