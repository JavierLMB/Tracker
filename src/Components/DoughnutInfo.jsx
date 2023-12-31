import initialData from "./initialData";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutInfo({ totalHoursByType }) {
  const initialDoughnut = function () {
    let falsyCount = 0;

    initialData.forEach((data) => {
      const typeValue = totalHoursByType[data.type];

      if (!typeValue) falsyCount++;
    });

    if (falsyCount === 6) return [100, 100, 100, 100, 100, 100];

    const innerCalc = initialData.map((data) => {
      const typeValue = totalHoursByType[data.type];
      return typeValue ? typeValue : 0;
    });

    return innerCalc;
  };

  const DoughnutData = {
    labels: initialData.map((data) => data.type),
    datasets: [
      {
        label: "Total Hours",
        data: initialDoughnut(),
        backgroundColor: [
          "hsl(15, 100%, 70%)",
          "hsl(195, 74%, 62%)",
          "hsl(348, 100%, 68%)",
          "hsl(145, 58%, 55%)",
          "hsl(263, 63%, 51%)",
          "hsl(43, 84%, 65%)",
        ],
        borderColor: ["hsl(236, 44%, 20%)"],
        hoverBorderColor: ["hsl(236, 44%, 20%)"],
        hoverOffset: 50,
        borderWidth: 20,
      },
    ],
  };

  return (
    <Doughnut
      data={DoughnutData}
      options={{
        layout: {
          padding: 0,
        },
        plugins: {
          legend: {
            position: "left",
            align: "center",
            labels: {
              color: "#eeecff",
              font: {
                family: "Segoe UI",
                weight: 400,
                size: 24,
              },
            },
          },
        },
      }}
    />
  );
}
