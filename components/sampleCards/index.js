import Image from "next/image";
import styles from "./sampleCards.module.css";

export default function SampleCard({ image, title, subtitle }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt="sampleCardImage" width={332} height={432} className={styles.sampleCard} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}

  
  
  






 

