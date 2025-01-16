"use client";
import { APIProvider } from "@vis.gl/react-google-maps";
import SharedHeroSection from "../shared/hero";
import CustomMap from "./map";
import ContactForm from "./form";
const data = [
  {
    type: "Help Line",
    value: "(+0) 123 456 789",
  },
  {
    type: "Location",
    value: "Jl. Raya Kuta No.70, Kuta",
  },
  {
    type: "Email Address",
    value: "healthcare@gmail.com",
  },
];

const ContactUsPage = () => {
  return (
    <section>
      <SharedHeroSection page="Contact Us"></SharedHeroSection>
      <section
        style={{
          backgroundImage: "url(/images/map.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" relative w-full h-[400px]"
      >
        <div className=" bg-primary  text-white absolute left-1/2 -translate-x-1/2 bottom-10 p-5 grid grid-cols-3 gap-5 ">
          {data.map((item, i) => (
            <div key={i} className=" flex flex-col items-center gap-2">
              <span className=" text-secondary text-xl font-semibold">
                {" "}
                {item.type}
              </span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </section>
      <ContactForm />
    </section>
  );
};

export default ContactUsPage;
