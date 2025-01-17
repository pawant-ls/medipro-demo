import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import HeadingSection from "../shared/heading-section";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Are telemedicine consultations available?",
      answer: "Yes, we offer telemedicine consultations for your convenience.",
    },
    {
      question: "Do you accept health insurance?",
      answer:
        "We accept most health insurance plans. Please contact us for more details.",
    },
    {
      question: "How much does a consultation cost?",
      answer:
        "Consultation fees vary depending on the doctor and the type of consultation.",
    },
  ];
  const handleClick = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-[#fff7f4] py-20 ">
      <div className=" md:grid-cols-2 grid gap-10 container">
        <div className=" relative">
          <img src="images/home-faq-img.jpg" alt="" />
          <div className=" absolute -bottom-4 -right-4 ">
            <div className=" bg-primary text-white p-5  float-start flex-col items-center justify-center ">
              <h2 className=" text-center text-4xl font-semibold">100+</h2>
              <p className=" font-semibold text-center text-lg">Doctors</p>
            </div>
            <div className=" bg-secondary text-white p-5  float-start flex-col items-center justify-center ">
              <h2 className=" text-center text-4xl font-semibold">16+</h2>
              <p className=" font-semibold text-center text-lg">
                World Offices
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className=" order-2 max-w-md">
            <HeadingSection
              title="faqs
"
              dark
              heading=" Consultations with Qualified doctors.


"
            ></HeadingSection>
          </div>

          <div className=" space-y-5 mt-10 ">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <div
                  onClick={() => handleClick(index)}
                  className=" flex items-center cursor-pointer gap-3"
                >
                  {openIndex === index ? <Minus /> : <Plus />}
                  <h3 className="cursor-pointer text-xl text-gray-800 font-semibold">
                    {item.question}
                  </h3>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 text-lg font-medium ">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
