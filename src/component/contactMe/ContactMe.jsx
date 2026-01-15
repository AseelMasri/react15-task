import styles from "./contactMe.module.css";

export default function ContactMe() {
  return (
    <section id="contact" className="section-pad">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">CONTACT ME</h2>

        <div className={styles.divider}>
          <span></span>
          <i className="fa-solid fa-star"></i>
          <span></span>
        </div>

        <form className={`${styles.form} mx-auto mt-5`}>
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone number"
            />
          </div>

          <div className="mb-4">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>

          <button type="submit" className={`btn px-5 py-4 btn-lg ${styles.btnSend}`}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
