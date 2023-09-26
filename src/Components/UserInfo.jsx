import maleAvatar from "../images/maleAvatar.svg";
import femaleAvatar from "../images/femaleAvatar.svg";

export default function UserInfo({ user }) {
  return (
    <div className="userSection">
      {user.gender === "male" && (
        <img className="profileIcon" src={maleAvatar} alt="Avatar" />
      )}

      {user.gender === "female" && (
        <img className="profileIcon" src={femaleAvatar} alt="Avatar" />
      )}

      <div>
        <p>Report for</p>
        <h3>
          <span>{user.firstName}</span>
          <br></br>
          <span>{user.lastName}</span>
        </h3>
      </div>
    </div>
  );
}
