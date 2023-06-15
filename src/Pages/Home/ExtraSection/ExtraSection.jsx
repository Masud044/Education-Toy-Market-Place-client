
import './Extrasection.css'
import {Slide } from "react-awesome-reveal";
const ExtraSection = () => {
    return (
        <div>
              <h1 className="text-center font-bold text-fuchsia-800 text-3xl mb-8 mt-8">Our Blog</h1>
              <Slide>

              <div className="image-item bg-fixed text-white pt-8 my-20">
            <div className="md:flex justify-center items-center bg-fuchsia-500 bg-opacity-50 pb-20 pt-12 px-36">
                <div>
                    <img className='h-80 w-100'  src="https://i.ibb.co/z4TGcBn/images-9.jpg" alt="" />
                </div>
                <div className="md:ml-10">
                  
                   
                    <p className='font-semibold text-2xl text-fuchsia-950'>Home of Learning Fun for Every Age and Stage! <br />  Building someone amazing? <br /> Discover even more ways to give your kids <br />
                     the building blocks they need to succeed with our free tips and <br /> tools written by experts, teachers, and parents just like you!</p>
                   
                </div>
            </div>
        </div>
              </Slide>

             

        </div>
    );
};

export default ExtraSection;