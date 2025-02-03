import { useRef } from "react";
import HeadingSection from "../shared/heading-section";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRightCircle } from "lucide-react";
const data = [
  {
    title: "Modern Laboratory",
    description:
      "Our laboratory is equipped with the latest diagnostic equipment and automation systems, ensuring precise.",
    cta: "Read More",
    image: "/images/icon-service-1.svg",
    whiteImage: "/images/icon-service-white-1.svg",
  },
  {
    title: "Diagnostics Center",
    description:
      "We are committed to providing exceptional laboratory services, supporting healthcare providers.",
    cta: "Read More",
    image: "/images/icon-service-2.svg",
    whiteImage: "/images/icon-service-white-2.svg",
  },
  {
    title: "Experienced Doctors",
    description:
      "We take pride in our team of experienced doctors who are at the forefront of delivering exceptional.",
    cta: "Read More",
    image: "/images/icon-service-3.svg",
    whiteImage: "/images/icon-service-white-3.svg",
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

      <div className=" grid md:grid-cols-3 gap-10 h-full">
        {data.map((item, i) => (
          <ServicesCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

const ServicesCard = ({ item }: any) => {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    gsap.from(
      [
        iconRef.current,
        titleRef.current,
        descriptionRef.current,
        ctaRef.current,
      ],
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power3.inOut",
        stagger: 0.2,
        delay: 0.5,
        scale: 0.7,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  });
  return (
    <div
      ref={containerRef}
      className=" overflow-hidden relative group bg-white  "
    >
      <div className=" relative group-hover:text-white z-10 p-5">
        <div>
          <img
            ref={iconRef}
            className=" group-hover:hidden block  "
            src={item.image}
            alt=""
          />
          <img
            ref={iconRef}
            className=" hidden group-hover:block "
            src={item.whiteImage}
            alt=""
          />
        </div>
        <h4
          ref={titleRef}
          className=" text-2xl font-medium group-hover:text-white text-primary  mt-5 "
        >
          {item.title}
        </h4>
        <p
          ref={descriptionRef}
          className=" group-hover:text-white  mt-3 text-gray-600 "
        >
          {item.description}
        </p>
        <div
          ref={ctaRef}
          className=" flex items-center gap-2 capitalize font-medium text-lg text-primary mt-5 "
        >
          <span>{item.cta}</span>

          <ArrowRightCircle />
        </div>
      </div>

      <div className=" inset-x-0 h-full absolute group-hover:bottom-0 transition-all -bottom-full z-0  bg-secondary "></div>
    </div>
  );
};

export default TopServices;
