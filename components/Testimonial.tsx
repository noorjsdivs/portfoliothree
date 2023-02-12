import React, { useState } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: any, next: any) => {
      setDocActive(next);
    },

    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "1px solid #F7D449",
              }
            : {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "1px solid #aeaeae",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="text-white bg-[#0F1113] py-20 flex justify-center items-center"
    >
      <div className="w-[500px] md:w-[620px] h-60 px-4">
        <div>
          <Slider {...settings}>
            <div>
              <p className="text-xl text-textColor text-center leading-8">
                <span className="text-white">Apple company CEO -</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                doloribus sed asperiores commodi earum consectetur dolorem,
                eligendi animi minus. Reprehenderit laboriosam ipsa quia
                dignissimos voluptatum aliquid et repudiandae laborum impedit
                perferendis quis, sapiente doloribus eaque maxime nemo facere?
                At, facilis!
              </p>
            </div>
            <div>
              <p className="text-xl text-textColor text-center leading-8">
                <span className="text-white">Google company CTO -</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                doloribus sed asperiores commodi earum consectetur dolorem,
                eligendi animi minus. Reprehenderit laboriosam ipsa quia
                dignissimos voluptatum aliquid et repudiandae laborum impedit
                perferendis quis, sapiente doloribus eaque maxime nemo facere?
                At, facilis!
              </p>
            </div>
            <div>
              <p className="text-xl text-textColor text-center leading-8">
                <span className="text-white">Amazon company CEO -</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                doloribus sed asperiores commodi earum consectetur dolorem,
                eligendi animi minus. Reprehenderit laboriosam ipsa quia
                dignissimos voluptatum aliquid et repudiandae laborum impedit
                perferendis quis, sapiente doloribus eaque maxime nemo facere?
                At, facilis!
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
