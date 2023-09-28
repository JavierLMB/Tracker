import { useState } from "react";
import maleAvatar from "../images/maleAvatar.svg";
import femaleAvatar from "../images/femaleAvatar.svg";
import Button from "./Button";
import presetObj from "./presetObj";

export default function UserSetup({ onUser, onActivities }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const newUser = {
      firstName: capitalizeFirstLetter(firstName),
      lastName: capitalizeFirstLetter(lastName),
      gender,
    };

    const userPreset =
      firstName === "preset" && lastName === "preset" && gender === "male"
        ? {
            firstName: "Jeremy",
            lastName: "Cooper",
            gender,
          }
        : false;

    userPreset && onActivities(presetObj);
    onUser(userPreset || newUser);
  };

  return (
    <form className="userSection" onSubmit={handleSubmit}>
      <h2>Welcome to Tracker!</h2>

      <div className="genderChoice">
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          <img className="profileIcon" src={maleAvatar} alt="Avatar" />
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          <img className="profileIcon" src={femaleAvatar} alt="Avatar" />
        </label>
      </div>

      <div className="newUserLabel">
        <label>First Name</label>
        <input
          maxLength="15"
          required
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="newUserLabel">
        <label>Last Name</label>
        <input
          maxLength="15"
          required
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <Button bright={true}>Continue</Button>
    </form>
  );
}
