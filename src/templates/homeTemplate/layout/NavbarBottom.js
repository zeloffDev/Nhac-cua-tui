import React from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useSelector } from "react-redux";
import Audio from "../../../Component/audio/Audio";

const FooterResponsi = () => {
  const {song} = useSelector(state=>state.PlayReducer)
  return (
    <div className="fixed bottom-0 w-full block lg:hidden">
      <footer className="dark:bg-coolGray-800 w-full dark:text-coolGray-50">
          <Audio song={song}/>
      </footer>
    </div>
  );
};

export default FooterResponsi;
