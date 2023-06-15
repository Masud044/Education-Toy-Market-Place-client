import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import {Slide } from "react-awesome-reveal";


const ToyCategory = ({item}) => {
    const {image,toyName,price,rating,_id}=item
    return (
         <Slide>
         <div className="card w-96 bg-fuchsia-300 p-4 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
       
          <h2 className="card-title text-2xl">{toyName}</h2>
          <p>
          <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            />
          </p>
          <p className='font-semibold'>price: ${price}</p>
          
          <div className="card-actions justify-center">
          <Link to={`/singletoy/${_id}`}> <button className="btn bg-fuchsia-800 text-white">View details </button></Link>
          </div>
        </div>
      </div>
         </Slide>
       
    );
};

export default ToyCategory;