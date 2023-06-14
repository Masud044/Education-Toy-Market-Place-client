import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const NavBar = () => {
   
      const {user,logOut}=useContext(AuthContext);
      console.log(user?.displayName,user?.photoURL)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>

    <li className="font-medium"><Link to='/'>Home</Link> </li>
    <li className="font-medium"><Link to='/alltoys'>All Toys</Link> </li>
    <li className="font-medium"><Link to='/addtoy'>Add Toy</Link> </li>
   

    



</>
    return (
        <div className="container mx-auto">

        <div className="navbar z-10 bg-opacity-30 max-w-screen-xl  bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  text-black rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <img className="h-10 font-extrabold" src="https://i.ibb.co/172yv0h/logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end ">
            {
                        user && <div className='mr-2'>

                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>

                                <img className='rounded-full w-10 h-9' src={user?.photoURL} alt="" />
                            </div>

                        </div>

                    }

                {
                     
                        user ? <>
                            <button onClick={handleLogOut} className="btn  bg-fuchsia-800 text-white">LogOut</button>
                        </> : <>
                             <Link to='/login'><button className="btn bg-fuchsia-800 text-white">Login</button></Link>
                        </>
                    

                }
           
              
                     </div>
            </div>
        </div>

   

    );
};

export default NavBar;