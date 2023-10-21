import "./Feed.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Feed() {
  return (
    <div>
      <div class="feedHeader">
        <button id="updates">All Updates</button>
        <Dropdown>
          <DropdownButton id="dropdown-basic-button" title="Everything">
            <Dropdown.Item href="#/action-1">Everything</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
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
    </div>
  );
}

export default Feed;
