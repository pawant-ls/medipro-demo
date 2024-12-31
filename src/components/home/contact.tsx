import CButton from "../button";

const ContactSection = () => {
  return (
    <section
      className="  relative p-10"
      style={{
        backgroundImage:
          "url(https://demo.awaikenthemes.com/html-preview/medipro/images/home-contact-form-bg.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center 84.0234px",
      }}
    >
      <div className=" bg-black/50 inset-0 absolute  z-0"></div>
      <div className=" md:container   z-10 relative py-20">
        <div className=" text-center text-white ">
          {" "}
          <h4 className=" text-xl uppercase">fill the form</h4>{" "}
          <h2 className=" text-5xl mt-3 font-semibold ">Contact Form.</h2>
        </div>

        <div className=" mt-10 gap-0 grid md:grid-cols-5">
          <div className=" col-span-2 flex items-center justify-center flex-col gap-5 bg-secondary p-10 text-white">
            <div>
              <img src="images/contact-us-img.png" alt="" />
            </div>
            <div>
              <h2 className=" text-2xl mt-10 text-center font-medium">
                Make <span className=" font-bold"> Appointment</span> & Take
                Care Of Your Healthy Life
              </h2>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <div className=" bg-primary  col-span-3 text-white p-10  mx-auto">
      <form className="space-y-6">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded border border-gray-300 bg-teal-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <p className="text-red-500 text-sm mt-1">
              Please fill out this field.
            </p>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded border border-gray-300 bg-teal-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
        </div>

        {/* Appointment and Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <select
              className="w-full p-3 rounded border border-gray-300 bg-teal-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">
                Make Appointment & Take Care Of Your Health
              </option>
              {/* Add more options here if needed */}
            </select>
          </div>
          <div>
            <input
              type="date"
              className="w-full p-3 rounded border border-gray-300 bg-teal-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              defaultValue="2024-12-18"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 h-32 rounded border border-gray-300 bg-teal-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          ></textarea>
          <p className="text-red-500 text-sm mt-1">
            Please fill out this field.
          </p>
        </div>

        {/* Submit Button */}
        <div className="">
          <CButton>Submit</CButton>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
