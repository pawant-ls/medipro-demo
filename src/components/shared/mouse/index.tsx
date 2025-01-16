"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const MouseAnimation = () => {
  const [docEnv, setDocEnv] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setDocEnv(true);
    }
  }, []);
  useEffect(() => {
    const main = document.querySelector("body");
    const ball = document.querySelector(".ball");
    // select all button element
    const buttons = document.querySelectorAll("button");
    const swipe = document.querySelectorAll(".swipe");
    // const viewMoreCard = document.querySelector(".view-more-card");

    // select all viewMoreCard classname elements
    const viewMoreCard = document.querySelectorAll(".view-more-card");
    const imageCursorHover = document.querySelectorAll(".image-cursor-hover");
    const handleMouseMove = (e: any) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      gsap.to(ball, {
        x: mouseX,
        y: mouseY,
        duration: 0.2,
        ease: "back.out",
      });
    };

    const handleMouseEnter = (viewMore = true, scale = 5, text?: string) => {
      if (viewMore) {
        if (text) {
          // @ts-ignore
          ball.innerHTML = `<span class="text-white   font-heading  font-semibold  text-center">${text}</span>`;
        }
        ball?.classList.remove("font-semibold");
      }

      gsap.to(ball, {
        scale: scale,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      ball?.classList.add("font-semibold");
      // ball?.classList.add("mix-blend-difference");

      // @ts-ignore
      ball.innerHTML = "";
      gsap.to(ball, {
        scale: 1,
        duration: 0.3,
      });
    };

    main?.addEventListener("mousemove", handleMouseMove);

    viewMoreCard?.forEach((element) => {
      element?.addEventListener("mouseenter", () => handleMouseEnter());
      element?.addEventListener("mouseleave", handleMouseLeave);
    });
    buttons?.forEach((element) => {
      element?.addEventListener("mouseenter", () => handleMouseEnter(false));
      element?.addEventListener("mouseleave", handleMouseLeave);
    });
    swipe?.forEach((element) => {
      element?.addEventListener("mouseenter", () =>
        handleMouseEnter(true, 4, "SWIPE")
      );
      element?.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanups
    return () => {
      main?.removeEventListener("mousemove", handleMouseMove);

      viewMoreCard?.forEach((element) => {
        element?.removeEventListener("mouseenter", () =>
          handleMouseEnter(false)
        );
        element?.removeEventListener("mouseleave", handleMouseLeave);
      });
      buttons?.forEach((element) => {
        element?.removeEventListener("mouseenter", () =>
          handleMouseEnter(false)
        );
        element?.removeEventListener("mouseleave", handleMouseLeave);
      });
      swipe?.forEach((element) => {
        element?.removeEventListener("mouseenter", () =>
          handleMouseEnter(true, 5, "SWIPE")
        );
        element?.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      style={{ pointerEvents: "none" }}
      className="z-[10000] hidden  -translate-x-[50%]  text-[4px]  font-semibold bg-black/30    ball fixed md:flex items-center justify-center    h-5 w-5 rounded-full"
    ></div>
  );
};

export default MouseAnimation;
