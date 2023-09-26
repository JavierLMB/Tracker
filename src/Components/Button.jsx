export default function Button({ children, onClick, section }) {
  return (
    <button
      className={`button ${section === children ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
