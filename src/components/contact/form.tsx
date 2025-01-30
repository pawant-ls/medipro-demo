import React, { useState } from "react";
import CButton from "../button";
import HeadingSection from "../shared/heading-section";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className=" my-28 ">
      <HeadingSection
        title="fill the form
"
        dark
        center
        heading=" Contact Form


"
      ></HeadingSection>
      <div className="w-full max-w-5xl mx-auto p-10 bg-primary">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 text-gray-300 py-2 focus:outline-none focus:border-orange-400 transition-colors"
                placeholder="Enter Your Full Name"
                required
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 text-gray-300 py-2 focus:outline-none focus:border-orange-400 transition-colors"
                placeholder="Enter Your Email"
                required
              />
              <span className="absolute top-2 right-2 text-orange-400">•</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 text-gray-300 py-2 focus:outline-none focus:border-orange-400 transition-colors"
                placeholder="Enter Your Phone Number"
                required
              />
            </div>

            <div className="relative">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 text-gray-300 py-2 focus:outline-none focus:border-orange-400 transition-colors"
                placeholder="Your Subject"
                required
              />
            </div>
          </div>

          <div className="relative">
            <textarea
              name="message"
              defaultValue={""}
              value={formData.message}
              className="w-full bg-transparent border-b border-gray-300 text-gray-300 py-2 h-32 focus:outline-none focus:border-orange-400 transition-colors resize-none"
              placeholder="Type Your Message"
              required
            />
          </div>

          <div className="flex justify-center">
            <CButton
              type="submit"
              className="px-8 py-3 bg-transparent border border-orange-400 text-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition-colors duration-300"
            >
              Book Now
            </CButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
