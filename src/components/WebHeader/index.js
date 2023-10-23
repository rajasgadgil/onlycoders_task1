import "./WebHeader.css";

function WebHeader() {
  return (
    <>
    
    <div
      className="webheader"     
    >
      <div className="webheader-content">
      <img src={"/assets/computer.png"} style={{ width: "45%" }} />
      <h1>Newsfeed</h1>
      <p>Check what your friends have been up to!</p>

      </div>

      <div id='webheaderoverlay'></div>
      <div id='webheaderoverlay_second'></div>

    </div>
    </>

  );
}

export default WebHeader;
