import { ArrowRightCircle } from "lucide-react";
import CButton from "../button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const descRef = useRef(null);

  const btnRef = useRef(null);

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useGSAP(() => {
    gsap.to(
      [
        headingRef.current,
        subHeadingRef.current,
        descRef.current,
        btnRef.current,
      ],
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.inOut",
        stagger: 0.2,
        delay: 1,
      }
    );
  }, []);

  return (
    <section className=" bg-primary">
      <div className=" grid md:grid-cols-2 gap-10 container py-10 md:py-40">
        <div className=" max-w-md">
          <h4 ref={headingRef} className=" text-xl uppercase text-gray-200">
            we tack care of your health
          </h4>
          <h1
            ref={subHeadingRef}
            className=" mt-5 text-2xl md:text-5xl font-semibold text-secondary "
          >
            We Are Providing Best & Affordable Health Care.
          </h1>
          <h4 ref={descRef} className=" text-gray-300  mt-5">
            our is to deliver the highest quality healthcare services. We
            believe that everyone deserves access to excellent medical care
            without compromising on quality.
          </h4>
          <div ref={btnRef} className=" mt-5 ">
            <CButton icon={<ArrowRightCircle />}>Read More</CButton>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
            background:
              "url(/images/white-dots-img.png) no-repeat center center",
            // backgroundSize: "65% auto",
          }}
          className="   "
        >
          <div className="w-1/2 md:w-auto">
            <img
              ref={image1Ref}
              className=" w-2/3 md:w-auto  md:-translate-y-20 rounded-full"
              src="images/hero-img-1.jpg"
              alt=""
            />
          </div>
          <div className=" w-1/2 md:w-auto">
            <img
              ref={image2Ref}
              className="  w-2/3 md:w-auto translate-y-20 rounded-full"
              src="images/hero-img-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
