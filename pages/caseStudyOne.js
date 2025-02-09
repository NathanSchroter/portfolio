import OnceOne from "@/public/onceOne.png"
import OnceTwo from "@/public/onceTwo.png"
import OnceThree from "@/public/onceThree.png"
import OnceFour from "@/public/onceFour.png"
import Image from "next/image"

import React from 'react';
import styles from '../styles/caseStudyOne.module.css';
import Footer from "@/components/footer"

const CulturalRecipeApp = () => {
  return (
    <>
   
    <div className={styles.container}>
    <div className={styles.sectionOne}>
    <section className={styles.introduction}>
        <h1>Case Study: Cultural Social Media App for Global Recipes</h1>
        <p>
          This project was designed to be a cultural social media app where people can display, share, and teach unique cultural recipes to people around the world.
        </p>
      </section>
      <Image src={OnceOne} alt="photo one"/>
    </div>
      <section className={styles.problemStatement}>
        <h2>Problem Statement</h2>
        <p>
          The problem we tried to solve was the monotony and unhealthiness of everyday meals. Many people tend to eat the same familiar foods repeatedly, missing out on the opportunity to discover new and exciting dishes.
        </p>
      </section>
      <Image src={OnceThree} alt="photo one"/>
   <div className={styles.sectionOne}>
      <section className={styles.approach}>
        <h2>Approach & Methodology</h2>
        <ul>
          <li>Research & Ideation: Uploading posts and videos to teach these dishes.</li>
          <li>Wireframing & Design: User-friendly UI/UX for seamless navigation.</li>
          <li>Technology Stack: React Native frontend, local cloud storage backend.</li>
          <li>Social Features: Liking, commenting, sharing, saving, and following.</li>
          <li>Tutorial & Video Support: Step-by-step guides and video tutorials.</li>
        </ul>
      </section>
      <Image src={OnceTwo} alt="photo one"/>
    </div> 
      <section className={styles.execution}>
        <h2>Execution & Implementation</h2>
        <p>
          The project followed phases including planning, design, development, testing, and deployment. We created an interactive prototype and conducted user testing to refine features.
        </p>
      </section>
      <Image src={OnceFour} alt="photo one"/>
      <section className={styles.results}>
        <h2>Results & Impact</h2>
        <ul>
          <li>Users appreciated discovering new dishes.</li>
          <li>Increased cultural awareness through food.</li>
          <li>Interactive experience with engaging tutorials.</li>
        </ul>
      </section>
 
      <section className={styles.lessons}>
        <h2>Lessons Learned</h2>
        <p>What Worked Well:</p>
        <ul>
          <li>Social media-style interface boosted engagement.</li>
          <li>Video tutorials improved user experience.</li>
          <li>Backend performance was smooth.</li>
        </ul>
        <p>What Could Be Improved:</p>
        <ul>
          <li>Diverse recipe contributions.</li>
          <li>Better search and filtering options.</li>
          <li>AI-based personalized food suggestions.</li>
        </ul>
      </section>
      <section className={styles.conclusion}>
        <h2>Conclusion</h2>
        <p>
          This project successfully tackled food monotony by creating an engaging and educational platform for discovering global cuisines. The platform has the potential to grow into a widely used culinary resource.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default CulturalRecipeApp;