import { useState } from "react";
import maleAvatar from "./images/maleAvatar.svg";

const initialData = [
  {
    type: "Work",
    hours: 32,
    lastWeek: 36,
  },
  {
    type: "Play",
    hours: 10,
    lastWeek: 8,
  },
  {
    type: "Study",
    hours: 4,
    lastWeek: 7,
  },
  {
    type: "Exercise",
    hours: 4,
    lastWeek: 5,
  },
  {
    type: "Social",
    hours: 5,
    lastWeek: 10,
  },
  {
    type: "Self Care",
    hours: 2,
    lastWeek: 2,
  },
];

export default function App() {
  return (
    <div>
      <Tracker />
    </div>
  );
}

function Tracker() {
  return (
    <div>
      <Profile />
      <CardList />
    </div>
  );
}

function Profile() {
  return (
    <div>
      <UserInfo />
      <DatePreview />
    </div>
  );
}

function UserInfo() {
  return (
    <div>
      <img className="profileIcon" src={maleAvatar} alt="Avatar" />
      <p>Report for</p>
      <h3>Jeremy Robson</h3>
    </div>
  );
}

function DatePreview() {
  return (
    <ul>
      <li>Daily</li>
      <li>Weekly</li>
      <li>Monthly</li>
    </ul>
  );
}

function CardList() {
  return (
    <ul>
      {initialData.map((data) => (
        <Card data={data} key={data.type} />
      ))}
    </ul>
  );
}

function Card({ data }) {
  return (
    <li>
      <h3>{data.type}</h3>
      <p>{data.hours}</p>
      <p>{data.lastWeek}</p>
    </li>
  );
}
