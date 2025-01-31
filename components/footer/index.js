
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        {/* TODO: Import and add your logo image here */}
        <div className={styles.logo}></div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.connect}>
          <p>Connect with me</p>
          <div className={styles.icons}>
            {/* TODO: Replace '#' with actual links */}
            <a href="#" aria-label="Email">✉️</a>
            <a href="#" aria-label="LinkedIn">🔗</a>
            <a href="#" aria-label="GitHub">🐙</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>

        <div className={styles.work}>
          <p>Areas of work</p>
          <ul>
            <li>Graphic Design</li>
            <li>UX/UI Design</li>
            <li>Front-end Development</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
