import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
       
        navigate(from, { replace: true });
    })
}
    return (
      
     
        <div className="w-full text-center my-4">
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline ">
                <FcGoogle className="text-3xl"></FcGoogle>
            </button>
      
    </div>
    );
};

export default GoogleLogin;