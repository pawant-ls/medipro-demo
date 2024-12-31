"use client";
import About from "./about";
import BlogPosts from "./blogs";
import ContactSection from "./contact";
import Faqs from "./faq";
import Hero from "./hero";
import HowWeWork from "./how-we-work";
import OpenForAppointment from "./open-for-appointment";
import Services from "./services";
import Testimonials from "./testimonials";

const HomePage = () => {
  return (
    <main className=" overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <OpenForAppointment />
      <HowWeWork />
      <Faqs />
      <Testimonials />
      <BlogPosts />
      <ContactSection />
    </main>
  );
};

export default HomePage;
