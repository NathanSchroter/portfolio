import Link from 'next/link';
import styles from "@/styles/Home.module.css";
import Image from 'next/image';
import Me from "@/public/me.png";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Left Card + Skills */}
      <div className={styles.leftSection}>
        <div className={styles.leftCard}>
          <Image src={Me} alt="Profile Picture" width={250} height={300} className={styles.profileImage} />
          <p>Passionate about creating and designing websites with the best engaging interfaces.</p>
          <Link href="/Nathan_Schroter_CV.pdf" download className={styles.downloadButton}>
            Download CV
          </Link>
        </div>
        <div className={styles.skillsCard}>
          <h3>Skills</h3>
          <div className={styles.skillsIcons}>
            {['AE', 'ID', 'css', 'Figma', 'HTML', 'AI', 'JS', 'PS', 'React'].map(icon => (
              <Image key={icon} src={`/icons/${icon}.png`} alt={icon} width={40} height={40} className={styles.skillIcon} />
            ))}
          </div>
          <p>Visit the projects section to see the work done with these web technologies.</p>
        </div>
      </div>

      {/* Main Profile Section */}
      <div className={styles.mainProfile}>
        <Image src={Me} alt="Main Profile" width={500} height={600} className={styles.mainImage} />
        <div className={styles.overlay}>
          <h1 className={styles.name}>Nathan Schroter</h1>
          <div className={styles.buttons}>
            <Link href="/projects" className={styles.projectButton}>Projects</Link>
            <Link href="/expericence" className={styles.serviceButton}>Experiences</Link>
          </div>
        </div>
      </div>

      {/* Right Info Card */}
      <div className={styles.rightCard}>
        <h3>Nathan Schroter - <span className={styles.highlight}>Web Designer & Developer</span></h3>
        <p>Located in [Your Location], I have several years of experience in web development and design, carrying out successful projects.</p>
        <div className={styles.socialIcons}>
          <Link href="https://www.linkedin.com/in/nathan-schroter-bb8a982b1/?trk=public-profile-join-page" className={styles.icon}>🔗</Link>
          <Link href="https://github.com/NathanSchroter" className={styles.icon}>💻</Link>
          <Link href="https://behance.net" className={styles.icon}>🎨</Link>
        </div>
        <Image src={Me} alt="Small Profile Image" width={150} height={180} className={styles.smallProfile} />
        <p className={styles.contactText}>I don’t write messages on social networks. Send me an email and I’ll answer you.</p>
        <Link href="/contact" className={styles.contactButton}>Contact Me</Link>
      </div>
    </div>
  );
}







