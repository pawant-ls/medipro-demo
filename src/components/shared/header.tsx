"use client";
import { Calendar, Calendar1, Menu, X } from "lucide-react";
import CButton from "../button";
import Logo from "./logo";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
const urls = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  ,
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
const Header = () => {
  const [open, setOpen] = useState(false);

  const logoRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    gsap.from([logoRef.current, ".header_links", btnRef.current], {
      opacity: 0,
      duration: 2,
      y: 50,
      ease: "power4.out",
      stagger: 0.5,
    });
  }, []);

  return (
    <>
      <header className=" bg-primary border-b border-b-gray-400/20 py-4">
        <div className="container">
          <div className="flex justify-between items-center">
            <div ref={logoRef}>
              <Logo />
            </div>

            <nav className=" hidden md:flex items-center gap-10">
              <ul className=" text-white flex gap-4">
                {urls.map((url: any) => (
                  <li className="header_links" key={url.name}>
                    <Link href={url.url}>{url.name}</Link>
                  </li>
                ))}
              </ul>
              <div ref={btnRef}>
                <CButton icon={<Calendar1 />}>Book Now</CButton>
              </div>
            </nav>
            <div className=" md:hidden">
              <CButton
                onClick={() => {
                  console.log("clicked");
                  setOpen(!open);
                }}
              >
                {open ? <X /> : <Menu />}
              </CButton>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div className=" bg-secondary border-b border-b-gray-400/20 py-4">
          <div className="container">
            <div className="">
              <nav className=" flex flex-col  justify-center items-center gap-10">
                <ul className=" text-white flex flex-col gap-4">
                  {urls.map((url: any) => (
                    <li key={url.name}>
                      <a href={url.url}>{url.name}</a>
                    </li>
                  ))}
                </ul>

                <CButton icon={<Calendar1 />}>Book Now</CButton>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
