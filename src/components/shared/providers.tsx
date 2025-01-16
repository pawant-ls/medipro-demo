"use client";
import { GSAP } from "../gsap";
import { Lenis } from "../lenis";
import MouseAnimation from "./mouse";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Lenis options={{ lerp: 0.15 }} />
      <MouseAnimation />

      <GSAP scrollTrigger />

      {children}
    </>
  );
};

export default Providers;
