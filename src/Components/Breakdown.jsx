import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DoughnutInfo from "./DoughnutInfo";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Breakdown({ totalHoursByType }) {
  return (
    <div className="breakdownContainer">
      <div className="breakdown">
        <div>
          <h3>Activity Breakdown</h3>
          <div>Favourite Activity -</div>
        </div>
        <DoughnutInfo totalHoursByType={totalHoursByType} />
      </div>
    </div>
  );
}
