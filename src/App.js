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
import PopularMembers from "./components/PopularMembers";
import { animated, useSpring } from '@react-spring/web'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";


function App() {

  return (

    <div>


      <Header />
      <DashboardSidebar/>
      <Sidebar/>
    <div className="container main-div">

        <div className="row">
            <WebHeader />
          
          <div className="col-3">
            <MemberSidebar />
            <Quests />
          </div>
          <div className="col-6" xm={6}>
            <Feed />
          </div>
          <div className="col-3">
          <PopularMembers />

            <Badges />
          </div>
        </div>
    </div>
    <div className="footer">All Rights Reserved</div>

    </div>
  );
}

export default App;
