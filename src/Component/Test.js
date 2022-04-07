import React from "react";
import { Link } from "react-router-dom";
import { history } from "../App";

const Test = () => {
  // console.log(history);
  return (
    <div>
      <Link to="/home">home</Link>
      <Link to="/">back</Link>
      <div className="text-red-800 text-2xl w-full h-screen flex justify-center items-center">
        <div className="p-5 overflow-hidden bg-gray-500 shadow-xl rounded-sm ImgHover border-2 relative">
          <img
            src="https://static2.yan.vn/YanNews/2167221/201910/hotgirl-it-thu-nhap-len-toi-50-trieu-dong-moi-thang-nho-noi-tieng-4674e856.jpg"
            alt=""
            className="transform scale-75"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="PlayIcon duration-200 cursor-pointer opacity-0 h-20 w-20 text-white transform translate-x-[-50%] translate-y-[-50%] hidden absolute top-1/2 left-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Test;
