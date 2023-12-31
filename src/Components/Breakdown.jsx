import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DoughnutInfo from "./DoughnutInfo";
import breakdownIcon from "../images/breakdownIcon.svg";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Breakdown({ totalHoursByType, topActivityNameGlobal }) {
  return (
    <div className="breakdownContainer">
      <div className="tabIconContainer">
        <img className="tabIcon" src={breakdownIcon} />
      </div>
      <div className="breakdown">
        <div>
          <h3>Activity Breakdown</h3>
          <h4>
            Favourite Activity -{" "}
            {topActivityNameGlobal?.name.length > 6
              ? `${topActivityNameGlobal.name.slice(0, 6)}...`
              : topActivityNameGlobal.name}
          </h4>
        </div>
        <DoughnutInfo totalHoursByType={totalHoursByType} />
      </div>
    </div>
  );
}
