import { useRef } from "react";
import HeadingSection from "../shared/heading-section";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const data = [
  {
    step: "Book an Appointment",
    image: "/images/icon-work-step-1.svg",
  },
  {
    step: "Conduct Checkup",
    image: "/images/icon-work-step-2.svg",
  },
  {
    step: "Perform Treatment",
    image: "/images/icon-work-step-3.svg",
  },
  {
    step: "Prescribe & Payment",
    image: "/images/icon-work-step-4.svg",
  },
];

const HowWeWork = () => {
  return (
    <section className="  container my-20">
      <div className=" grid md:grid-cols-2 items-center gap-10">
        <HeadingSection
          title="how we work
"
          dark
          heading=" A Comprehensive Directory For Your Health Care.


"
        ></HeadingSection>

        <div className=" flex items-center h-full text-lg text-gray-400">
          <p>
            we are your trusted one-stop destination for all your healthcare
            needs. Our comprehensive directory is designed to provide you with
            easy access to a wide range of healthcare services and providers,
            ensuring that you and your family.
          </p>
        </div>
      </div>

      <div className=" mt-10 grid grid-cols-2 gap-10 md:grid-cols-4">
        {data.map((item, i) => (
          <HowWeWorkImageCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

const HowWeWorkImageCard = ({
  item,
}: {
  item: {
    step: string;
    image: string;
  };
}) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const stepRef = useRef(null);

  useGSAP(() => {
    gsap.from([imageRef.current, stepRef.current], {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: "power3.inOut",
      stagger: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  });
  return (
    <div
      ref={containerRef}
      key={item.step}
      className=" flex-col  mt-5 flex gap-3 items-center"
    >
      <img ref={imageRef} src={item.image} alt="" />
      <p
        ref={stepRef}
        className=" text-xl text-center  font-semibold text-gray-800"
      >
        {item.step}
      </p>
    </div>
  );
};

export default HowWeWork;
