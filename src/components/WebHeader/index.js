import "./WebHeader.css";
import MediaQuery from "react-responsive";
import { useMediaQuery } from 'react-responsive'


function WebHeader() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <>
      <div className="webheader">
        <div className="webheader-content">
          <div >
            <div>
              <img id="webheaderimage" src={"/assets/computer.png"} />
            </div>
            <div>
              {isTabletOrMobile ? '': <img src={"/assets/computer.png"} style={{ width: "80%" }} />}
            </div>
          </div>

          <div >
            <h1>Newsfeed</h1>
            <p>Check what your friends have been up to!</p>
          </div>
        </div>

        <div id="webheaderoverlay"></div>
        <div id="webheaderoverlay_second"></div>
      </div>
    </>
  );
}

export default WebHeader;
