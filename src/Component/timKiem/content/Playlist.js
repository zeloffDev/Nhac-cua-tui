import React from "react";
import { useHistory } from "react-router-dom";

const Playlist = ({ playlist }) => {
  const history = useHistory();

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-6">
            <div className="lg:w-1/2 pt-10 w-full  lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Playlist
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
          </div>
          <div className="flex flex-wrap py-5">
            {playlist?.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    // dispatch(GetPlayListAction(id));
                    history.push(`/playlist/${item.key}`);
                  }}
                  key={index}
                  className="xl:w-1/4 md:w-1/2 w-full p-2 cursor-pointer"
                >
                  <div className="bg-gray-100 p-3 rounded-lg truncate">
                    <img
                      className="h-50 w-full rounded object-cover object-center mb-6 hover:scale-105 duration-200"
                      src={
                        item.thumbnail
                          ? item.thumbnail
                          : "https://picsum.photos/200"
                      }
                      alt=""
                    />
                    <div className="w-full">
                      <h3 className="tracking-widest w-full  text-gray-400 truncate text-xs font-medium title-font">
                        {item.title}
                      </h3>
                    </div>
                    {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Playlist;
