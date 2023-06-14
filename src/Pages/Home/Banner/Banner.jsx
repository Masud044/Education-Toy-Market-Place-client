

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px] ">
        <div id="slide1" className="carousel-item relative w-full">
             <img src="https://i.ibb.co/ZGsFtjq/tomas-petz-O8eo2-BC1-SOI-unsplash.jpg" alt="" className="w-full" />
          
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                
                <a href="#slide3" className="btn btn-circle  bg-fuchsia-800">❮</a>
                <div>
                    <h1 className="animate__animated animate__backInLeft font-semibold text-3xl text-white mb-4">Our best <br /> Gym Fitness <span className="text-fuchsia-800 ">with Your Body</span> </h1>
                    <div className="md:space-x-8 space-x-2 ">
                        <button className="btn ease-in duration-300 bg-fuchsia-800 text-white">Get started</button>
                        <button className="btn ease-in duration-300  btn-outline text-black">Contact us</button>
                    </div>
                </div>
                <a href="#slide2" className="btn btn-circle bg-fuchsia-800">❯</a>
               
            </div>
           
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/WVXRLc8/markus-spiske-0-Fd-b-RYys-T4-unsplash.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle  bg-fuchsia-800">❮</a>
                <div>
                    <h1 className=" animate__animated animate__backInRight font-semibold text-3xl text-white mb-4">Stronger & Stronger <br /> Gym Fitness <span className="text-fuchsia-800 ">Everyday</span> </h1>
                    <div className="md:space-x-8 space-x-2">
                        <button className="btn transition delay-150 duration-300 ease-in-out bg-fuchsia-800 text-white">Get started</button>
                        <button className="btn  btn-outline text-white">Contact us</button>
                    </div>
                </div>
                <a href="#slide3" className="btn btn-circle  bg-fuchsia-800">❯</a>
            </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/KjgyWq9/kelly-sikkema-Z9-AU36chm-QI-unsplash.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle  bg-fuchsia-800">❮</a>
                <div>
                    <h1 className="animate__animated animate__backInDown font-semibold text-3xl text-white mb-4">Is Enough <br /> To Keep <span className="text-fuchsia-800 ">Your Fitness Level</span> </h1>
                    <div className="md:space-x-8 space-x-2">
                        <button className="btn bg-fuchsia-800 text-white">Get started</button>
                        <button className="btn  btn-outline text-white">Contact us</button>
                    </div>
                </div>
                <a href="#slide1" className="btn btn-circle  bg-fuchsia-800">❯</a>
            </div>
        </div>
    </div>
    );
};

export default Banner;