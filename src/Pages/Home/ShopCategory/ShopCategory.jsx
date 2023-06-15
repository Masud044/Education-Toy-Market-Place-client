import { useState } from "react";
import useAllToy from "../../../Hook/useAllToy";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCategory from "./ToyCategory";

const ShopCategory = () => {

    const [allToy] = useAllToy();

    const MathToy = allToy.filter(item => item.subcategory === 'MathToy');
    const LanguageToy = allToy.filter(item => item.subcategory === 'LanguageToy');
    const EngineerToy = allToy.filter(item => item.subcategory === 'EngineerToy');

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <h1 className="text-center font-bold text-fuchsia-800 text-3xl mb-8 mt-8">Shop Category</h1>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>MathToy</Tab>
                    <Tab>LanguageToy</Tab>
                    <Tab>EngineerToy</Tab>
                </TabList>
                <TabPanel>
                    <div className="md:flex justify-center items-center mt-4 gap-8">
                    {
                        MathToy.slice(0,3).map(item=> <ToyCategory key={item._id}
                             item={item}
                             ></ToyCategory>)
                    }
                    </div>
                   
                
                </TabPanel>
                <TabPanel>
                <div className="md:flex justify-center items-center mt-4 gap-8">
                    {
                        LanguageToy.slice(0,3).map(item=> <ToyCategory key={item._id}
                             item={item}
                             ></ToyCategory>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="md:flex justify-center items-center mt-4 gap-8">
                    {
                        EngineerToy.slice(0,3).map(item=> <ToyCategory key={item._id}
                             item={item}
                             ></ToyCategory>)
                    }
                    </div>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default ShopCategory;