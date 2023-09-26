import initialData from "./initialData";
import Card from "./Card";

export default function CardList({ totalHoursByType, topActivityName }) {
  return (
    <ul className="cardList">
      {initialData.map((data) => (
        <Card
          topActivityName={topActivityName}
          totalHoursByType={totalHoursByType}
          data={data}
          key={data.type}
        />
      ))}
    </ul>
  );
}
