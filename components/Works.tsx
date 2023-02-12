import Image from "next/image";
import { bgOne, bgTwo, bgThree, bgFour } from "../public/assets/index";

const Works = () => {
  return (
    <section id="portfolio" className="w-full h-full bg-black text-white py-28">
      <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center">
        Featured Works.
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 h-[1000px] md:h-[480px] mt-16 px-6">
        <div className="w-full h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={bgOne}
            alt="bgOne"
          />
          <div className="absolute w-full h-[480px] left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center font-bold bg-designColor px-6 py-2 w-60 absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Web design
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={bgTwo}
            alt="bgOne"
          />
          <div className="absolute w-full h-[480px] left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center font-bold bg-designColor px-6 py-2 w-60 absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Development
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={bgFour}
            alt="bgFour"
          />
          <div className="absolute w-full h-[480px] left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center font-bold bg-designColor px-6 py-2 w-60 absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                UI Design
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={bgThree}
            alt="bgThree"
          />
          <div className="absolute w-full h-[480px] left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center font-bold bg-designColor px-6 py-2 w-60 absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Interior Design
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
