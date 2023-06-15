
import './Extrasection.css'


import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const ExtraSection = () => {

    useEffect(()=>{
        Aos.init({duration:3000});
    },[])
    return (
        <div >
              <h1 className=" text-center font-bold text-fuchsia-800 text-3xl mb-8 mt-8" data-aos="zoom-in">Our Blog</h1>

              <p className='text-center font-bold text-fuchsia-400  mb-8 mt-8' data-aos="fade-up-right">We discover the secret to perfectly developed <br /> children and family/work life balance. Well no not really. <br /> We just have a good time trying and making friends.</p>
           

              <div className=" image-item bg-fixed text-white pt-8 my-20" data-aos="zoom-in">
            <div className="md:flex justify-center items-center bg-fuchsia-500 bg-opacity-50 pb-20 pt-12 px-36">
                <div>
                    <img className='h-80 w-100'  src="https://i.ibb.co/z4TGcBn/images-9.jpg" alt="" />
                </div>
                <div className="md:ml-10">
                  
                   
                    <p className='font-semibold text-2xl text-white'>Home of Learning Fun for Every Age and Stage! <br />  Building someone amazing? <br /> Discover even more ways to give your kids <br />
                     the building blocks they need to succeed with our free tips and <br /> tools written by experts, teachers, and parents just like you!</p>
                   
                </div>
            </div>
        </div>
          

             

        </div>
    );
};

export default ExtraSection;