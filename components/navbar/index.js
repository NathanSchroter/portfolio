import Link from "next/link";
import { useRouter } from "next/router";
import  styles from"./header.module.css";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        {["Home", "About", "Projects"].map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = router.pathname === path;

          return (
            <li key={item}>
              <Link href={path}>
                <span className={isActive ? "active" : ""}>{item}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}




