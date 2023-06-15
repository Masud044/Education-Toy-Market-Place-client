import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import ShopCategory from "../ShopCategory/ShopCategory";
import ExtraCategory from "../ExtraCategory/ExtraCategory";
import ExtraSection from "../ExtraSection/ExtraSection";



const Home = () => {
    return (
        <div>
             <Helmet>
               <title>  Educational Toys|Home  </title>
              </Helmet>
              <Banner></Banner>
              <Gallary></Gallary>
              <ShopCategory></ShopCategory>
              <ExtraCategory></ExtraCategory>
              <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;