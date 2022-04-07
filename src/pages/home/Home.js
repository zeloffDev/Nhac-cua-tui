import React from "react";
import "react-h5-audio-player/lib/styles.css";
import { useSelector } from "react-redux";
import Carosel from "../../Component/carosel/Carosel";
import TopicEvent from "../../Component/TopicEvent";

const Home = () => {
  const { getHome } = useSelector((state) => state.DataReducer);
  return (
    <div className="container m-auto">
      <Carosel showcase={getHome.showcase} />
      <TopicEvent TopicEvent={getHome.topicEvent} />
    </div>
  );
};

export default Home;