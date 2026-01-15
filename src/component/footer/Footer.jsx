import styles from "./footer.module.css";

const SOCIALS = [
  { id: 1, name: "Facebook",  icon: "fa-facebook-f", href: "#" },
  { id: 2, name: "Twitter",   icon: "fa-twitter",    href: "#" },
  { id: 3, name: "LinkedIn",  icon: "fa-linkedin-in",href: "#" },
  { id: 4, name: "Dribbble",  icon: "fa-dribbble",   href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
 
      <div className={`${styles.top} py-5`}>
        <div className="container">
          <div className="row text-center gy-5">
            <div className="col-12 col-md-4">
              <h4 className={`text-uppercase fw-bold mb-3 ${styles.title}`}>Location</h4>
              <p className="mb-0 opacity-75 lh-lg">
                2215 John Daniel Drive<br />
                Clark, MO 65243
              </p>
            </div>

            <div className="col-12 col-md-4">
              <h4 className={`text-uppercase fw-bold mb-3 ${styles.title}`}>Around the Web</h4>
              <ul className="list-unstyled m-0 d-flex justify-content-center gap-3">
                {SOCIALS.map(({ id, name, icon, href }) => (
                  <li key={id}>
                    <a href={href} aria-label={name} className={styles.icon}>
                      <i className={`fa-brands ${icon} fa-fw`} aria-hidden="true" />
                      <span className="visually-hidden">{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-12 col-md-4">
              <h4 className={`text-uppercase fw-bold mb-3 ${styles.title}`}>About Freelancer</h4>
              <p className="mb-0 opacity-75 lh-lg">
                Freelance is a free to use, MIT licensed Bootstrap theme created by{" "}
                <a href="#" className={styles.link}>Start Bootstrap</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

     
      <div className={`${styles.bottom} py-3`}>
        <div className="container text-center">
          <p className="m-0">Copyright © Your Website {year}</p>
        </div>
      </div>
    </footer>
  );
}
