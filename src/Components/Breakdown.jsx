import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DoughnutInfo from "./DoughnutInfo";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Breakdown({ totalHoursByType }) {
  return (
    <div className="breakdown">
      <DoughnutInfo totalHoursByType={totalHoursByType} />
    </div>
  );
}
