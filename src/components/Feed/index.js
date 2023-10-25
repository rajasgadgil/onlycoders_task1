// Feed Component

import "./Feed.css";
import "../MemberSidebar/MemberSidebar.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
function Feed() {

  // hide and show Everything dropdown 
  const [isOpenFeature, setIsOpenFeature] = useState(false);
  
  const featurelist = [
    { id: 1, name: "Everything" },
    { id: 2, name: "Everything" },
    { id: 3, name: "Everything" },
  ];

  const variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  function hideFeatureMenu() {
    setIsOpenFeature(!isOpenFeature);
  
  }
  return (
    <>
      <div class="feedHeader">
        <button id="updates">All Updates</button>
        {/* Close dropdown using OutsideClickHandler package */}
        <OutsideClickHandler 
        onOutsideClick={()=>{
          setIsOpenFeature(false)

        }}
        ></OutsideClickHandler>
        {/* on click display dropdown using Framer Motion Animation */}
        <motion.nav
          initial={false}
          animate={isOpenFeature ? "open" : "closed"}
          className="everything-menu"
        >
          <motion.button whileTap={{ scale: 0.97 }} onClick={hideFeatureMenu}>
            Everything
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
                //  clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpenFeature ? "auto" : "none",position:'absolute',background: isOpenFeature ? "#5D5DF5" : "",padding: '1em' }}
          >
            {featurelist.map((feature) => {
              return <motion.li variants={variants}>{feature.name} </motion.li>;
            })}
          </motion.ul>
        </motion.nav>
      </div>
      <div className="Feed">
        <div id="card" className="card-1">
          <div className="card-header">
            <div id="card-section">
              <div>
                <div id="profile-feed">
                  <div
                    id="profile-image-feed"
                    style={{
                      backgroundImage: "url('assets/profile_pic_1.jpg')",
                    }}
                  ></div>
                </div>
              </div>
            <div>          
              
              <p>
                <strong>Marine Valentine</strong>
                <img
                  src="/assets/images/feed-icons/blue-tick.png"
                  style={{ width: "3%", marginTop: "-0.15rem" }}
                />
                <span
                  style={{
                    background: "#5D5DF5",
                    borderRadius: "20px 20px 20px 20px",
                    padding: "0.5em",
                    paddingTop: "0.3em",
                    paddingBottom: "0.3em",
                    color: "white",
                  }}
                >
                  Pro Member
                </span>
                replied to the topic
                <span> Welcome To the Cosplayers Group Forum! </span> in the
                forum
                <span> Cosplayers Group Forume </span>
                <br />1 year ago
              </p></div>
            </div>
          </div>
          <div className="card-text">Hello Everyone!</div>
          <div className="card-footer">
            <div>
              <img src="/assets/images/feed-icons/smiley.png" style={{width:'1.5rem'}}/>
            </div>
            <div>0 Comments</div>
            <div>0 Shares</div>
          </div>
        </div>
        <div id="card" className="card-2">
          <div className="card-header">
          <div style={{ display: "grid", gridTemplateColumns: "15% 85%" }}>
            <div>
                <div id="profile-feed">
                  <div
                    id="profile-image-feed"
                    style={{
                      backgroundImage: "url('assets/profile_pic_1.jpg')",
                    }}
                  ></div>
                </div>
              </div>
            <div>  
              <p>
                <strong>Marina Valentine</strong>
                <img
                  src="/assets/images/feed-icons/blue-tick.png"
                  style={{ width: "3%", marginTop: "-0.15rem" }}
                />
                <span
                  style={{
                    background: "#5D5DF5",
                    borderRadius: "20px 20px 20px 20px",
                    padding: "0.5em",
                    paddingTop: "0.3em",
                    paddingBottom: "0.3em",
                    color: "white",
                  }}
                >
                  Pro Member
                </span>
                posted an update
                <br />2 years ago
              </p>
              </div>
            </div>
          </div>
          <div className="card-text">https://www.twitch.tv/blizzard
          <br/>
          <img src='/assets/images/feed-icons/dota.jpg' style={{width: '100%'}}/>
          </div>
          <div className="card-footer">
            <div></div>
            <div>0 Comments</div>
            <div>0 Shares</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
