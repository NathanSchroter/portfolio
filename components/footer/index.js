import Github from "@/public/icons/GitHub.png";
import Instagram from "@/public/icons/instagram.png";
import Gmail from "@/public/icons/Gmail.png";
import Linkedin from "@/public/icons/Linkedin.png";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import Me from "@/public/logo.png";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>

        <div className={styles.logo}>
          <Image src={Me}/>
        </div>
       
      </div>
      <div className={styles.connect}>
          <p>Connect with me</p>
          <div className={styles.icons}>

              <Link  href={"https://github.com/NathanSchroter"} target='_blank'> <Image src={Github}/></Link>
              <Link  href={"https://www.instagram.com/nate.schroter/"} target='_blank'> <Image src={Instagram}/></Link>
              <Link  href={'mailto: Ndschroter@gmail.com'} target='_blank'> <Image src={Gmail}/></Link>
              <Link  href={"https://www.linkedin.com/in/nathan-schroter-bb8a982b1/"} target='_blank'> <Image src={Linkedin}/></Link>
          </div>
        </div>
      <div className={styles.middleSection}>
      <div className={styles.work}>
          <p>Areas of work</p>
          <ul>
            <li>Graphic Design</li>
            <li>UX/UI Design</li>
            <li>Front-end Development</li>
          </ul>
        </div>
      </div>

      <div className={styles.rightSection}>
        <h2>Nathan Schroter</h2>
        <p>Phone # 778-228-3356</p>
        <p>Richmond, B.C.</p>
        
       </div>
    </footer>
  );
}
