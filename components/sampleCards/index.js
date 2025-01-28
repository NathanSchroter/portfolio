import Image from "next/image";
import styles from "./sampleCards.module.css"

export default function SampleCard({image}) {
   
  
    return (
        <Image
        src={image}
        alt='sampleCardImage'
        width={362}
        height={464}
        className={styles.sampleCard}
    />
    );
  };
  
  
  
  






 

