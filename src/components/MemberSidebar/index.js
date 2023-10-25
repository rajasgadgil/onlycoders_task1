import image from "./profile_pic_1.jpg";
import "./MemberSidebar.css";
import { animated, motion } from "framer-motion";

const MemberSidebar = () => {
  const newmembers = [
    {
      id: 1,
      name: "Sandra Strange",
      handle: "@sanstrange",
    },
    {
      id: 2,
      name: "Rosie Sakura",
      handle: "@sakurara",
    },
    {
      id: 3,
      name: "Damian Greyson",
      handle: "@dgreyson",
    },
    {
      id: 4,
      name: "The Green Goo",
      handle: "@greengoo",
    },
    {
      id: 5,
      name: "Bearded Wonder",
      handle: "@brdwonder",
    },
    {
      id: 6,
      name: "Sandra Strange",
      handle: "@sanstrange",
    },
  ];
  let count = 0.1;

  return (
    <>
      <div className="membersidebar">
        <h4>Newest Members</h4>

        <ul>
          {newmembers.map((member) => {
            return (
              <li>
                <motion.div
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whiteInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: ++count,
                    ease: [0, 0.61, 0.2, 0.5],
                  }}
                >
                  <div id="members">
                    <div
                      id="profile-outer"
                    >     
                   <div
                      id="profile-image"
                      style={{ backgroundImage: "url('" + image + "')" }}

                    >  

                    </div>                 
                    </div>

    
                    <div>
                      {member.name}
                      <br />
                      {member.handle}
                    </div>
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MemberSidebar;
