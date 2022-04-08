import {
  ShareAltOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPlayListAction } from "../../redux/actions/GetPlayListAction";
import { PlayAction } from "../../redux/actions/PlayAction";
import { Tag, Input } from "antd";

const PlayListDetail = (props) => {
  window.scrollTo(0, 0);
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const { playlist } = useSelector((state) => state.DataReducer.getPlayList);
  const { songs } = useSelector((state) => state.DataReducer);

  useEffect(() => {
    dispatch(
      PlayAction({
        data: playlist?.songs ? playlist?.songs[0].key : "cDFnrv2kVpFu",
        index: 0,
      })
    );
  }, [playlist]);

  useEffect(() => {
    dispatch(GetPlayListAction(id));
  }, []);

  return (
    <div className="container m-auto  bg-gray-50 pb-16 p-5">
      <div className=" md:flex ">
        <div
          onClick={() => {
            dispatch(PlayAction({ data: playlist?.songs[0]?.key, index: 0 }));
          }}
          className="relative hover:scale-105 duration-300 ImgHover2 cursor-pointer"
        >
          <img className="m-auto md:m-0" src={playlist?.thumbnail} alt="" />
        </div>
        <div className=" text-gray-400 ml-16 mt-5 md:mt-0">
          <h1 className="text-gray-400">
            PlayList: <span className="text-black">{playlist?.title}</span>
          </h1>
          <p>Ngày phát hành: {playlist?.dateModify}</p>
          <p>{playlist?.title}</p>
          <div className=" lg:flex hidden">
            <p className="m-0">tags :</p>
            <div className="grid grid-cols-6 gap-3 ">
              {playlist?.listTag.map((item, index) => {
                if (index > 5) {
                  return;
                }
                return (
                  <button
                    key={index}
                    className="truncate  bg-gray-300  px-4 rounded-lg ml-4 hover:scale-95 duration-200"
                  >
                    {item?.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-100 p-5 mt-5 justify-between">
        <div className="flex">
          <img
            className="w-16 h-16 rounded-full"
            src={playlist?.uploadBy?.avatarUrl}
            alt=""
          />
          <div className=" ml-5">
            <p className="m-0 text-gray-400">Tạo bởi:</p>
            <p className="m-0 text-blue-500">{playlist?.uploadBy?.fullName}</p>
          </div>
        </div>
        <div className="text-2xl mr-5 md:block hidden">
          <VerticalAlignBottomOutlined className="mr-5 text-gray-400" />
          <ShareAltOutlined />
        </div>
      </div>
      <div className=" text-3xl mt-16">
        <h1>Danh sách bài hát</h1>
      </div>
      <div className="mt-10  h-[500px] overflow-x-auto">
        <table className="w-full overflow-y-scroll  text-left ">
          <thead>
            <tr className="font-medium bg-gray-50 truncate sticky top-0 left-0">
              <th className="p-3">TIÊU ĐỀ</th>
              <th className="p-3">NGHỆ SĨ</th>
              <th className="p-3">LƯỢT NGHE</th>
              <th className="p-3">THỜI GIAN</th>
            </tr>
          </thead>
          <tbody>
            {playlist?.songs?.map((item, index) => {
              return (
                <tr
                  onClick={() => {
                    dispatch(
                      PlayAction({
                        data: item.key,
                        playlist: playlist?.title,
                        index: index,
                      })
                    );
                  }}
                  key={index}
                  className="text-gray-400 truncate cursor-pointer hover:text-blue-400"
                >
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.artists[0]?.name}</td>
                  <td className="p-3">{item.artists[0]?.artistId}</td>
                  <td className="p-3">{item.duration}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayListDetail;
