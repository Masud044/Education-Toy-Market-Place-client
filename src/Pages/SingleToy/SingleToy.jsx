import {  useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'




const SingleToy = () => {
   
    const { id } = useParams();
   
    
   
    
    const [singleToy, setSingle] = useState([]);
    const [loading, setLoading] = useState(true);
    

     
    useEffect(() => {
        fetch(`http://localhost:5000/AllToy/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingle(data);
                setLoading(false)
            })
    }, [singleToy,loading,id])

   
   


    return (
        <div className="mt-20 mb-20">
            <div className="card lg:card-side bg-fuchsia-300 shadow-2xl">
                <figure><img src={singleToy.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Toy Name:{singleToy.toyName}</h2>
                    <p>Details: {singleToy.description}</p>
                    <p>Seller Name: {singleToy.sellerName}</p>
                    <p>sellerEmail : {singleToy.sellerEmail}</p>
                    <p className="font-bold ">Price:${singleToy.price}</p>
                    <p>Available Quantity: {singleToy.quantity}</p>
                    <p>
                    <Rating
                                style={{ maxWidth: 140 }}
                                value={singleToy.rating}
                                readOnly
                            />
                    </p>
                   
                </div>
            </div>
        </div>
    );
};

export default SingleToy;