import DatePreview from "./DatePreview";
import UserInfo from "./UserInfo";
import UserSetup from "./UserSetup";
import TrackerLogoSVG from "../images/TrackerLogoSVG.svg";

export default function Profile({
  onSectionChange,
  section,
  user,
  onUser,
  onActivities,
}) {
  return (
    <>
      <div className="profile">
        <div className="logoIconContainer">
          <img className="logoIcon" src={TrackerLogoSVG} />
        </div>
        {user ? (
          <UserInfo user={user} />
        ) : (
          <UserSetup onUser={onUser} onActivities={onActivities} />
        )}
        {user && (
          <DatePreview section={section} onSectionChange={onSectionChange} />
        )}
      </div>
    </>
  );
}
