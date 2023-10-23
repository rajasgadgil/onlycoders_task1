import "./WebHeader.css";

function WebHeader() {
  return (
    <>
      <div className="webheader">
        <div className="webheader-content">
          <div>
            <div>
              <img id="webheaderimage" src={"/assets/computer.png"} />
            </div>
            <div>
              <img src={"/assets/computer.png"} style={{ width: "80%" }} />
            </div>
          </div>

          <div>
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
