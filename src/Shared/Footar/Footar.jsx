

const Footar = () => {
    return (
        <footer className="bg-fuchsia-400">
        <div className="footer p-10  text-base-content">
            <div>
                <img src="https://i.ibb.co/172yv0h/logo.png" alt="" />

            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
           
            
        </div>
        <div className="footer footer-center p-4 ">
        <div>
            <p className="font-medium">Copyright © 2023 - All right reserved by Eduvalt</p>
        </div>
    </div>
            
        </footer>
    );
};

export default Footar;