/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button } from "./Button"; // Adjust the import path based on your project structure
import backgroundImg from "../assets/background2.jpg";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSendMessage = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappMessage = `Hello, I'm ${name}.%0A%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage: ${message}`;
    const whatsappNumber = "+917258840855";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <>
      <section
        className="relative text-center text-white bg-slate-800 bg-opacity-80 bg-blend-overlay"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 blur-sm text-white"></div> */}
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-extrabold mb-8">Contact Us</h2>
          <form
            className="max-w-xl mx-auto space-y-4"
            onSubmit={handleSendMessage}
          >
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 bg-white rounded"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-3 bg-white rounded"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              id="phone"
              placeholder="Your Phone"
              className="w-full p-3 bg-white rounded"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-3 bg-white rounded"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {/* <button
            label="Send Message"
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleSendMessage}
          /> */}
            <button
              onClick={handleSendMessage}
              type="button"
              className="w-full text-black bg-blue-500 hover:bg-green-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Send Message
            </button>
            {/* <Button className="bg-white" onClick={handleSendMessage} label={"Send Message"}/> */}
          </form>
        </div>
      </section>
    </>
  );
};

