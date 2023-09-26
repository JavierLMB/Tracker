import DatePreview from "./DatePreview";
import UserInfo from "./UserInfo";
import UserSetup from "./UserSetup";

export default function Profile({ onSectionChange, section, user, onUser }) {
  return (
    <div className="profile">
      {user ? <UserInfo user={user} /> : <UserSetup onUser={onUser} />}
      {user && (
        <DatePreview section={section} onSectionChange={onSectionChange} />
      )}
    </div>
  );
}
