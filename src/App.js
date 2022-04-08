import { createBrowserHistory } from "history";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Test from "./Component/Test";
import Home from "./pages/home/Home";
import PlayListDetail from "./pages/playListDetail/PlayListDetail";
import TimKiem from "./pages/timKiem/TimKiem";
import { GetHomeAction } from "./redux/actions/GetHomeAction";
import { PlayAction } from "./redux/actions/PlayAction";
import { HomeTemplate } from "./templates/homeTemplate/HomeTemplate";
import LayOut2 from "./templates/homeTemplate/layout/LayOut2";
export const history = createBrowserHistory();

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetHomeAction());
    dispatch(PlayAction({
      data: "kdzWfTssP47l",
      playlist: 'Bigbang',
      index: 0,
    }))
  }, []);
  return (
    <Router history={history}>
      {/* <Router history={history}/> */}
      {/* <LayOut2/> */}
        <Switch>
          <HomeTemplate exact path="/home" Component={Home} />
          <HomeTemplate exact path="/timkiem" Component={TimKiem} />
          <HomeTemplate exact path="/playlist/:id" Component={PlayListDetail} />
          <HomeTemplate exact path="/" Component={Home} />
        </Switch>
    </Router>
  );
};

export default App;
