import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Design from "./Design";
import { HiMinus } from "react-icons/hi";

const Banner = () => {
  const ref = useRef<string | any>("");

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      // do something with myRef.current
      setMenu(false);
    }
  }

  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <div id="home" className="w-full h-[700px] relative">
      <Design />
      <div className="absolute left-0 top-0 w-full h-[700px] bg-black bg-opacity-10">
        <div className="w-full p-16 flex justify-between fixed top-0 z-50">
          <h1 className="font-bodyFont text-4xl text-white font-extrabold border-2 w-12 text-center">
            S
          </h1>
          <div
            onClick={() => setMenu(true)}
            className="w-8 h-6 group flex flex-col items-center justify-between cursor-pointer"
          >
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-[100px] font-black">I'm Sarah Jonson</h1>
          <div className="flex items-center gap-6 text-xl font-bold bg-designColor px-6 py-3">
            <h2 className="tracking-[4px]">LEADER</h2>
            <HiMinus className="text-2xl rotate-90" />
            <h2 className="tracking-[4px]">DESIGNER</h2>
            <HiMinus className="text-2xl rotate-90" />
            <h2 className="tracking-[4px]">YOUTUBER</h2>
          </div>
        </div>
      </div>
      {menu && (
        <div
          ref={(node) => (ref.current = node)}
          onClick={handleClick}
          className="w-full h-screen bg-black bg-opacity-40 fixed top-0 right-0 flex justify-end z-30"
        >
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[40%] h-full bg-[#0F1113] text-white flex items-center justify-center"
          >
            <div className="w-4/5 px-12">
              <div>
                <ul className="flex flex-col gap-2">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Home
                    </li>
                  </Link>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      About
                    </li>
                  </Link>
                  <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Portfolio
                    </li>
                  </Link>
                  <Link
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Testmonial
                    </li>
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="text-lg font-thin mt-32">
                <p>For project enquries</p>
                <p>
                  or say 'Hello' -{" "}
                  <span className="font-semibold text-designColor">
                    reactjsbd@gmail.com
                  </span>
                </p>
              </div>
            </div>
            <div className="w-1/5 h-full border-l-[1px] text-center flex items-center justify-center">
              <button
                onClick={() => setMenu(false)}
                className="text-3xl font-black text-designColor"
              >
                X
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Banner;
