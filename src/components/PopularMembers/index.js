import image from "./profile_pic_1.jpg";

const PopularMembers = () => {
  return (
    <div>
      <ul>
        <li>
          <div>
            <div
              id="profile-image"
              style={{ backgroundImage: "url('" + image + "')" }}
            ></div>
            Street Artists 4 members
          </div>
          <li>
            <div>
              <div
                id="profile-image"
                style={{ backgroundImage: "url('" + image + "')" }}
              ></div>
              Cosplayers of the World 3 members
            </div>
          </li>
          <li>
            <div>
              <div
                id="profile-image"
                style={{ backgroundImage: "url('" + image + "')" }}
              ></div>
              Stream Designers 3 members
            </div>
          </li>
          <li>
            <div>
              <div
                id="profile-image"
                style={{ backgroundImage: "url('" + image + "')" }}
              ></div>
              Gaming Watchtower 3 members
            </div>
          </li>
          <li>
            <div>
              <div
                id="profile-image"
                style={{ backgroundImage: "url('" + image + "')" }}
              ></div>
              Living in Japan 2 members
            </div>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default PopularMembers;
