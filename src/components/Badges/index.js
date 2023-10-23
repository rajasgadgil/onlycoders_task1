import "./Badges.css";

const Badges = () => {
  return (
    <>
      <div className="badges">
        <h4>Badges</h4>
        <div>
          <div style={{display: 'flex',justifyContent: 'flex-start'}}>
            <img src="/assets/images/badges/badge.png" />
            <p>
              <strong>Globe Trotter </strong> <br />
              Has joined at least 10 different groups
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Badges;
