import Me from "@/public/me.png";
import OnceUponAMeal from "@/public/onceOne.png";
import UNA from "@/public/UNA.png";
import bookOne from "@/public/bookFour.png"
import Bookstore from "@/public/Bookstore.png";
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/caseStudyOne');
  };
  const handleNavigationTwo = () => {
    router.push('/caseStudyTwo')
  }
  const handleNavigationThree = () => {
    router.push('/caseStudyThree')
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Nathan is a designer and Graphic Designer who loves to craft great projects.</h1>
            <p className={styles.subtitle}>
              I do digital design, brand design, and Motion graphics.<br />
              Currently, I am a student at <span className={styles.highlight}>BCIT</span>.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src={Me.src} alt="Nathan" className={styles.profileImage} />
          </div>
        </div>

        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>DESIGNING Once Upon a Meal</h2>
          <p className={styles.caseStudyText}>
            I've worked on all things digital but my focus now is on making sure the profile page works and the posting feeling is correct.
          </p>
          <div className={styles.caseStudyImageContainer}>
            <img src={OnceUponAMeal.src} alt="Case Study" className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={handleNavigation}>View Case Study</button>
        </div>

        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>DESIGNING UNA and Analysis</h2>
          <p className={styles.caseStudyText}>
            I've worked on all things digital but my focus now is on making sure the profile page works and the posting feeling is correct.
          </p>
          <div className={styles.caseStudyImageContainer}>
            <img src={bookOne.src} alt="Case Study" className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={handleNavigationTwo}>View Case Study</button>
        </div>

        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>Designing UNA</h2>
          <p className={styles.caseStudyText}>
            I've worked on all things digital but my focus now is on making sure the profile page works and the posting feeling is correct.
          </p>
          <div className={styles.caseStudyImageContainer}>
            <img src={UNA.src} alt="Case Study" className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={handleNavigationThree}>View Case Study</button>
        </div>
      </div>
      <Footer />
    </>
  );
}








