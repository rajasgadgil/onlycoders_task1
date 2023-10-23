import "./PopularGroups.css";
function PopularGroups() {
  const groups = [
    {
      id: 1,
      group_name: "Street Artists",
      group_quantity: "4 members",
      group_type: "public",
    },
    {
      id: 2,
      group_name: "Cosplayers of the World ",
      group_quantity: "3 members",
      group_type: "public",
    },
    {
      id: 3,
      group_name: "Stream Designers",
      group_quantity: "3 members",
      group_type: "public",
    },
    {
      id: 4,
      group_name: "Gaming Watchtower",
      group_quantity: "3 members",
      group_type: "private",
    },
    {
      id: 5,
      group_name: "Living in Japan",
      group_quantity: "2 members",
      group_type: "public",
    },
  ];
  return (
    <>
      <div className="popularsection">
        <h4>Popular Groups</h4>
        <ul>
          {groups.map((group) => {
            return (
              <li>
                <div className="populargroups">
                  <div
                    id="profile-image"
                    style={{
                      backgroundImage: "url('assets/profile_pic_1.jpg')",
                    }}
                  ></div>
                  <div>
                    <p>
                      {group.group_name}
                      <br />
                      {group.group_quantity}
                    </p>
                  </div>
                  <div>
                    {group.group_type == "public" ? (
                      <img src="assets/access_icons/globe.png" />
                    ) : (
                      <img src="assets/access_icons/lock.png" />
                    )}{" "}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default PopularGroups;
