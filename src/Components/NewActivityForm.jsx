import { useState } from "react";
import initialData from "./initialData";
import Button from "./Button";
import activityAdd from "../images/activityAdd.svg";

export default function NewActivityForm({
  activities,
  onActivities,
  activityType,
  onActivityType,
  backgroundColor,
}) {
  const [activityName, setActivityName] = useState("");
  const [activityHours, setActivityHours] = useState("");

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activityHours <= 0) return;

    const id = crypto.randomUUID();

    const newActivities = {
      id,
      name: capitalizeFirstLetter(activityName),
      type: capitalizeFirstLetter(activityType),
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
      <div className="tabIconContainer">
        <img className="tabIcon" src={activityAdd} />
      </div>
      <div className="newActivityInner">
        <h3>Activity Form</h3>

        <div className="newActivityData">
          <div className="newActivityLabel">
            <label>Activity Type</label>
            <select
              required
              value={activityType}
              onChange={(e) => onActivityType(e.target.value)}
            >
              <option></option>
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
              maxLength="20"
              required
              type="text"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
            />
          </div>

          <div className="newActivityLabel">
            <label>Hours Spent</label>
            <input
              min="1"
              max="99"
              required
              type="number"
              value={activityHours}
              onChange={(e) => setActivityHours(Number(e.target.value))}
            />
          </div>
        </div>
        <Button bright={true}>Submit</Button>
      </div>
    </form>
  );
}
