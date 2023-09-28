export default function Button({ children, onClick, section, bright }) {
  return (
    <button
      className={`button ${section === children ? "active" : ""} ${
        bright && "buttonBright"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
