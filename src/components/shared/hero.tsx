"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronsRight } from "lucide-react";
import { useRef } from "react";

const SharedHeroSection = ({ page }: { page: string }) => {
  const headingTextRef = useRef(null);
  const subHeadingTextRef = useRef(null);

  useGSAP(() => {
    gsap.from(headingTextRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power3.inOut",
      stagger: 0.2,
      delay: 0.5,
    });
    gsap.from(subHeadingTextRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power3.inOut",
      stagger: 0.2,
      delay: 0.9,
    });
  }, []);

  return (
    <section
      //   style={{
      //     padding: "150px 0 100px",
      //     backgroundImage: "url(/images/half-shape.png) no-repeat 6% 100%",
      //     backgroundSize: "19% auto",
      //   }}
      className=" relative bg-primary text-white "
    >
      <div className=" container py-36  flex text-center items-center justify-center">
        <div className=" z-10 relative  flex flex-col items-center justify-center ">
          <h1
            ref={headingTextRef}
            className=" text-6xl font-bold text-secondary"
          >
            {page}
          </h1>

          <div
            ref={subHeadingTextRef}
            className=" text-lg font-semibold flex items-center gap-1 mt-5"
          >
            <span>Home</span>
            <ChevronsRight className=" text-secondary font-bold" />
            <span>{page}</span>
          </div>
        </div>
      </div>
      <img
        className=" absolute z-0 right-0 bottom-0"
        src="/images/half-circle-img.png"
        alt="haflcircle"
      />
    </section>
  );
};

export default SharedHeroSection;
