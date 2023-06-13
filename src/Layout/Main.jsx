import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBer/NavBar";
import Footar from "../Shared/Footar/Footar";


const Main = () => {
    return (
        <div>
             <NavBar></NavBar>
             <Outlet></Outlet>
             <Footar></Footar>
        </div>
    );
};

export default Main;