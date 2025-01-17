import { ArrowRightCircle, Check } from "lucide-react";
import CButton from "../button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeadingSection from "../shared/heading-section";

const healthCareNeeds = [
  "Mental health Solutions",
  "Rapid Patient Improvement",
  "World Class Treatment",
];
const About = () => {
  const dontHesitateRef = useRef(null);
  const makeAppointmentRef = useRef(null);

  const needFamilyHealthRef = useRef(null);
  const need24HoursServiceRef = useRef(null);
  const firstcontainerRef = useRef(null);

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const aboutContainerRef = useRef(null);

  useGSAP(() => {
    gsap.from([image1Ref.current, image2Ref.current], {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.inOut",
      stagger: 0.2,
      delay: 1,
      scrollTrigger: {
        trigger: aboutContainerRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  useGSAP(() => {
    gsap.from([dontHesitateRef.current, makeAppointmentRef.current], {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power3.inOut",
      stagger: 0.2,
      delay: 0.5,
      scrollTrigger: {
        trigger: firstcontainerRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from([needFamilyHealthRef.current, need24HoursServiceRef.current], {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power3.inOut",
      stagger: 0.2,
      delay: 0.9,
      scrollTrigger: {
        trigger: firstcontainerRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className=" container my-20 ">
      <div ref={firstcontainerRef} className=" grid md:grid-cols-3 gap-0">
        <div className=" h-full flex flex-col h-full ">
          <div className=" h-full bg-secondary text-white p-10">
            <h3 ref={dontHesitateRef} className=" text-3xl font-medium">
              Don't <span className=" font-bold">Hesitate</span> To Contact us
            </h3>
          </div>
          <div className=" text-center p-5 bg-black text-white">
            <p ref={makeAppointmentRef}>Make Appointment</p>
          </div>
        </div>

        <div className=" bg-primary p-10">
          <img src="/images/icon-home-contact-1.svg" alt="" />

          <div className=" mt-5">
            <h4
              ref={needFamilyHealthRef}
              className=" text-white font-semibold text-xl"
            >
              Need Family Health
            </h4>
            <p className=" text-gray-300 mt-3">
              we understand the importance of family health overall well-being.
            </p>
          </div>
        </div>
        <div className=" bg-primary p-10">
          <img src="/images/icon-home-contact-2.svg" alt="" />

          <div className=" mt-5">
            <h4
              ref={need24HoursServiceRef}
              className=" text-white font-semibold text-xl"
            >
              24 hours service
            </h4>
            <p className=" text-gray-300 mt-3">
              we take pride in offering 24-hour medical services to ensure that
              you.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={aboutContainerRef}
        className=" grid md:grid-cols-2 gap-10 container py-40"
      >
        <div className=" mt-20 md:mt-0 order-2 max-w-md">
          <HeadingSection
            title="about medicalife
"
            dark
            heading="Our Best Services & Poplular Treatment Here.



"
            description="we take pride in offering a wide range of best-in-class medical
            services and popular treatments to cater to your diverse healthcare
            needs ."
            readmore
          >
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
          </HeadingSection>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
            background: "url(/images/about-bg.png) no-repeat center center",
            // backgroundSize: "65% auto",
          }}
          className=" order-1  "
        >
          <div className=" w-1/2 md:w-auto">
            <img
              ref={image1Ref}
              className=" -translate-y-20 rounded-full"
              src="images/about-img-2.jpg"
              alt=""
            />
          </div>
          <div className=" w-1/2 md:w-auto">
            <img
              ref={image2Ref}
              className=" translate-y-20 rounded-full"
              src="images/about-img-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
