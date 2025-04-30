import React, { useState } from "react";
import contactImg from "../../../../public/images/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting with Dine Out, We will reply ASAP.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-[calc(100vh-139px)] w-[90%] flex flex-wrap justify-evenly items-center overflow-y-hidden">
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-[90%] object-cover"
          src={contactImg}
          alt="contact-image"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[3rem] font-semibold">Contact us</h1>
        <form
          className="flex flex-col justify-center items-center p-[10px]"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-[30vw] bg-white text-[15px] p-[10px] m-[10px] rounded-[5px] shadow-md border border-[#818181] outline-none focus:border-[#ff8c00]"
            type="text"
            placeholder="Name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[30vw] bg-white text-[15px] p-[10px] m-[10px] rounded-[5px] shadow-md border border-[#818181] outline-none focus:border-[#ff8c00]"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="resize-none w-[30vw] bg-white text-[15px] p-[10px] m-[10px] rounded-[5px] shadow-md border border-[#818181] outline-none focus:border-[#ff8c00]"
            placeholder="Type your Message here..."
            required
          ></textarea>
          <button
            type="submit"
            className="mt-[10px] px-[20px] py-[10px] bg-[#ff8c00] hover:bg-[#e46f20] text-white rounded-[10px] shadow-md text-lg font-semibold cursor-pointer border-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
