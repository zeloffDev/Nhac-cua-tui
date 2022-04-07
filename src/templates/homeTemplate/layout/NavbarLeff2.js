import React from 'react';
import { useSelector } from 'react-redux';

const NavbarLeff2 = () => {
    const {song,playList} = useSelector(state=>state.PlayReducer)
    return (
        <div className="flex sticky top-0 justify-center text-gray-500 items-start">
        <div className="p-5 ">
          <img
            src={song?.thumbnail}
            alt=""
          />
          <div className="mt-5">
            <p>Name: {song?.title}</p>
            <p>Ca Sĩ: {song?.artists[0]?.name}</p>
            <p>Playlist: {playList}</p>
          </div>
        </div>
      </div>
    );
};

export default NavbarLeff2;