import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const { handleDarkMode, dark } = props;

  return (
    <header style={{ background: dark ? "hsl(209, 23%, 22%)" : "#fff" }}>
      <nav
        style={{
          background: dark ? "hsl(209, 23%, 22%)" : "#fff",
          color: dark ? "#fff" : "hsl(200, 15%, 8%)",
        }}
      >
        <h2>Where in the world?</h2>
        <div className="dark-mode" onClick={handleDarkMode}>
          <FontAwesomeIcon icon={faMoon} />
          <h4>Dark Mode</h4>
        </div>
      </nav>
    </header>
  );
}

export default Header;
