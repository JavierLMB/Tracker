import initialData from "./initialData";
import Button from "./Button";

export default function Activity({
  activity,
  activities,
  onActivityDelete,
  i,
}) {
  return (
    <div key={i}>
      <li key={activities.id}>
        <span className="activityNumber">
          <span
            style={{
              color: initialData.find((data) => data.type === activity.type)
                ?.color,
            }}
          >
            &#9679;{" "}
          </span>
          {i < 9 ? `0${i + 1}` : `${i + 1}`}.
        </span>
        <span> A:</span> {activity.name}, <span>T:</span> {activity.type},{" "}
        <span>H:</span> {activity.hours}Hrs
      </li>
      <div className="activityListButton">
        <Button onClick={() => onActivityDelete(activity)}>X</Button>
      </div>
    </div>
  );
}
