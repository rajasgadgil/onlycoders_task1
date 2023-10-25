// Inner Sidebar Component

import { useEffect, useState } from "react";
import "./DashboardSidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "..";
import { motion, animate } from "framer-motion";

function DashboardSiderbar(props) {
  const [Active, setActive] = useState(false);




  return (
    <>
      <div className="left-section">
        <div className={props.clicked ? "sidebarfull" : "sidebar"}></div>
      </div>
    </>
  );
}

export default DashboardSiderbar;
