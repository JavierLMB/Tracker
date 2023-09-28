import { useState } from "react";
import CardList from "./CardList";
import NewActivity from "./NewActivity";
import Profile from "./Profile";
import Breakdown from "./Breakdown";
import presetObj from "./presetObj";

export default function Tracker() {
  const [section, setSection] = useState(null);
  const [user, setUser] = useState(null);

  const [activities, setActivities] = useState([]);

  const totalHoursByType = activities.reduce((acc, { type, hours }) => {
    acc[type] = (acc[type] || 0) + hours;
    return acc;
  }, {});

  const topActivityName = activities.reduce(
    (maxHours, { type, name, hours }) => {
      if (!maxHours[type] || hours > maxHours[type].hours) {
        maxHours[type] = { name, hours };
      }
      return maxHours;
    },
    {}
  );

  const topActivityNameGlobal = Object.values(topActivityName).reduce(
    (highest, activity) =>
      activity.hours > highest.hours ? activity : highest,
    { hours: 0, name: "None" }
  );

  console.log(topActivityNameGlobal);

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
        onActivities={setActivities}
      />
      {section === "New Activity" && (
        <NewActivity activities={activities} onActivities={setActivities} />
      )}
      {section === "Breakdown" && (
        <Breakdown
          totalHoursByType={totalHoursByType}
          topActivityNameGlobal={topActivityNameGlobal}
        />
      )}
      {section === "Summary" && (
        <CardList
          totalHoursByType={totalHoursByType}
          topActivityName={topActivityName}
        />
      )}
    </div>
  );
}
