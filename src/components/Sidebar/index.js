import "./Sidebar.css";
import { motion, animate } from "framer-motion";
import { useState, useEffect } from "react";
import DashboardSiderbar from "./DashboardSideBar";
import OutsideClickHandler from "react-outside-click-handler";

function Sidebar(props) {
  const [Active, setActive] = useState(false);
  const [mainDash, showHideDash] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [showTitle, setShowTitle] = useState(false);


  const dashboardicons = [
    {
      id: 1,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Profile",
    },
    {
      id: 2,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Profile",
    },
    {
      id: 3,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Profile",
    },
    {
      id: 4,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Profile",
    },
    {
      id: 5,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Profile",
    },
    {
      id: 6,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Profile",
    },
    {
      id: 7,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Profile",
    },
    {
      id: 8,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Profile",
    },
  ];

  const toggleClass = (buttonId) => {
    setShowTitle(true);
    setActive(true);
    setClicked(true);
    showHideDash(true);
    setActiveButton(buttonId)
   
  };

  const leave = () => {

    setActive(false);
    setClicked(false);
    showHideDash(false);
    setActiveButton(null);
    setShowTitle(false)

  }

  useEffect(() => {
    setActive(false);
    showHideDash(false);
    setClicked(false);
    setActiveButton(null)
    setShowTitle(false)
  }, []);

  
  

  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          setActive(false);
          setClicked(false);
          showHideDash(false);
          setActiveButton(null);
          setShowTitle(false)
        }}
      >
        <div
          className={
            mainDash ? "clicked dashboardsidebarfull" : "dashboardsidebar"
          }
        >
          <ul>
            {dashboardicons.map((icons) => {
              const isActive = activeButton === icons.id;

              return (
                <li>
                  <div id="sidebnar-navigation" className={isActive ? "active" : ""}
                       onMouseOver={()=>{toggleClass(icons.id)}}
                       onMouseLeave={leave}
                      
                      > 
                      
                  <div

                  >

                  <button
                      // onClick={()=>{toggleClass(icons.id)}}
                      onMouseOver={()=>{toggleClass(icons.id)}}
                      onMouseLeave={leave}
                    >
                      {icons.icon}
                    </button>
                  </div>
         

                   <div >
                        <div className={showTitle ? "title" : "none"}>
                        {icons.title}

                        </div>

                    </div>

                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <DashboardSiderbar clicked={clicked} />
      </OutsideClickHandler>
    </>
  );
}

export default Sidebar;
