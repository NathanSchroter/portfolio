import Navbar from "@/components/navbar";
import SampleCard from "@/components/sampleCards";

export default function Navigation() {

    return (
      <div>
       <Navbar></Navbar>
       <h2>About Me</h2>
       <SampleCard/>
       <h2>Contact</h2>
       <SampleCard/>
       <h2>Home</h2>
       <SampleCard/>
       <h2>Projects</h2>
       <SampleCard/>
         {/* <Footer />  */}
      </div>
    );
  }
  
  
  
  
  
  