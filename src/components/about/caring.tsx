import { Check } from "lucide-react";
import HeadingSection from "../shared/heading-section";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const healthCareNeeds = [
  "Mental health Solutions",
  "Rapid Patient Improvement",
  "World Class Treatment",
];

const data = [
  {
    title: "Patient Information",
    description:
      "I hereby give consent to and its healthcare professionals to provide medical treatment.",
    cta: "Read More",
    image: "/images/icon-health-service.svg",
  },
  {
    title: "Emergency Contact",
    description:
      "This application form is for informational purposes only and does not guarantee.",
    cta: "Read More",
    image: "/images/icon-health-service.svg",
  },
  {
    title: "Medical History",
    description:
      "Your medical history is a vital piece of information that provides healthcare.",
    cta: "Read More",
    image: "/images/icon-health-service.svg",
  },
];

const Caring = () => {
  return (
    <section className=" container my-32">
      <HeadingSection
        wfull
        dark
        title="caring for the health of you and your family.
"
        heading="We Provide All Aspects Of Medical Practice For
Your Whole Family!
"
      ></HeadingSection>
      <div className=" grid md:grid-cols-2 items-center gap-10">
        <div>
          <h5 className=" font-bold text-lg ">
            Welcome to medipro, where we offer comprehensive medical care
            tailored to every member of your family.
          </h5>

          <p className=" text-gray-700">
            Our dedicated team of healthcare professionals is committed to
            providing you and your loved ones with personalized and
            compassionate healthcare services. We understand the importance of
            family health.
          </p>

          <div className=" space-y-2 mt-5">
            {healthCareNeeds.map((need, i) => (
              <div key={i} className=" flex items-center gap-2">
                <div className="  rounded-full p-1   bg-secondary">
                  <Check size={16} className=" text-white" />
                </div>
                <p className=" text-gray-700">{need}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" ">
          {data.map((item, i) => {
            return <CaringCard key={i} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

const CaringCard = ({ item }: { item: any }) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useGSAP(() => {
    gsap.from([imgRef.current, titleRef.current, descriptionRef.current], {
      opacity: 0,
      y: 50,
      duration: 1,
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
    });
  });
  return (
    <div
      ref={containerRef}
      className=" items-center gap-5 flex  bg-white p-3  space-y-2 mt-5"
    >
      <div ref={imgRef}>
        <img src={item.image} alt="" />
      </div>
      <div>
        <h5 ref={titleRef} className=" font-bold text-lg ">
          {item.title}
        </h5>
        <p ref={descriptionRef} className=" text-gray-700">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Caring;
