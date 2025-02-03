import { useRef } from "react";
import HeadingSection from "../shared/heading-section";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
const data = [
  {
    specialty: "family physician",
    name: "Dr. Elizabeth Foster",
    description: "Compassionate care for all ages.",
    image: "images/team-1.jpg",
  },
  {
    specialty: "surgeon",
    name: "Dr. David Lee",
    description: "Skillful hands, transforming lives.",
    image: "images/team-2.jpg",
  },
  {
    specialty: "cardiologist",
    name: "Dr. Ava White",
    description: "Mental wellness and guiding.",
    image: "images/team-3.jpg",
  },
  {
    specialty: "dermatologist",
    name: "Dr. Daniel Brown",
    description: "Focuses on skin, hair disorders.",
    image: "images/team-4.jpg",
  },
];

const OurBestDoctors = () => {
  return (
    <section className=" container my-20 ">
      <HeadingSection
        dark
        title="our best doctor
"
        heading="Meet Our Doctors.

"
      ></HeadingSection>

      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((item, i) => (
          <DoctorCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

const DoctorCard = ({ item }: { item: any }) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const specialtyRef = useRef(null);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);

  useGSAP(() => {
    gsap.from(
      [
        imgRef.current,
        specialtyRef.current,
        nameRef.current,
        descriptionRef.current,
      ],
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.2,
        delay: 0.5,
        scale: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
  });
  return (
    <div ref={containerRef}>
      <div className=" overflow-hidden group relative" ref={imgRef}>
        <img
          className="   w-full aspect-square object-cover rounded-xl"
          src={item.image}
          alt=""
        />

        <div className=" cursor-pointer flex group-hover:bottom-5 items-center gap-2 absolute scale-150 group-hover:scale-100 -bottom-14 transition-all right-1/2 translate-x-1/2 ">
          <div className=" bg-primary text-white p-2 rounded-xl inline-block">
            <Instagram />
          </div>
          <div className=" bg-primary text-white p-2 rounded-xl inline-block">
            <Linkedin />
          </div>
          <div className=" bg-primary text-white p-2 rounded-xl inline-block">
            <Facebook />
          </div>
          <div className=" bg-primary text-white p-2 rounded-xl inline-block">
            <Twitter />
          </div>
        </div>
      </div>
      <div>
        <p ref={specialtyRef} className=" mt-3 text-secondary mt-2 capitalize">
          {item.specialty}
        </p>
        <h4 ref={nameRef} className=" text-lg capitalize font-semibold">
          {item.name}
        </h4>
        <p ref={descriptionRef} className="  text-gray-400">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default OurBestDoctors;
