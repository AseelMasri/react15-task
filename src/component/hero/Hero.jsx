import avatar from "../../assets/images/avatar.svg";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <header className={`${styles.masthead} text-white text-center`}>
      <div className="container d-flex flex-column align-items-center">
        <img
          src={avatar}
          alt="Avatar"
          className={`rounded-circle mb-4 ${styles.avatar}`}
        />

        <h1 className={`text-uppercase fw-bold m-0 ${styles.title}`}>
          Start Bootstrap
        </h1>

        <div className="d-flex align-items-center justify-content-center gap-3 my-4">
          <span className={styles.line} />
          <span className={styles.icon}><i className="fa-solid fa-star" /></span>
          <span className={styles.line} />
        </div>

        <p className="fw-light mb-0 opacity-75">
          Graphic Artist · Web Designer · Illustrator
        </p>
      </div>
    </header>
  );
}