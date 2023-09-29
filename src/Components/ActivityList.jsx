import Activity from "./Activity";
import activityList from "../images/activityList.svg";

export default function ActivityList({
  activities,
  backgroundColor,
  onActivityDelete,
}) {
  return (
    <div
      className="newActivityContainer"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className="tabIconContainer">
        <img className="tabIcon" src={activityList} />
      </div>
      <div className="newActivityInner">
        <h3>Activity List</h3>

        <ul className="activityList">
          {activities.map((activity, i) => (
            <Activity
              activity={activity}
              key={i}
              i={i}
              activities={activities}
              onActivityDelete={onActivityDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
