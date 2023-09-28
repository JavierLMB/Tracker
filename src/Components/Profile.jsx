import DatePreview from "./DatePreview";
import UserInfo from "./UserInfo";
import UserSetup from "./UserSetup";

export default function Profile({
  onSectionChange,
  section,
  user,
  onUser,
  onActivities,
}) {
  return (
    <div className="profile">
      {user ? (
        <UserInfo user={user} />
      ) : (
        <UserSetup onUser={onUser} onActivities={onActivities} />
      )}
      {user && (
        <DatePreview section={section} onSectionChange={onSectionChange} />
      )}
    </div>
  );
}
