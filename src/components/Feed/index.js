import "./Feed.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

function Feed() {
  const [isOpenMore, setIsOpenMore] = useState(false);
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
    if (isOpenMore == true && isOpenFeature == false) {
      setIsOpenMore(false);
    }
  }
  return (
    <>
      <div class="feedHeader">
        <button id="updates">All Updates</button>
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
            style={{ pointerEvents: isOpenFeature ? "auto" : "none" }}
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
            <div>
              <span>Marine Valentine Pro Member</span>replied to the topic{" "}
              <span>Welcome To the Cosplayers Group Forum!</span> in the forum{" "}
              <span>Cosplayers Group Forume</span>
            </div>
            <div id="header-time">1 year ago</div>
          </div>
          <div className="card-text">Hello Everyone!</div>
          <div className="card-footer"></div>
        </div>
        <div id="card" className="card-2">
          <div className="card-header">
            <div>
              <span>Marina Valentine</span>posted an update
            </div>
            <div className="header-time">2 years ago</div>
          </div>
          <div className="card-text">https://www.twitch.tv/blizzard</div>
          <div className="card-footer"></div>
        </div>
      </div>
    </>
  );
}

export default Feed;
