"use client";
import { Calendar, Calendar1, Menu, X } from "lucide-react";
import CButton from "../button";
import Logo from "./logo";
import { useState } from "react";
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

  return (
    <>
      <header className=" bg-primary border-b border-b-gray-400/20 py-4">
        <div className="container">
          <div className="flex justify-between items-center">
            <Logo />

            <nav className=" hidden md:flex items-center gap-10">
              <ul className=" text-white flex gap-4">
                {urls.map((url: any) => (
                  <li key={url.name}>
                    <a href={url.url}>{url.name}</a>
                  </li>
                ))}
              </ul>

              <CButton icon={<Calendar1 />}>Book Now</CButton>
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
