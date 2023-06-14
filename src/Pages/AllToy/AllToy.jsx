import { Link } from "react-router-dom";
import useAllToy from "../../Hook/useAllToy";


const AllToy = () => {

     const [allToy] = useAllToy();

       
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-fuchsia-700">All Toy</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           allToy.map((item,index)=> <tr key={item._id}>
                           <td>
                                {index+1}
                           </td>
                           <td>
                               {item.sellerName}
                           </td>
                           <td>
                              {item.toyName}
                           </td>
                           <td>{item.subcategory}</td>
                           <td>${item.price}</td>
                           <td>{item.quantity}</td>
                          
                           <td>
                           <Link to={`/singletoy/${item._id}`}> <button className="btn bg-fuchsia-800 text-white">View details </button></Link>
                               
                           
                           </td>
                       </tr> )
                        }
                       
                      
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default AllToy;