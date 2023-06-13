import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import ShopCategory from "../ShopCategory/ShopCategory";



const Home = () => {
    return (
        <div>
             <Helmet>
               <title>  Educational Toys|Home  </title>
              </Helmet>
              <Banner></Banner>
              <Gallary></Gallary>
              <ShopCategory></ShopCategory>
        </div>
    );
};

export default Home;