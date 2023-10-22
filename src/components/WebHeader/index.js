import "./WebHeader.css";

function WebHeader() {
  return (
    <>
    <div
      className="webheader"     
    >
      <img src={"/assets/computer.png"} style={{ width: "30%" }} />
      <h1>Newsfeed</h1>
      <p>Check what your friends have been up to!</p>
    </div>
    <div id='webheaderoverlay'></div>
    </>

  );
}

export default WebHeader;
