import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import Slider from "react-slick";

const Carosel = (props) => {
  const { showcase } = props;

  const renderCase = () =>
    showcase?.map((item, index) => {
      return (
        <div key={index}>
          <img style={{ width: "100%" }} src={item.thumbnail} alt="" />
        </div>
      );
    });

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="Btn_Slick duration-150 opacity-0 absolute px-2 py-4 rounded-md flex justify-center items-center text-lg text-white bg-black bg-opacity-40 top-1/2 right-4 transform -translate-y-1/2 z-[999999999] cursor-pointer"
        onClick={onClick}
      >
        <RightOutlined style={{ fontSize: "40px" }} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="Btn_Slick duration-150 opacity-0 absolute top-1/2 left-4 px-2 py-4 rounded-md flex justify-center items-center text-white bg-black bg-opacity-40 transform -translate-y-1/2 z-[999999999] cursor-pointer"
        onClick={onClick}
      >
        <LeftOutlined style={{ fontSize: "40px" }} />
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <div className="carosel">
        <Slider {...settings}>{renderCase()}</Slider>
      </div>
    </div>
  );
};

export default Carosel;
