import React from "react";
import Card from "./card/Card";

const TopicEvent = (props) => {
  const { TopicEvent } = props;
  console.log(TopicEvent);
  return (
    <div className="container m-auto bg-gray-50">
      {TopicEvent?.map((item, index) => {
        return (
          <div key={index} className="pt-20 ">
            <h1
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
              className=" font-semibold  text-xl mb-14"
            >
              {item.groupName}
            </h1>
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-2">
              {item.listPlaylist.map((item, index) => {
                if (index >= 4) {
                  return;
                }
                return <Card key={index} item={item} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopicEvent;
