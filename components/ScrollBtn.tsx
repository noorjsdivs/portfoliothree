import React from "react";
import { TbChevronRight } from "react-icons/tb";

const ScrollBtn = () => {
  return (
    <div className="w-14 h-14 z-50 text-3xl fixed top-[90vh] right-10 bg-black text-gray-200 hover:text-white duration-200 rounded-full border-[1px] border-gray-800 shadow-cardShadow">
      <button className="w-full h-full flex items-center justify-center relative -rotate-90">
        <TbChevronRight />
      </button>
    </div>
  );
};

export default ScrollBtn;
