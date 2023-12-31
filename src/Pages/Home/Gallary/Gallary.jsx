
import { useEffect } from "react";

import Aos from 'aos'
import 'aos/dist/aos.css'
 
   
const Gallary = () => {

    useEffect(()=>{
        Aos.init({duration:2000});
    },[])

    return (
        <div>
               <h1 className="text-center font-bold text-fuchsia-800 text-3xl mb-8 mt-8">Our Gallary</h1>
            
                <div className="grid md:grid-cols-3 bg-fuchsia-200 gap-6 ">
                    {/* <Slide> */}
                    <img className="shadow-2xl " data-aos="fade-right" src="https://i.ibb.co/HzY9c33/set-geometry-shapes-other-school-items-1308-40947.jpg" alt="" />
                     <img className="shadow-2xl" data-aos="fade-left" src="https://i.ibb.co/gvckyDt/hand-drawn-montessori-toys-illustration-23-2149578618.jpg" alt="" />
                     <img className="shadow-2xl" data-aos="fade-up-right"  src="https://i.ibb.co/4Zs1RLK/hand-drawn-christmas-toy-collection-23-2148751363.jpg" alt="" />
                     <img className="shadow-2xl" data-aos="fade-right"  src="https://i.ibb.co/whBgdFg/flat-design-christmas-toy-set-23-2148355804.jpg" alt="" />
                     <img className="shadow-2xl" data-aos="fade-down-right"  src="https://i.ibb.co/ZBdVPqN/educational-toys-fine-motor-skills-montesori-childrens-toy-icon-isolated-white-background-you-98982.jpg" alt="" />
                     <img className="shadow-2xl" data-aos="fade-up-left"  src="https://i.ibb.co/XsgCqMh/dry-clay-geometric-shapes-vector-colorful-graphic-kids-53876-116998.jpg" alt="" />
              
                    {/* </Slide> */}
                    </div>
                   
        </div>
    );
};

export default Gallary;

