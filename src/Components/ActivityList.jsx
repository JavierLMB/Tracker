import initialData from "./initialData";
import Button from "./Button";

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
