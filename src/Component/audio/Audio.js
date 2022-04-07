import React, { useEffect, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import { useDispatch, useSelector } from "react-redux";
import { PlayAction } from "../../redux/actions/PlayAction";
import { INDEX_TYPE } from "../../redux/actions/type/PlayType";

const Audio = (props) => {
  const dispatch = useDispatch();
  const { songs } = useSelector((state) => state.DataReducer);
  const { index, song } = useSelector((state) => state.PlayReducer);  
  const  result = useSelector((state) => state.PlayReducer);  
  const audioRef = useRef(null)
  
  // console.log('-==================>',result);
  // console.log(song);
  const handleClickNext = () => {

    dispatch({
      type: INDEX_TYPE,
      number: songs.length-1 > index ? index+1 : 0,
    });
    const key= songs.length-1 > index ? songs[index+1]?.key : songs[0]?.key;
    
    dispatch(PlayAction({ data: key, index:songs.length-1 > index ? index + 1 : 0 })); 
    
    }

  const handleClickPrev = () => {
    dispatch({
      type: INDEX_TYPE,
      number: 0 < index ? index -1 : songs.length-1,
    });
    const key= 0 < index ? songs[index-1]?.key : songs[songs.length-1]?.key;
    
    dispatch(PlayAction({ data: key, index: 0 < index ? index - 1 : songs.length-1 })); 
      
    }

  useEffect(() => {
    console.log(song)
  }, [song]);

  return (
    <AudioPlayer
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPrev}
      loop={false}
      onEnded={handleClickNext}
      showSkipControls={true}
      showJumpControls={false}
      src={song?.streamUrls[0]?.streamUrl}
      onPlay={(e) => console.log(e)}
      ref={audioRef}
      // other props her
    />
  );
};

export default Audio;

// const handleClickNext = () => {
//   setCurrentID((preState) => (
//     preState === songs.length -1 ? 0 : preState + 1
//   ))
// }

// const handleClickPrev = () => {
//   setCurrentID((preState) => (
//     preState === 0 ? songs.length - 1   : preState - 1
//   ))
// }


// const handleClickPrev = (number) => {
  //   if (0 < index) {
  //     dispatch({
  //       type: "INDEX_TYPE",
  //       number: number,
  //     });
  //     dispatch(PlayAction({ data: keySongPrev, index: index - 1 }));
  //   }
  //   return;



  // const handleClickNext = (number) => {
  //   setCurrentID((preState) => (
  //     preState === songs.length -1 ? 0 : preState + 1
  //   ))
  //   const key=songs[currentID+1]?.key;
  //   dispatch(PlayAction({ data: key, index: currentID}));
  // }

  // const handleClickPrev = () => {
  //   setCurrentID((preState) => (
  //     preState === 0 ? songs.length - 1   : preState - 1
  //     ))
  //   const key=songs[currentID+1]?.key;
  //   dispatch(PlayAction({ data: key, index: currentID }));

  //   }
