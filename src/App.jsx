import { useState } from "react";
import maleAvatar from "./images/maleAvatar.svg";
import femaleAvatar from "./images/femaleAvatar.svg";

const initialData = [
  {
    type: "Work",
    color: "hsl(15, 100%, 70%)",
    hours: 32,
    lastWeek: 36,
  },
  {
    type: "Play",
    color: "hsl(195, 74%, 62%)",
    hours: 10,
    lastWeek: 8,
  },
  {
    type: "Study",
    color: "hsl(348, 100%, 68%)",
    hours: 4,
    lastWeek: 7,
  },
  {
    type: "Exercise",
    color: " hsl(145, 58%, 55%)",
    hours: 4,
    lastWeek: 5,
  },
  {
    type: "Social",
    color: "hsl(263, 63%, 51%)",
    hours: 5,
    lastWeek: 10,
  },
  {
    type: "Self Care",
    color: "hsl(43, 84%, 65%)",
    hours: 2,
    lastWeek: 2,
  },
];

export default function App() {
  return (
    <div className="app">
      <Tracker />
    </div>
  );
}

function Tracker() {
  const [section, setSection] = useState("new");
  const [user, setUser] = useState(null);

  function handleSectionChange(e) {
    setSection(e.target.textContent);
  }

  return (
    <div className={`tracker ${section === "Summary" ? "active" : ""}`}>
      <Profile
        section={section}
        onSectionChange={handleSectionChange}
        user={user}
        onUser={setUser}
      />
      {section === "Summary" && <CardList />}
    </div>
  );
}

function Profile({ onSectionChange, section, user, onUser }) {
  return (
    <div className="profile">
      {user ? <UserInfo user={user} /> : <UserSetup onUser={onUser} />}
      {user && (
        <DatePreview section={section} onSectionChange={onSectionChange} />
      )}
    </div>
  );
}

function UserSetup({ onUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
    };
    onUser(newUser);
  };

  return (
    <form className="userSection" onSubmit={handleSubmit}>
      <h2>Welcome to Tracker!</h2>

      <div className="genderChoice">
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <img className="profileIcon" src={maleAvatar} alt="Avatar" />
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <img className="profileIcon" src={femaleAvatar} alt="Avatar" />
        </label>
      </div>
      <div class="newUserLabel">
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div class="newUserLabel">
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <Button>Continue</Button>
    </form>
  );
}

function UserInfo({ user }) {
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

function DatePreview({ onSectionChange, section }) {
  return (
    <ul className="datePreview">
      <li>
        <Button section={section} onClick={onSectionChange}>
          New Activity
        </Button>
      </li>
      <li>
        <Button section={section} onClick={onSectionChange}>
          Breakdown
        </Button>
      </li>
      <li>
        <Button section={section} onClick={onSectionChange}>
          Summary
        </Button>
      </li>
    </ul>
  );
}

function CardList() {
  return (
    <ul className="cardList">
      {initialData.map((data) => (
        <Card data={data} key={data.type} />
      ))}
    </ul>
  );
}

function Card({ data }) {
  return (
    <div className="cardContainer" style={{ backgroundColor: data.color }}>
      <li className="card">
        <h3>{data.type}</h3>
        <p>{data.hours}hrs</p>
        <p className="topActivity">Top Activity - {data.lastWeek}</p>
      </li>
    </div>
  );
}

function Button({ children, onClick, section }) {
  return (
    <button
      className={`button ${section === children ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
