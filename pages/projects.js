import styles from "@/styles/projects.module.css";
import SampleCard from "@/components/sampleCards";
import Canucks from "@/public/Canucks.png";
import Footer from "@/components/footer"

export default function Projects() {
    return(
        <>
        <div className={styles.mainContainer}>
        <SampleCard 
          image={Canucks} 
          title="Vancouver Canucks" 
          subtitle="Graphic Design"/>
               <SampleCard 
          image={Canucks} 
          title="Vancouver Canucks" 
          subtitle="Graphic Design"/>
               <SampleCard 
          image={Canucks} 
          title="Vancouver Canucks" 
          subtitle="Graphic Design"/>
               <SampleCard 
          image={Canucks} 
          title="Vancouver Canucks" 
          subtitle="Graphic Design"/>
               <SampleCard 
          image={Canucks} 
          title="Vancouver Canucks" 
          subtitle="Graphic Design"/>
               <SampleCard 
          image={Canucks} 
          title="Vancouver Canucks" 
          subtitle="Graphic Design"/>
        </div>
        <Footer/>
        </>
    )
}
