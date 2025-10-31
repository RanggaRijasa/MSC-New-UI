import { NavLink, useLocation } from "react-router-dom";
import { FaBell } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand">
          <div className="brand-icon">M</div>
          <div>
            <div style={{ fontSize: "0.9rem" }}>MSC BODY</div>
            <div style={{ fontSize: "0.6rem", opacity: 0.6 }}>
              POWER • MUSCLE • NUTRITION
            </div>
          </div>
        </div>

        <nav className="nav-links">
          <NavLink
            to="/"
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            HOME
          </NavLink>
          <NavLink
            to="/challenges"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            CHALLENGES
          </NavLink>
          <NavLink
            to="/tentang-kami"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            TENTANG KAMI
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            FAQ
          </NavLink>
        </nav>

        <div className="nav-actions">
          <button className="btn-outline" onClick={() => (window.location = "/profil")}>
            Profil
          </button>
          <button className="btn-primary" onClick={() => (window.location = "/challenges")}>
            Join Challenge
          </button>
          <FaBell style={{ color: "#ffc62a", fontSize: "1.1rem" }} />
        </div>
      </div>
    </header>
  );
}
