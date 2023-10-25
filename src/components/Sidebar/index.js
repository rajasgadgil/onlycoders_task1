import "./Sidebar.css";
import { motion, animate } from "framer-motion";
import { useState, useEffect } from "react";
import DashboardSiderbar from "./DashboardSideBar";
import OutsideClickHandler from "react-outside-click-handler";

function Sidebar(props) {
  const [mainDash, showHideDash] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [activeButton, setActiveButton] = useState(1);
  const [showTitle, setShowTitle] = useState(false);
  console.log(activeButton)

  const dashboardicons = [
    {
      id: 1,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Profile",
    },
    {
      id: 2,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Newest Members",
    },
    {
      id: 3,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Popular Groups",
    },
    {
      id: 4,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Settings",
    },
    {
      id: 5,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Privacy",
    },
    {
      id: 6,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "FAQ",
    },
    {
      id: 7,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Contact",
    },
    {
      id: 8,
      icon: <img src="/assets/images/sidebar_icons/user (1).png" />,
      title: "Career",
    },
  ];

  const toggleClass = (buttonId) => {
    console.log(buttonId)
    showHideDash(true);
    setActiveButton(buttonId);
    setShowTitle(true);
    setClicked(true);

   
  };

  const leave = () => {
    showHideDash(false);
    setShowTitle(false);
    setClicked(false);


  }

  useEffect(() => {
    showHideDash(false);
    setClicked(false);
    setActiveButton(1)
    setShowTitle(false)
  }, []);

  
  

  return (
    <>

    <OutsideClickHandler
        onOutsideClick={() => {
          setClicked(false);
          showHideDash(false);
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
                <li        
                >
                  <div id="sidebnar-navigation" className={isActive ? "active" : ""}
                       onClick={()=>{toggleClass(icons.id)}}
                  > 
                      
                  <div

                  >

                  <button
                      // onClick={()=>{toggleClass(icons.id)}}
                    >
                      {icons.icon}
                    </button>
                  </div>
         

                   <div >
                        <div className={showTitle ? "title" : "none"}
                        
                        >
                        {icons.title}

                        </div>

                    </div>

                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <DashboardSiderbar clicked={clicked}/>
      </OutsideClickHandler>

   

    </>
  );
}

export default Sidebar;
