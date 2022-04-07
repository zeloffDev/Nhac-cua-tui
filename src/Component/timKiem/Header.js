import { Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import BaiHat from "./content/BaiHat";
import Playlist from "./content/Playlist";
import Video from "./content/Video";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Header = () => {
  const { search, resultSearch } = useSelector((state) => state.SearchReducer);
  const { playlist, song, video } = resultSearch;

  console.log(resultSearch?.playlist);
  window.scrollTo(0, 0);

  return resultSearch?.playlist?(
    <div className="text-2xl ">
      <Tabs
        size="large"
        className="text-2xl"
        defaultActiveKey="1"
        onChange={callback}
        centered
      >
        <TabPane tab="Tất cả " key="1">
          <BaiHat song={song?.song} />
          <Playlist playlist={playlist?.playlist} />
          <Video video={video?.video} />
        </TabPane>
        <TabPane tab="Bài hát" key="2">
          <BaiHat song={song?.song} />
        </TabPane>
        <TabPane tab="Playlist" key="3">
          <Playlist playlist={playlist?.playlist} />
        </TabPane>
        <TabPane tab="Video" key="4">
          <Video video={video?.video} />
        </TabPane>
      </Tabs>
    </div>
  ):<div className="h-screen mt-5">
    Bạn chưa tìm kiếm ...
  </div>;
};

export default Header;
