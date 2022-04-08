import React from "react";
import { useDispatch } from "react-redux";
import { PlayAction } from "../../../redux/actions/PlayAction";

const BaiHat = ({ song }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="flex flex-wrap w-full px-5">
          <div className="lg:w-1/2 pt-10 w-full  lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Bài Hát
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
        </div>
        <div className="container px-5 py-5  mx-auto">
          <div className="flex flex-wrap -m-2">
            {song?.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    dispatch(
                      PlayAction({
                        data: item.key,
                        // playlist: playlist?.title,
                        index: index,
                      })
                    );
                  }}
                  key={index}
                  className="cursor-pointer hover:scale-95 duration-200 p-2 lg:w-1/3 md:w-1/2 w-full"
                >
                  <div className="truncate h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt=""
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src={
                        item.thumbnail
                          ? item.thumbnail
                          : "https://picsum.photos/200"
                      }
                    />
                    <div className="flex-grow">
                      <h2 className="text-gray-900 truncate title-font font-medium">
                        {item.title}
                      </h2>
                      <p className="text-gray-500">{item?.artists[0]?.name}</p>
                    </div>
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

export default BaiHat;
