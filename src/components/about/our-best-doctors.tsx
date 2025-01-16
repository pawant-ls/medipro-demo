import HeadingSection from "../shared/heading-section";
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
          <div key={i}>
            <img
              className=" w-full aspect-square object-cover rounded-xl"
              src={item.image}
              alt=""
            />
            <div>
              <p className=" mt-3 text-secondary mt-2 capitalize">
                {item.specialty}
              </p>
              <h4 className=" text-lg capitalize font-semibold">{item.name}</h4>
              <p className="  text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBestDoctors;
