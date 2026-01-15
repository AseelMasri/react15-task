import styles from "./about.module.css";

export default function About() {
  return (
    <section className={`${styles.about} py-5 mt-3 mb-3`} id="about">
      <div className="container text-center">
        <h2 className={`text-uppercase fw-bold mb-2 ${styles.heading}`}>About</h2>

        <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
          <span className={styles.line} />
          <span className={styles.icon}><i className="fa-solid fa-star" /></span>
          <span className={styles.line} />
        </div>

        <div className="row justify-content-center g-4">
          <div className="col-11 col-md-5">
            <p className="fw-light opacity-95 lh-lg text-md-start m-0">
              Freelancer is a free bootstrap theme created by Start Bootstrap. The
              download includes the complete source files including HTML, CSS, and
              JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-11 col-md-5">
            <p className="fw-light opacity-95 lh-lg text-md-start m-0">
              You can create your own custom avatar for the masthead, change the icon
              in the dividers, and add your email address to the contact form to make
              it fully functional!
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="#" className={`btn btn-outline-light fw-bold ${styles.btnLetter}`}>
            <i className="fa-solid fa-download me-2" />
            Free Download!
          </a>
        </div>
      </div>
    </section>
  );
}