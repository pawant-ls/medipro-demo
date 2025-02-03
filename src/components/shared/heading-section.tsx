"use client";
import { ArrowRightCircle, Play } from "lucide-react";
import CButton from "../button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeadingSection = ({
  title,
  heading,
  description,
  children,
  dark = false,
  readmore = false,
  wfull = false,
  center = false,
  watchMore = false,
}: {
  title: string;
  heading: string;
  description?: string;
  children?: React.ReactNode;
  dark?: boolean;
  readmore?: boolean;
  wfull?: boolean;
  center?: boolean;
  watchMore?: boolean;
}) => {
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from([titleRef.current, headingRef.current, descriptionRef.current], {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
      stagger: 0.2,
      scale: 0.7,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={` ${center ? "text-center mx-auto" : ""}  ${
        wfull ? " max-w-3xl" : "max-w-md"
      } `}
    >
      <h4
        ref={titleRef}
        className={`text-xl uppercase ${
          dark ? " text-secondary" : "text-gray-200"
        }`}
      >
        {title}
      </h4>
      <h1
        ref={headingRef}
        className={`mt-5 text-2xl md:text-5xl font-semibold ${
          dark ? "text-gray-800" : "text-secondary"
        }`}
      >
        {heading}
      </h1>
      <h4
        ref={descriptionRef}
        className={` ${dark ? " text-gray-600" : "text-gray-300"}  mt-5`}
      >
        {description}
      </h4>
      {
        <div className=" gap-5 flex items-center mt-5 ">
          {readmore && <CButton icon={<ArrowRightCircle />}>Read More</CButton>}

          {watchMore && (
            <CButton white icon={<Play />} className=" ml-5">
              Watch Video
            </CButton>
          )}
        </div>
      }

      <div>
        <div className=" mt-10">{children}</div>
      </div>
    </div>
  );
};

export default HeadingSection;
