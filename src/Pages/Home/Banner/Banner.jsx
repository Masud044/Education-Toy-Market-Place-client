

const Banner = () => {
    return (
        <div className="carousel  w-full h-[500px] ">
            <div id="slide1" className="carousel-item relative  w-full">
                <img src="https://i.ibb.co/ZGsFtjq/tomas-petz-O8eo2-BC1-SOI-unsplash.jpg" alt="" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">


                    <a href="#slide3" className="btn btn-circle  bg-fuchsia-800">❮</a>
                    <div>
                        <h1 className=" font-semibold text-3xl text-white mb-4 justify-start">Educational toys<span className="text-fuchsia-800 ">  are objects of play, generally  <br />  designed for children, which are expected to stimulate learning.</span> </h1>

                    </div>
                    <a href="#slide2" className="btn btn-circle bg-fuchsia-800">❯</a>

                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/WVXRLc8/markus-spiske-0-Fd-b-RYys-T4-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle  bg-fuchsia-800">❮</a>
                   
                    <a href="#slide3" className="btn btn-circle  bg-fuchsia-800">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/KjgyWq9/kelly-sikkema-Z9-AU36chm-QI-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle  bg-fuchsia-800">❮</a>
                   
                    <a href="#slide1" className="btn btn-circle  bg-fuchsia-800">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;