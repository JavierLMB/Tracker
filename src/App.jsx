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
  const [section, setSection] = useState(null);
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);

  const totalHoursByType = activities.reduce((acc, { type, hours }) => {
    acc[type] = (acc[type] || 0) + hours;
    return acc;
  }, {});

  function handleSectionChange(e) {
    setSection(e.target.textContent);
  }

  return (
    <div className={`tracker ${section ? "active" : ""}`}>
      <Profile
        section={section}
        onSectionChange={handleSectionChange}
        user={user}
        onUser={setUser}
      />
      {section === "Summary" && (
        <CardList totalHoursByType={totalHoursByType} />
      )}
      {section === "New Activity" && (
        <NewActivity activities={activities} onActivities={setActivities} />
      )}
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

      <div className="newUserLabel">
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="newUserLabel">
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

function NewActivity({ activities, onActivities }) {
  const [activityType, setActivityType] = useState("");

  const backgroundColor = activityType
    ? initialData.find((data) => data.type === activityType)?.color
    : "hsl(246, 80%, 60%)";

  function handleActivityDelete(cur) {
    onActivities(activities.filter((activity) => activity.id !== cur.id));
  }

  return (
    <div className="newActivity">
      <NewActivityForm
        activities={activities}
        onActivities={onActivities}
        activityType={activityType}
        onActivityType={setActivityType}
        backgroundColor={backgroundColor}
      />
      <ActivityList
        backgroundColor={backgroundColor}
        activities={activities}
        onActivityDelete={handleActivityDelete}
      />
    </div>
  );
}

function NewActivityForm({
  activities,
  onActivities,
  activityType,
  onActivityType,
  backgroundColor,
}) {
  const [activityName, setActivityName] = useState("");
  const [activityHours, setActivityHours] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newActivities = {
      id,
      name: activityName,
      type: activityType,
      hours: activityHours,
    };
    onActivities([...activities, newActivities]);
  };

  return (
    <form
      className="newActivityContainer"
      style={{
        backgroundColor: backgroundColor,
      }}
      onSubmit={handleSubmit}
    >
      <div className="newActivityInner">
        <h3>Activity Form</h3>

        <div className="newActivityData">
          <div className="newActivityLabel">
            <label>Activity Type</label>
            <select
              value={activityType}
              onChange={(e) => onActivityType(e.target.value)}
            >
              <option disabled></option>
              {initialData.map((data) => (
                <option key={data.type} value={data.type}>
                  {data.type}
                </option>
              ))}
            </select>
          </div>

          <div className="newActivityLabel">
            <label>Activity Name</label>
            <input
              type="text"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
            />
          </div>

          <div className="newActivityLabel">
            <label>Hours Spent</label>
            <input
              type="number"
              value={activityHours}
              onChange={(e) => setActivityHours(Number(e.target.value))}
            />
          </div>
        </div>
        <Button>Submit</Button>
      </div>
    </form>
  );
}

function ActivityList({ activities, backgroundColor, onActivityDelete }) {
  return (
    <div
      className="newActivityContainer"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className="newActivityInner">
        <h3>Activity List</h3>

        <ul className="activityList">
          {activities.map((activity, i) => (
            <div key={i}>
              <li key={activities.id}>
                <span className="activityNumber">
                  <span
                    style={{
                      color: initialData.find(
                        (data) => data.type === activity.type
                      )?.color,
                    }}
                  >
                    &#9679;{" "}
                  </span>
                  {i < 9 ? `0${i + 1}` : `${i + 1}`}.
                </span>
                <span> A:</span> {activity.name}, <span>T:</span>{" "}
                {activity.type}, <span>H:</span> {activity.hours}Hrs
              </li>
              <Button onClick={() => onActivityDelete(activity)}>X</Button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CardList({ totalHoursByType }) {
  return (
    <ul className="cardList">
      {initialData.map((data) => (
        <Card totalHoursByType={totalHoursByType} data={data} key={data.type} />
      ))}
    </ul>
  );
}

function Card({ data, totalHoursByType }) {
  return (
    <div className="cardContainer" style={{ backgroundColor: data.color }}>
      <li className="card">
        <h3>{data.type}</h3>
        <p>
          {totalHoursByType[data.type] ? totalHoursByType[data.type] : 0}hrs
        </p>
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
