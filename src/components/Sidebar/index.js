import "./Sidebar.css";
import { motion, animate } from "framer-motion";
import { useState, useEffect } from "react";
import DashboardSiderbar from "./DashboardSideBar";
import OutsideClickHandler from 'react-outside-click-handler';

function Sidebar(props) {
  const [Active, setActive] = useState(false);
  const [mainDash, showHideDash] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleClass = () => {
    // setActive(!Active);
    setClicked(!clicked);
    showHideDash(!mainDash);
  };
  
  
  useEffect(() => {
    showHideDash(false);
    setClicked(false);
  }, []);
  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          setClicked(false);
          showHideDash(false);

        }}
      >
  <div className={mainDash ? "dashboardsidebarfull" : "dashboardsidebar"}>
        <ul>
          <li>
            <div>
              <button className={Active ? "active" : ""} onClick={toggleClass}>
                <img style={{ color: "yellow" }} src="./assets/user.png" />
              </button>
            </div>
            <div>Profile</div>
          </li>

          <li>
            <div>
              <button className={Active ? "active" : ""} onClick={toggleClass}>
                <img style={{ color: "yellow" }} src="./assets/user.png" />
              </button>
            </div>
            <div>Two</div>
          </li>
          <li>
            <div>
              <button className={Active ? "active" : ""} onCick={toggleClass}>
                <img style={{ color: "yellow" }} src="./assets/user.png" />
              </button>
            </div>
            <div> Three</div>
          </li>
          <li>
            <button className={Active ? "active" : ""}>
              <img style={{ color: "yellow" }} src="./assets/user.png" />
            </button>
            Four
          </li>
          <li>
            <button className={Active ? "active" : ""}>
              <img style={{ color: "yellow" }} src="./assets/user.png" />
            </button>
            Five
          </li>
          <li>
            <button className={Active ? "active" : ""}>
              <img style={{ color: "yellow" }} src="./assets/user.png" />
            </button>
            Six
          </li>
          <li>
            <button className={Active ? "active" : ""}>
              {/* <img style={{ color: "yellow" }} src={image} /> */}
            </button>
            Seven
          </li>
          <li>
            <button className={Active ? "active" : ""}>
              {/* <img style={{ color: "yellow" }} src={image} /> */}
            </button>
            Eight
          </li>
          <li>
            <button className={Active ? "active" : ""}>
              {/* <img style={{ color: "yellow" }} src={image} /> */}
            </button>
            Nine
          </li>
          <li>
            <button className={Active ? "active" : ""}>
              {/* <img style={{ color: "yellow" }} src={image} /> */}
            </button>
            Ten
          </li>
        </ul>
      </div>
      <DashboardSiderbar clicked={clicked} />

      </OutsideClickHandler>
    
    </>
  );
}

export default Sidebar;
