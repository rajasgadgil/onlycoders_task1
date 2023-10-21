
function PopularGroups() {
  const groups = [
    {
      id: 1,
      group_name: "Street Artists",
      group_quantity: "4 members",
      group_type: 'public'
    },
    {
      id: 2,
      group_name: "Cosplayers of the World ",
      group_quantity: "3 members",
      group_type: 'public'
    },
    {
      id: 3,
      group_name: "Stream Designers",
      group_quantity: "3 members",
      group_type: 'public'
    },
    {
      id: 4,
      group_name: "Gaming Watchtower",
      group_quantity: "3 members",
      group_type: 'private'
    },
    {
      id: 5,
      group_name: "Living in Japan",
      group_quantity: "2 members",
      group_type: 'public'
    },
  ];
  return (
    <>
      <ul>
        {groups.map((group) => {
          return (
            <li>
              <div id="profile-image"  style={{ backgroundImage: "url('assets/profile_pic_1.jpg')" }}></div>
              <div>{group.group_name}</div>
              <div>{group.group_quantity}</div>
              {group.group_type == 'public' ? <img src='assets/access_icons/globe.png'/> : <img src='assets/access_icons/lock.png'/>}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PopularGroups;
