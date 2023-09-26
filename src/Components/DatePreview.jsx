import Button from "./Button";

export default function DatePreview({ onSectionChange, section }) {
  return (
    <ul className="datePreview">
      <li>
        <Button section={section} onClick={onSectionChange}>
          New Activity
        </Button>
      </li>
      <li>
        <Button section={section} onClick={onSectionChange}>
          Breakdown
        </Button>
      </li>
      <li>
        <Button section={section} onClick={onSectionChange}>
          Summary
        </Button>
      </li>
    </ul>
  );
}
