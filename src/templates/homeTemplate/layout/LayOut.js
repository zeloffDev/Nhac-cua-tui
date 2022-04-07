import {
  ArrowLeftOutlined,
  BarChartOutlined,
  CompassOutlined,
  CustomerServiceOutlined,
  HeartOutlined,
  HomeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Audio from "../../../Component/audio/Audio";
import "./LayOut.css";
import NavbarLeft from "./NavbarLeft";
import NavbarTop from "./NavbarTop";

const { Sider, Content } = Layout;

const LayOut = ({ children, restProps }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.MenuReducer);
  const { song } = useSelector((state) => state.PlayReducer);
  let menuCss = open ? "menuCss " : "menuOut";
  let menuWidth = open ? " " : "menuWidth";
  return (
    <div>
      <Layout>
        <Sider className={`${menuCss} ${menuWidth} lg:block  overflow-hidden`}>
          <div className="w-full">
            <div className=" logo flex gap-2 text-xl  font-medium mt-3 justify-center items-center">
              <img
                style={{ width: "50px", height: "50px" }}
                src="https://lh3.googleusercontent.com/-h4gyhGKHZRY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmN0khqOptc5jjKyXvriR1zxoJGgQ/s128-c/photo.jpg"
                alt=""
              />
              <button className=""> Nhạc Cũa Tuân</button>
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
            <Menu theme="light " mode="inline" defaultSelectedKeys={["0"]}>
              <div className="text-lg p-7 font-bold h-11 justify-center items-center flex gap-3 bg-slate-100">
                <button className="hover:text-blue-400">Đăng nhập</button> |
                <button className="hover:text-blue-400">Đăng kí</button>
              </div>

              <Menu.Item
                className="text-lg font-semibold"
                onClick={() => {
                  history.push("/timkiem");
                  dispatch({
                    type: "CLOSEMENU",
                  });
                }}
                key="1"
                icon={<SearchOutlined />}
              >
                <i class="ic_search_active sc-iLCFKZ JDYtx"></i> Tìm kiếm
              </Menu.Item>
              <Menu.Item
                className="text-lg font-semibold"
                onClick={() => {
                  history.push("/home");
                  dispatch({
                    type: "CLOSEMENU",
                  });
                }}
                key="3"
                icon={<HomeOutlined />}
              >
                Trang chủ
              </Menu.Item>
              <SubMenu
                className="text-lg font-semibold"
                key="sub1"
                icon={<CompassOutlined />}
                title="Khám phá"
              >
                <Menu.Item key="4">Bài hát</Menu.Item>
                <Menu.Item key="5">Phaylist</Menu.Item>
                <Menu.Item key="6"> Video</Menu.Item>
                <Menu.Item key="7">Nghệ sĩ</Menu.Item>
              </SubMenu>
              <SubMenu
                className="text-lg font-semibold"
                key="sub2"
                icon={<CustomerServiceOutlined />}
                title="Nghe gì hôm nay"
              >
                <Menu.Item key="8">Chủ đề </Menu.Item>
                <Menu.Item key="9">Tuyên tập</Menu.Item>
                <Menu.Item key="10"> Top 100</Menu.Item>
              </SubMenu>
              <Menu.Item
                className="text-lg font-semibold"
                key="11"
                icon={<BarChartOutlined />}
              >
                BXH NCT
              </Menu.Item>
              <Menu.Item
                className="text-lg font-semibold"
                key="13"
                icon={<HeartOutlined />}
              >
                Music 4U
              </Menu.Item>
            </Menu>
          </div>
        </Sider>
        <Layout className="site-layout">
          <div className="w-full ">
            <NavbarTop />
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              {children}
            </Content>
            {/* <NavbarBottom /> */}
          </div>

          {/* <Sider
            className="bg-white hidden lg:block h-screen  "
            width={400}
            trigger={null}
          >
            <NavbarLeft />
          </Sider> */}
          <div
            className=" fixed divaudio bottom-0 right-0 z-10"
            style={{ width: "400px" }}
          >
            <Audio song={song} />
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayOut;
