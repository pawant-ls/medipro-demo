import { ArrowRightCircle } from "lucide-react";
import CButton from "../button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeadingSection from "../shared/heading-section";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useGSAP(() => {
    gsap.from([image1Ref.current, image2Ref.current], {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.inOut",
      stagger: 0.2,
      delay: 1,
    });
  }, []);

  return (
    <section className=" bg-primary">
      <div className=" grid md:grid-cols-2 gap-10 container py-10 md:py-40">
        <HeadingSection
          title="we tack care of your health
"
          heading="We Are Providing Best & Affordable Health Care.



"
          description="our is to deliver the highest quality healthcare services. We
            believe that everyone deserves access to excellent medical care
            without compromising on quality."
          readmore
        ></HeadingSection>

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
