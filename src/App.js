import logo from "./logo.svg";
import Header from "./components/Header/index.js";
import WebHeader from "./components/WebHeader/index.js";
import MemberSidebar from "./components/MemberSidebar";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DashboardSidebar from "./components/Sidebar/DashboardSideBar/index.js";
import Feed from "./components/Feed";
import Badges from "./components/Badges";
import Quests from "./components/Quests";
import PopularGroups from "./components/PopularGroups";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { useTransition, animated, useSpring } from "@react-spring/web";
import { useMediaQuery } from 'react-responsive'

function App() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' });




  return (
    <>
      <Header />
      <DashboardSidebar />
      <Sidebar />
      <div className="container">
        <div className=" main-div">
          <div className="row">
            <WebHeader />

            <div className="col-3" id="left-col">
              <MemberSidebar />
              <Quests />
            </div>
            <div className={isTabletOrMobile ? 'col-12' : 'col-6'} xm={6} id="mid-col">
              <Feed />
            </div>
            <div className="col-3" id="right-col">
              <PopularGroups />

              <Badges />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
