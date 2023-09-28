import Activity from "./Activity";

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
