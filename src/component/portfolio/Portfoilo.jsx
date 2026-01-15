import styles from "./portfolio.module.css";

import imgCabin      from "../../assets/images/protfoilo/cabin.png";
import imgCake       from "../../assets/images/protfoilo/cake.png";
import imgCircus     from "../../assets/images/protfoilo/circus.png";
import imgGame       from "../../assets/images/protfoilo/game.png";
import imgSafe       from "../../assets/images/protfoilo/safe.png";
import imgSubmarine  from "../../assets/images/protfoilo/submarine.png";

const ITEMS = [
  { id: 1, img: imgCabin,     alt: "Log Cabin",   bg: "#be4e60" },
  { id: 2, img: imgCake,      alt: "Tasty Cake",  bg: "#16a2b8" },
  { id: 3, img: imgCircus,    alt: "Circus Tent", bg: "#161616" },
  { id: 4, img: imgGame,      alt: "Controller",  bg: "#0d86cf" },
  { id: 5, img: imgSafe,      alt: "Locked Safe", bg: "#0a3ec6" },
  { id: 6, img: imgSubmarine, alt: "Submarine",   bg: "#d1b1a3" },
];

export default function Portfoilo() {
  return (
    <section className={`py-5 ${styles.section}`} id="portfolio">
      <div className="container">
        <h2 className={`text-uppercase text-center fw-bold mb-2 ${styles.heading}`}>
          Portfolio
        </h2>
        <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
          <span className={styles.line} />
          <span className={styles.icon}><i className="fa-solid fa-star" /></span>
          <span className={styles.line} />
        </div>

        <div className="row g-4 justify-content-center">
          {ITEMS.map((it) => (
            <div className="col-10 col-sm-6 col-md-4" key={it.id}>
              <div
                className={`${styles.card} shadow-sm`}
                style={{ backgroundColor: it.bg }}
              >
                <img src={it.img} alt={it.alt} className="img-fluid d-block w-100 h-100" />

                <button
                  type="button"
                  className={styles.overlay}
                  aria-label={`Open ${it.alt}`}
                >
                  <i className="fa-solid fa-plus fa-3x" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
