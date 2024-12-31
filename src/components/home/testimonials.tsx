import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, StarHalf } from "lucide-react";
const data = [
  {
    name: "John Doe",
    image: "images/author-2.jpg",
    title: "CEO of Digital Marketing",
    rating: 4.5,
    feedback:
      "Highly doctors and compassionate skilled doctors and compassionate staff. Highly doctors and compassionate skilled doctors and compassionate staff.",
  },
  {
    name: "Robert Lee",
    image: "images/author-3.jpg",
    title: "Accountant",
    rating: 3.5,
    feedback:
      "Top-notch healthcare with a patient-centered healthcare with a approach healthcare Top-notch healthcare with a patient-centered healthcare with a approach.",
  },
  {
    name: "Emily Davis",
    image: "images/author-4.jpg",
    title: "CEO of Digital Marketing",
    rating: 4,
    feedback:
      "Highly doctors and compassionate skilled healthcare with a patient-centered healthcare patient-centered healthcare with a approach doctors and compassionate staff.",
  },
  {
    name: "Mary Johnson",
    image: "images/author-1.jpg",
    title: "Student",
    rating: 5,
    feedback:
      "Great experience, caring doctors, and modern, caring doctors, and modern. Highly doctors and compassionate skilled doctors and compassionate staff.",
  },
];

const Testimonials = () => {
  return (
    <section
      style={{
        background: "linear-gradient(#07332f 65%, #fff7f4 35%)",
        backgroundColor: "#07332f",
        padding: "100px 0 50px",
      }}
    >
      <div className=" container mt-5">
        <div className=" order-2 max-w-md">
          <h4 className=" text-xl uppercase text-secondary">testimonial </h4>
          <h1
            className=" mt-5 text-3xl md:text-5xl font-semibold text-gray-100
           "
          >
            What Patients Say About Us.
          </h1>
        </div>
        <div className=" mt-10">
          <Carousel>
            <CarouselContent>
              {data.map((item, index) => (
                <CarouselItem className="  md:basis-1/3 " key={index}>
                  <div className=" bg-white border-secondary  border-2 p-5  ">
                    <div className=" flex items-center gap-5">
                      <img
                        className=" w-16 h-16 rounded-full"
                        src={item.image}
                        alt=""
                      />
                      <div>
                        <h4 className=" text-2xl font-semibold text-primary">
                          {item.name}
                        </h4>
                        <p className=" text-gray-800  text-sm">{item.title}</p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className=" flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className=" text-lg text-primary">
                            {star <= item.rating ? <Star /> : null}
                          </span>
                        ))}
                      </div>
                      <p className=" line-clamp-3  text-gray-800 mt-3">
                        {item.feedback}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
