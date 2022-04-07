import {
  ArrowLeftOutlined,
  BarChartOutlined,
  CompassOutlined,
  CustomerServiceOutlined,
  HeartOutlined,
  HomeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./LayOut.css";
import { useHistory } from "react-router-dom";
import NavbarLeff2 from "./NavbarLeff2";
import NavbarTop from "./NavbarTop";
import Audio from "../../../Component/audio/Audio";
import styles from './LayOut2.module.css'

const LayOut2 = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.MenuReducer);
  const openCss = open ? "col-span-12" : "hidden";
  const openBodyCss = open ? "hidden" : "col-col-span-12";
  return (
    <div className="bg-gray-50 grid grid-cols-12 w-full">
      <div
        className={`${openCss} navbar lg:col-span-2 lg:block text-gray-400 text-base`}
      >
        <div className="sticky top-0">
        <div className="flex justify-evenly items-center h-16">
          <img
            className="w-12"
            src="https://stc-id.nixcdn.com/v12/static/media/logo.5a1f4537.png"
            alt=""
          />

          <button className="border bg-gray-50 border-gray-200 rounded-full px-4  hover:border-blue-500 hover:text-blue-500">
            Nâng cấp
          </button>
          <button
            onClick={() => {
              dispatch({
                type: "TONGGLE",
              });
            }}
            className="absolute right-2 translate-y-[-30%] block lg:hidden"
          >
            <ArrowLeftOutlined />
          </button>
        </div>
        <div className="flex bg-gray-100 justify-evenly items-center h-16">
          <button className="hover:text-blue-500">Đăng nhập </button> |
          <button className="hover:text-blue-500">Đăng kí</button>
        </div>

        <Menu theme="light " mode="inline" defaultSelectedKeys={["0"]}>
          <Menu.Item
            className="text-base font-normal"
            onClick={() => {
              history.push("/timkiem");
              dispatch({
                type: "CLOSEMENU",
              });
            }}
            key="1"
          >
            <div className="grid grid-cols-4">
              <div className="col-span-1 flex justify-center items-center text-2xl text-green-400">
                <SearchOutlined style={{fontSize: '20px'}}/>
              </div>
              Tìm kiếm
            </div>
          </Menu.Item>
          <Menu.Item
            className="text-base font-normal"
            onClick={() => {
              history.push("/home");
              dispatch({
                type: "CLOSEMENU",
              });
            }}
            key="3"
          >
            <div className="grid grid-cols-4">
              <div className="col-span-1 flex justify-center items-center text-2xl text-blue-400">
                <HomeOutlined style={{fontSize: '20px'}}/>
              </div>
              Trang chủ
            </div>
          </Menu.Item>

          <SubMenu
            className="text-base font-normal"
            key="sub1"
            icon={
              <div className="grid grid-cols-4">
                <div className="col-span-1 flex justify-center items-center text-2xl text-yellow-300">
                  <CompassOutlined style={{fontSize: '20px'}}/>
                </div>
                Khám phá
              </div>
            }
          >
            <Menu.Item key="4">Bài hát</Menu.Item>
            <Menu.Item key="5">Phaylist</Menu.Item>
            <Menu.Item key="6"> Video</Menu.Item>
            <Menu.Item key="7">Nghệ sĩ</Menu.Item>
          </SubMenu>
          <SubMenu
            className="text-base font-normal"
            key="sub2"
            icon={
              <div className="grid grid-cols-4">
                <div className="col-span-1 flex justify-center items-center text-2xl text-violet-400">
                  <CustomerServiceOutlined style={{fontSize: '20px'}}/>
                </div>
                Nghe gì hôm nay
              </div>
            }
            title="Nghe gì hôm nay"
          >
            <Menu.Item key="8">Chủ đề </Menu.Item>
            <Menu.Item key="9">Tuyên tập</Menu.Item>
            <Menu.Item key="10"> Top 100</Menu.Item>
          </SubMenu>
          <Menu.Item className="text-base font-normal" key="11">
            <div className="grid grid-cols-4">
              <div className="col-span-1 flex justify-center items-center text-2xl text-orange-600">
                <BarChartOutlined style={{fontSize: '20px'}}/>
              </div>
              BXH NCT
            </div>
          </Menu.Item>
          <Menu.Item className="text-base font-normal" key="13">
            <div className="grid grid-cols-4">
              <div className="col-span-1 flex justify-center items-center text-2xl text-blue-400">
                <HeartOutlined style={{fontSize: '20px'}}/>
              </div>
              Music 4U
            </div>
          </Menu.Item>
        </Menu>
        </div>
      </div>
      <div className={` ${openBodyCss} navbar col-span-full lg:col-span-8`}>
        <NavbarTop />
        {children}
      </div>
      <div className="navbar col-span-2 hidden lg:block">
        <NavbarLeff2 />
      </div>
      <div className="fixed bottom-0 right-0 w-full lg:w-1/6">
        <Audio />
      </div>
    </div>
  );
};

export default LayOut2;
