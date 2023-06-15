import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddToy from "../Pages/AddToys/AddToy";
import AllToy from "../Pages/AllToy/AllToy";
import MyToy from "../Pages/MyToy/MyToy";
import SingleToy from "../Pages/SingleToy/SingleToy";
import UpdateToy from "../Pages/MyToy/UpdateToy";
import Blog from "../Pages/Blog/Blog";
import NotFound from "../Pages/NotFound/NotFound";

export const router = createBrowserRouter([
   {
       path:'*',
       element:<NotFound></NotFound>
   },
    
     {
       path: "/",
       element: <Main></Main>,
       children:[
         {
             path:'/',
             element:<Home></Home>
         },
         {
               path:'addtoy',
               element:<AddToy></AddToy>

         },
         {
             path:'alltoy',
             element:<AllToy></AllToy>
         },
         {
            path:'mytoy',
            element:<MyToy></MyToy>
         },
         {
            path:'singletoy/:id',
            element:<SingleToy></SingleToy>
         },
         {
            path:'updatetoy/:id',
            element:<UpdateToy></UpdateToy>
         },
         {
            path:'blog',
            element:<Blog></Blog>
         },
         {
            path:'login',
            element:<Login></Login>,
         },
         {
            path:'signup',
            element:<SignUp></SignUp>

         }

        ]
     }
 ]);