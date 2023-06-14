import { Helmet } from "react-helmet-async";

import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'

import { useContext} from 'react';
import { AuthContext } from "../../Provider/AuthProvider";
import GoogleLogin from "../../Shared/GoogleLogin/GoogleLogin";



const Login = () => {

     const { signIn } =  useContext(AuthContext);
   
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

   
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }
    

    return (
        <div>
              <Helmet><title>Eduvalt| login</title></Helmet>
             
              <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center  lg:text-left">
                        <h1 className="text-5xl font-bold">Login now</h1>
                     
                    </div>
                    <div className="card pb-6 shadow-2xl bg-base-100">
                    <GoogleLogin></GoogleLogin>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                             
                                 <input   type="password" name="password"   placeholder="password" className="input input-bordered"   />
                               
                               
                               
                            </div>
                           
                            <div className="form-control mt-6">
                                <input  className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center font-medium text-2xl"><small >New Here? <Link className="text-fuchsia-700 font-bold" to="/signup">Create an account</Link> </small></p>
                      
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;