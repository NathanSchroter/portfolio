import { useState } from 'react';
import Link from 'next/link';
import styles from "./header.module.css";

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.navIcons}>
        <Link href="/" legacyBehavior>
          <a className={`${styles.icon} ${active === 'home' ? styles.active : ''}`} onClick={() => setActive('home')}>
            <img src="/icons/home.png" alt="Home" />
          </a>
        </Link>
        <Link href="/projects" legacyBehavior>
          <a className={`${styles.icon} ${active === 'projects' ? styles.active : ''}`} onClick={() => setActive('projects')}>
            <img src="/icons/folder.png" alt="Projects" />
          </a>
        </Link>
        <Link href="/experiences" legacyBehavior>
          <a className={`${styles.icon} ${active === 'experiences' ? styles.active : ''}`} onClick={() => setActive('experiences')}>
            <img src="/icons/file.png" alt="Experiences" />
          </a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className={`${styles.icon} ${active === 'contact' ? styles.active : ''}`} onClick={() => setActive('contact')}>
            <img src="/icons/send.png" alt="Contact" />
          </a>
        </Link>
      </div>
    </nav>
  );
}



