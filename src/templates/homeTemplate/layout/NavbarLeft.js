import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useSelector } from "react-redux";
import Audio from "../../../Component/audio/Audio";
import "./NavbarLeft.css";

const NavbarLeft = () => {
  const { song, playList } = useSelector((state) => state.PlayReducer);

  return (
    <div>
      <div style={{ width: 400 }} className="fixed  top-0 z-10">
        <div className="flex flex-col justify-center items-center p-5 m-3 bg-gray-50">
          <img
            style={{ width: 300, height: 300, objectFit: "cover" }}
            src={song?.thumbnail}
            alt=""
          />
          <div className="py-5 text-lg text-gray-500" style={{ width: 250 }}>
            <p className="text-gray-700 font-semibold">{song?.title}</p>
            <p>{song?.artists[0].name}</p>
          </div>
        </div>
        <div className="p-5 text-lg text-gray-500 w-full text-center">
          <p>Playlist: {playList}</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarLeft;
