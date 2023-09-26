import { useState } from "react";
import initialData from "./initialData";
import NewActivityForm from "./NewActivityForm";
import ActivityList from "./ActivityList";

export default function NewActivity({ activities, onActivities }) {
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
