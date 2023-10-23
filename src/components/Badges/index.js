import "./Badges.css";

const Badges = () => {
  return (
    <>
      <div className="badges">
        <h4>Badges</h4>
        <div>
          <div className="badge-text">
            <div>
            <img src="/assets/images/badges/badge.png" />
            </div>
            <div>
            <p>
              <strong>Globe Trotter </strong> <br />
              Has joined at least 10 different groups
            </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Badges;
