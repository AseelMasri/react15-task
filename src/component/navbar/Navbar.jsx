import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.nav}`}>
      <div className="container">

        {/* Logo */}
        <a className={`navbar-brand ${styles.brand}`} href="#home">
          Start Bootstrap
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto gap-4">

            <li className="nav-item">
              <a
                className={`nav-link text-uppercase fw-bold ${styles.link}`}
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link text-uppercase fw-bold ${styles.link}`}
                href="#about"
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link text-uppercase fw-bold ${styles.link}`}
                href="#contact"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}