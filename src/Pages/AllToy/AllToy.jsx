import { Link } from "react-router-dom";



import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";


const AllToy = () => {



    const [search, SetSearch] = useState('')
    const searchref = useRef(null);

    
    const [allToy, setAllToy] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/alToy?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setAllToy(data);
                setLoading(false)
            })
    }, [loading, search])
    const handlerSearch = () => {
        console.log(searchref.current.value)
        SetSearch(searchref.current.value)
    }


    return (
        <div>

            <Helmet><title>Educavalt| AllToy</title></Helmet>
            <h1 className="text-3xl font-bold text-center text-fuchsia-700">All Toy</h1>

            <div className="form-control">
                <div className="input-group">

                    <input ref={searchref} type="text" placeholder="Search…" className="input input-bordered" />
                    <button onClick={handlerSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

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
                            allToy.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
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
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
           

        </div>
    );
};

export default AllToy;