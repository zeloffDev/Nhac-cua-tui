import React from "react";

const Video = ({ video }) => {
  console.log(video);
  return (
    <div className="w-full">
      <section className="text-gray-600 body-font">
        <div className="container px-5  mx-auto">
        <div className="flex flex-wrap w-full mb-6">
          <div className="lg:w-1/2 pt-10 w-full  lg:mb-0">
            <h1 className="sm:text-3xl font-medium title-font mb-2 text-gray-900">
              Bài Hát
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
        </div>
          <div className=" flex flex-wrap py-5">
            {video?.map((item,index)=>{
              return <div key={index} className="lg:w-1/3 sm:w-1/2 p-4 w-full ">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.thumbnail}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                   {item.title}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.artists[0]?.name}
                  </h1>
                  <p className="leading-relaxed">
                    Không có mô tả nào về Video ...
                  </p>
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
