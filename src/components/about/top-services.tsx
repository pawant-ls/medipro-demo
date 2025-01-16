import { ServicesCard } from "../home/services";
import HeadingSection from "../shared/heading-section";
const data = [
  {
    title: "Modern Laboratory",
    description:
      "Our laboratory is equipped with the latest diagnostic equipment and automation systems, ensuring precise.",
    cta: "Read More",
    image: "/images/icon-service-1.svg",
  },
  {
    title: "Diagnostics Center",
    description:
      "We are committed to providing exceptional laboratory services, supporting healthcare providers.",
    cta: "Read More",
    image: "/images/icon-service-2.svg",
  },
  {
    title: "Experienced Doctors",
    description:
      "We take pride in our team of experienced doctors who are at the forefront of delivering exceptional.",
    cta: "Read More",
    image: "/images/icon-service-3.svg",
  },
];

const TopServices = () => {
  return (
    <section className=" container my-20">
      <HeadingSection
        dark
        title="top services"
        heading="We Are a Pogressive
Medical Clinic.
"
      >
        {null}
      </HeadingSection>

      <div className=" grid grid-cols-3 gap-10 h-full">
        {data.map((item, i) => (
          <ServicesCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default TopServices;
