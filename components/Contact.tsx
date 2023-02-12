import React from "react";
import { FaMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault(e);
    console.log("done");
  };
  return (
    <section
      id="contact"
      className="w-full h-[800px] bg-contact-image bg-no-repeat bg-cover bg-fixed text-white"
    >
      <div className="w-full h-full bg-black bg-opacity-80 py-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <h1 className="text-3xl font-thin tracking-widest uppercase text-center">
            Say Hello!
          </h1>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center gap-3">
              <FaMap className="text-4xl text-designColor" />
              <p className="text-sm tracking-wide">Muscat, Oman</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaPhoneAlt className="text-4xl text-designColor" />
              <p className="text-sm tracking-wide">+96824769821</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaEnvelope className="text-4xl text-designColor" />
              <p className="text-sm tracking-wide">noorjsdivs@gmail.com</p>
            </div>
          </div>
          <form className="w-full flex flex-col items-center gap-10">
            <div className="w-full flex items-center gap-10">
              <input
                className="w-1/2 py-2 px-4 text-base text-black placeholder:text-gray-600 font-medium outline-none border-transparent border-2 focus-within:border-designColor duration-200"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-1/2 py-2 px-4 text-base text-black placeholder:text-gray-600 font-medium outline-none border-transparent border-2 focus-within:border-designColor duration-200"
                type="text"
                placeholder="Email"
              />
            </div>
            <textarea
              placeholder="You Message"
              className="w-full text-base h-36 p-4 text-black placeholder:text-gray-600 font-medium outline-none border-transparent border-2 focus-within:border-designColor duration-200 resize-none"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-44 h-12 bg-designColor text-base uppercase font-bold tracking-wide border-2 border-transparent hover:bg-black hover:border-designColor duration-300"
            >
              Submit Now
            </button>
          </form>
          <div className="w-full py-10 bg-black flex items-center justify-between">
            <div className="text-lg font-thin">
              <p>For project enquries</p>
              <p>
                or say 'Hello' -{" "}
                <span className="font-semibold text-designColor">
                  reactjsbd@gmail.com
                </span>
              </p>
            </div>
            <a href="https://reactbd.com/" target="_blank">
              <p>© 2022 reactBD All rights reserved.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
