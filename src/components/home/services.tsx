import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const data = [
  {
    title: "Eye Care",
    description:
      "We understand the importance of clear vision and its impact on your.",
    cta: "read more",
    image: "/images/icon-medical-service-1.svg",
  },
  {
    title: "Medical Checkup",
    description:
      "During your medical checkup, our skilled healthcare professionals.",
    cta: "read more",
    image: "/images/icon-medical-service-2.svg",
  },
  {
    title: "Dental Care",
    description:
      "We are passionate about providing top-notch dental care to help you.",
    cta: "read more",
    image: "/images/icon-medical-service-3.svg",
  },
  {
    title: "Laboratory Service",
    description:
      "We understand the critical role that accurate diagnostics play in guiding.",
    cta: "read more",
    image: "/images/icon-medical-service-4.svg",
  },
  {
    title: "Patient-Centered",
    description:
      "Hospitals, or clinics with positive reviews and ratings from patients.",
    cta: "read more",
    image: "/images/icon-medical-service-5.svg",
  },
];

const Services = () => {
  return (
    <section className=" py-20  bg-[url('/images/half-circle-3.png')] bg-no-repeat relative bg-left-top">
      <div className=" grid md:grid-cols-3 gap-5 container ">
        <div>
          <div className=" order-2 max-w-md">
            <h4 className=" text-xl uppercase text-secondary">
              medical services
            </h4>
            <h1
              className=" mt-5 text-3xl md:text-5xl font-semibold text-primary
           "
            >
              We're Providing Best Services.
            </h1>
          </div>
        </div>

        {data.map((item) => (
          <ServicesCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export const ServicesCard = ({ item }: any) => {
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
    <div ref={containerRef} className=" border border-primary  ">
      <div className=" p-5">
        <img ref={iconRef} src={item.image} alt="" />
        <h4
          ref={titleRef}
          className=" text-2xl font-medium text-primary  mt-5 "
        >
          {item.title}
        </h4>
        <p ref={descriptionRef} className="  mt-3 text-gray-600 ">
          {item.description}
        </p>
      </div>

      <div
        ref={ctaRef}
        className=" capitalize font-medium text-lg bg-secondary text-white p-3 text-center"
      >
        {item.cta}
      </div>
    </div>
  );
};

export default Services;
