export default function Card({ data, totalHoursByType, topActivityName }) {
  return (
    <div className="cardContainer" style={{ backgroundColor: data.color }}>
      <div className="tabIconContainer">
        <img className="tabIcon" src={data.icon} />
      </div>
      <li className="card">
        <h3>{data.type}</h3>
        <p>
          {totalHoursByType[data.type] ? totalHoursByType[data.type] : 0}hrs
        </p>
        <p className="topActivity">
          Top Activity -{" "}
          {topActivityName[data.type]
            ? topActivityName[data.type].name.length > 6
              ? `${topActivityName[data.type].name.slice(0, 6)}...`
              : topActivityName[data.type].name
            : "None"}
        </p>
      </li>
    </div>
  );
}
