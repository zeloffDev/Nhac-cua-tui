import React from "react";
import "./Card.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetPlayListAction } from "../../redux/actions/GetPlayListAction";

const Card = (props) => {
  const dispatch=useDispatch()
  const history=useHistory()
  const { item } = props;
  return (
    <div className="flex truncate justify-center items-center flex-col">
      <div onClick={()=>{
          // dispatch(GetPlayListAction(id));
        history.push(`/playlist/${item.key}`)
      }} className="relative hover:scale-105 duration-300 ImgHover2">
        <div className="zEwek">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" cursor-pointer  h-20 w-20 text-white transform translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2"
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
        <img
          className="hover:scale-105 duration-300 ImgHover2"
          src={item.thumbnail}
          alt=""
        />
      </div>
      <div className="mt-3">
        <p
          className="hover:text-blue-600 duration-300 "
          style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default Card;
