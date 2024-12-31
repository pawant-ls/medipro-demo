import { ArrowRightCircle } from "lucide-react";
import CButton from "../button";

const Hero = () => {
  return (
    <section className=" bg-primary">
      <div className=" grid md:grid-cols-2 gap-10 container py-10 md:py-40">
        <div className=" max-w-md">
          <h4 className=" text-xl uppercase text-gray-200">
            we tack care of your health
          </h4>
          <h1 className=" mt-5 text-2xl md:text-5xl font-semibold text-secondary ">
            We Are Providing Best & Affordable Health Care.
          </h1>
          <h4 className=" text-gray-300  mt-5">
            our is to deliver the highest quality healthcare services. We
            believe that everyone deserves access to excellent medical care
            without compromising on quality.
          </h4>
          <div className=" mt-5 ">
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
          <div className="w-1/2 md:w-full">
            <img
              className=" w-2/3 md:w-full  md:-translate-y-20 rounded-full"
              src="images/hero-img-1.jpg"
              alt=""
            />
          </div>
          <div className=" w-1/2 md:w-full">
            <img
              className="  w-2/3 md:w-full translate-y-20 rounded-full"
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
