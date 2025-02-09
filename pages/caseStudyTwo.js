import bookOne from "@/public/bookOne.png"
import bookTwo from "@/public/bookTwo.png"
import bookThree from "@/public/bookThree.png"
import bookFour from "@/public/bookFour.png"
import Image from "next/image"

import React from 'react';
import styles from '../styles/caseStudyOne.module.css';
import Footer from "@/components/footer"

const Bookstore = () => {
  return (
    <>
    
    <div className={styles.container}>
    <div className={styles.sectionOne}>
    <section className={styles.introduction}>
        <h1>Case Study: Implementing Filters in Next.js for Book Sorting</h1>
        <p>
          This project was a learning experience in applying filters in Next.js and understanding their usefulness in web applications. The goal was to implement a filtering system for a book list, allowing users to sort books based on category, author, alphabetical order, and edition.
        </p>
        <p>
          By working on this project, we gained valuable insights into building dynamic filtering systems, which are essential in modern web development to enhance user experience and improve search functionalities.
        </p>
      </section>
      <Image src={bookOne} alt="photo one"/>
    </div>
      <section className={styles.problemStatement}>
        <h2>Problem Statement</h2>
        <p>
          One of the biggest challenges faced during this project was implementing alphabetical sorting A-Z and Z-A for the book list. Sorting data efficiently while maintaining performance and responsiveness was a key obstacle.
        </p>
        <p>
          This project was essential because filtering systems are widely used in real world web pages, particularly in e-commerce, libraries, and search pages. Companies rely on filtering to help users navigate large datasets effectively, making this a crucial skill for any developer.
        </p>
      </section>
      <Image src={bookThree} alt="photo one"/>
   <div className={styles.sectionOne}>
      <section className={styles.approach}>
        <h2>Approach & Methodology</h2>
        <ul>
          <li>Research & Learning: Studied Next.js filtering methods, JavaScript sorting functions, and efficient state management.</li>
          <li>Frameworks & Tools Used:
            <ul>
              <li>Next.js for server-side rendering and efficient page loading.</li>
              <li>Data: We mapped all the data in a component then used useState and useEffect with the .sort method to filter.</li>
              <li>JavaScript Sorting Functions for arranging books alphabetically and by edition.</li>
            </ul>
          </li>
          <li>Development Steps:
            <ul>
              <li>Implemented basic filters for category and author selection.</li>
              <li>Worked on sorting logic for alphabetical order (A-Z and Z-A).</li>
              <li>Optimized performance by reducing unnecessary re-renders.</li>
              <li>Tested the filtering system for accuracy and usability.</li>
            </ul>
          </li>
        </ul>
      </section>
      <Image src={bookTwo} alt="photo one"/>
    </div> 
      <section className={styles.execution}>
        <h2>Execution & Implementation</h2>
        <p>
          Development Phases:
        </p>
        <ul>
          <li>Initial setup and data retrieval for book listings.</li>
          <li>Implementing category and author filters.</li>
          <li>Writing and testing sorting functions for alphabetical order and editions.</li>
          <li>Optimizing filter performance for seamless user interaction.</li>
          <li>Creating the navbar and footer.</li>
          <li>Making side nav bar to sort through the books by categories.</li>
        </ul>
        <p>
          Challenges & Solutions:
        </p>
        <ul>
          <li>Sorting Logic Issues: Initially, the alphabetical sorting didn’t work as expected. By leveraging JavaScript’s sorting function, the issue was resolved.</li>
          <li>Performance Optimization: Filtering large lists caused slow performance, which was improved using memoization and efficient state updates.</li>
          <li>User Interface Enhancements: Added dropdowns and buttons for a cleaner UI experience.</li>
        </ul>
      </section>
      <Image src={bookFour} alt="photo one"/>
      <section className={styles.results}>
        <h2>Results & Impact</h2>
        <ul>
          <li>Fully Functional Filtering System: Users could filter books by category, author, alphabetical order, and edition.</li>
          <li>Improved Performance: Optimized sorting functions ensured a smooth and responsive experience.</li>
          <li>Practical Application: The knowledge gained from this project can be applied to real-world applications in various industries.</li>
        </ul>
        <p>
          The project highlighted the importance of data manipulation, user experience, and performance optimization, which are all crucial for modern web applications.
        </p>
      </section>
 
      <section className={styles.lessons}>
        <h2>Lessons Learned</h2>
        <p>What Worked Well:</p>
        <ul>
          <li>Several filters were successfully built with effective state management.</li>
          <li>Enhanced comprehension of JavaScript sorting features.</li>
          <li>Improved user experience with enhanced filtering performance.</li>
        </ul>
        <p>What Could Be Made Better:</p>
        <ul>
          <li>Including search capabilities to improve the user experience even further.</li>
          <li>Styling the books better to improve readability.</li>
          <li>Adding an onClick feature for books to display more detailed descriptions.</li>
        </ul>
      </section>
      <section className={styles.conclusion}>
        <h2>Conclusion</h2>
        <p>
          This project reinforced important abilities in sorting algorithms, state management, and performance optimization while offering invaluable practical experience in creating filtering systems in Next.js.
        </p>
        <p>
          Many apps require filtering, and understanding this idea will improve user efficiency and usability. The difficulties encountered and resolved during this project will provide a solid basis for adding even more features in subsequent initiatives.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Bookstore;
