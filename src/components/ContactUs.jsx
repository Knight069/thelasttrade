/* eslint-disable no-unused-vars */
import { useState } from "react";
import backgroundImg from "../assets/background2.jpg";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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

    if (name && email && phone) {
    const whatsappMessage = `Hello, I'm ${name} I want to learn Trading.%0A%0AMessage: ${message}`;
    const whatsappNumber = "+917258840855";
    

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  }
    setIsSubmitted(true);
  };

  const isFormValid = formData.name && formData.email && formData.phone;

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
            className="max-w-xl mx-auto space-y-4 text-black"
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
            <button
              onClick={handleSendMessage}
              type="button"
              className="w-full text-black bg-blue-500 hover:bg-green-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Send Message
            </button>
            {/* <Button className="bg-white" onClick={handleSendMessage} label={"Send Message"}/> */}
          </form>

          {/* Show alert only if the form is submitted and isFormValid is false */}
          {isSubmitted && !isFormValid && (
            <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              <p className="font-semibold">
                Please fill in all the required fields:
              </p>
              <ul className="list-disc list-inside">
                {!formData.name && <li>Your Name is required.</li>}
                {!formData.email && <li>Your Email is required.</li>}
                {!formData.phone && <li>Your Phone number is required.</li>}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

