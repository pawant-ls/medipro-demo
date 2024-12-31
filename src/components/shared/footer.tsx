import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  ArrowRight,
} from "lucide-react";

const footerData = {
  logo: {
    name: "MediPro",
    tagline:
      "Our family-centered approach to healthcare ensures that each member of your family receives personalized attention.",
  },
  socialLinks: [
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "#" },
    { name: "YouTube", icon: <Youtube size={20} />, url: "#" },
    { name: "Twitter", icon: <Twitter size={20} />, url: "#" },
    { name: "Instagram", icon: <Instagram size={20} />, url: "#" },
    { name: "Facebook", icon: <Facebook size={20} />, url: "#" },
  ],
  quickLinks: ["Home", "About Us", "Doctors", "Services", "Contact Us"],
  contactDetails: {
    address: "Jl. Raya Kuta No.70, Kuta",
    email: "healthcare@gmail.com",
    phone: "+01 547 547 5478",
    hours: "8 AM - 5 PM, Monday - Saturday",
  },
  newsletter: {
    title: "Subscribe To Our Newsletter",
    description:
      "Stay informed and never miss out on the latest news, health tips.",
  },
  copyright: "Copyright 2024 © MediPro All Right Reserved.",
};

const Footer = () => {
  const {
    logo,
    socialLinks,
    quickLinks,
    contactDetails,
    newsletter,
    copyright,
  } = footerData;

  return (
    <footer className="bg-primary text-white py-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-secondary">{logo.name}</h2>
          <p className="mt-2 text-gray-200">{logo.tagline}</p>
          <div className="flex space-x-3 mt-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-secondary hover:text-white"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-secondary">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-secondary">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold text-secondary">
            Contact Details
          </h3>
          <ul className="mt-4 space-y-2 text-gray-200">
            <li className="flex items-center">
              <MapPin className="text-secondary mr-2" size={18} />
              {contactDetails.address}
            </li>
            <li className="flex items-center">
              <Mail className="text-secondary mr-2" size={18} />
              {contactDetails.email}
            </li>
            <li className="flex items-center">
              <Phone className="text-secondary mr-2" size={18} />
              {contactDetails.phone}
            </li>
            <li className="flex items-center">
              <Clock className="text-secondary mr-2" size={18} />
              {contactDetails.hours}
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-secondary">
            {newsletter.title}
          </h3>
          <p className="mt-2 text-gray-200">{newsletter.description}</p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 w-full bg-teal-400/20 text-white rounded-l-md placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-secondary hover:bg-orange-600 px-6 py-3 text-white rounded-r-md flex items-center">
              Send{" "}
              <i className="ml-2">
                <ArrowRight size={18} />
              </i>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-200">{copyright}</div>
    </footer>
  );
};

export default Footer;
