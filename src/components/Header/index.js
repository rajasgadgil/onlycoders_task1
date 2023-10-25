// Header Component


import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useMediaQuery } from 'react-responsive';
import OutsideClickHandler from "react-outside-click-handler";

function Header() {
  
  //Media queries using React Responsive Package

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' });

  // hide and show Dropdowns

  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOpenFeature, setIsOpenFeature] = useState(false);

  function hideFeatureMenu() {
    setIsOpenFeature(!isOpenFeature);
    if (isOpenMore == true && isOpenFeature == false) {
      setIsOpenMore(false);
    }
  }
  function hideMoreMenu() {
    setIsOpenMore(!isOpenMore);
    if (isOpenFeature == true && isOpenMore == false) {
      setIsOpenFeature(false);
    }
  }

// Variants declaration for Framer Motion Animation of Dropdown Menu

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const featurelist = [
    { id: 1, name: "Feature 1" },
    { id: 2, name: "Feature 2" },
    { id: 3, name: "Feature 2" },
  ];

  const morelist = [
    { id: 1, name: "More 1" },
    { id: 2, name: "More 2" },
    { id: 3, name: "More 2" },
  ];

  return (
    <div className="header">
      <div className="upperNav">
        <div id="headsection-one">
          <div className="logo">
            <img src='/assets/images/header/logo.png' style={{width: '3em'}}/>
            <h3>Sample Page</h3>
            <img src='/assets/images/header/header-icon.png'/>
          </div>
          <div >
           {/* Close dropdowns using OutsideClickHandler package */}

            <OutsideClickHandler
            onOutsideClick={() => {
              setIsOpenMore(false)
              setIsOpenFeature(false)

            }}
            >
            <ul className="header-list">
              <li>Home</li>
              <li>
                <motion.nav
                  initial={false}
                  animate={isOpenFeature ? "open" : "closed"}
                  className="feature-menu"
                >
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={hideFeatureMenu}
                  >
                    Features
                    <motion.div
                      variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 },
                      }}
                      transition={{ duration: 0.2 }}
                      style={{ originY: 0.55 }}
                    >
                      <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                      </svg>
                    </motion.div>
                  </motion.button>
                  <motion.ul
                  className="header-menu-list"
                    variants={{
                      open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05,
                        },
                      },
                      closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3,
                        },
                      },
                    }}
                    style={{ pointerEvents: isOpenFeature ? "auto" : "none",background: isOpenFeature ? "white" : "none"  }}
                  >
                    {featurelist.map((feature) => {
                      return (
                        <motion.li variants={itemVariants}>
                          {feature.name}{" "}
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </motion.nav>
              </li>
              <li>
                <motion.nav
                  initial={false}
                  animate={isOpenMore ? "open" : "closed"}
                  className="more-menu"
                >
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={hideMoreMenu}
                  >
                    More
                    <motion.div
                      variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 },
                      }}
                      transition={{ duration: 0.2 }}
                      style={{ originY: 0.55 }}
                    >
                      <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                      </svg>
                    </motion.div>
                  </motion.button>
                  <motion.ul
                  className="header-menu-list"
                    variants={{
                      open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05,
                        },
                      },
                      closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3,
                        },
                      },
                    }}
                    style={{ pointerEvents: isOpenMore ? "auto" : "none",background: isOpenMore ? "white" : "none"  }}
                  >
                    {morelist.map((more) => {
                      return (
                        <motion.li variants={itemVariants}>
                          {more.name}{" "}
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </motion.nav>
              </li>
            </ul>

            </OutsideClickHandler>
    
          </div>
        </div>
        <div className="search">
          <input placeholder="Enter your search here" style={{backgroundImage:'url(/assets/images/header/search.png)',backgroundRepeat:'no-repeat',backgroundPosition: 'right',backgroundOrigin:'content-box'}}/>
        </div>
        <div className="login">
          <button id='login-button'><p style={{width: '100%',height:'0'}}>Login</p></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
