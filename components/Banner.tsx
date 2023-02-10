import React from 'react'
import Design from './Design'
import { HiMinus } from "react-icons/hi";

const Banner = () => {
  return (
    <div className="w-full h-[700px] relative">
      <Design />
      <div className="absolute left-0 top-0 w-full h-[700px] bg-black bg-opacity-10">
        <div className="w-full p-16 flex justify-between">
          <h1 className="font-bodyFont text-4xl text-white font-extrabold border-2 w-12 text-center">
            S
          </h1>
          <div className="w-10 h-8 group flex flex-col items-center justify-between">
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-6 duration-300"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-6 duration-300"></span>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center text-white mt-10">
          <h1 className="text-[100px] font-black">I'm Sarah Jonson</h1>
          <div className="flex items-center gap-6 text-xl font-bold bg-designColor px-6 py-3">
            <h2 className='tracking-[4px]'>LEADER</h2>
            <HiMinus className="text-2xl rotate-90" />
            <h2 className='tracking-[4px]'>DESIGNER</h2>
            <HiMinus className="text-2xl rotate-90" />
            <h2 className='tracking-[4px]'>YOUTUBER</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner