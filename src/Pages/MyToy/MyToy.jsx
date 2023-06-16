import { useContext,useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";


import { useQuery } from '@tanstack/react-query'
import { Helmet } from "react-helmet-async";



const MyToy = () => {
    const [ascding,SetAscding] = useState(true);
   

   const {user} = useContext(AuthContext);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {refetch, data: toy = []  } = useQuery({
       queryKey: ['mytoy', user?.email],
       queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/mytoy?email=${user?.email}&sort=${ascding ? 'asc' : 'dsc'}`)
            return res.json();
       },
     })
    
    
    const handleDelete =id=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/AllToy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div>
            <h1 className="">My Toy</h1>
             <Helmet><title>Educavalt| MyToy</title></Helmet>
            <div className="text-center mt-20 mb-10 ">
            <h1 className="text-3xl font-bold mb-8 text-fuchsia-700">My Toy</h1>
             <button className="rounded p-3 font-bold mb-4  bg-fuchsia-700 text-white"  onClick={()=>SetAscding(!ascding)}>{ascding? 'Ascending':'Descending'}</button>

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
                            <th>Toy image</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available quantity</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toy.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {item.sellerName}
                                </td>
                                <td>
                                  
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                       
                                   
                                </td>

                                <td>
                                    {item.toyName}
                                </td>
                                <td>{item.subcategory}</td>
                                <td>${item.price}</td>
                                <td>{item.quantity}</td>

                                <td>
                                   <Link to={`/updatetoy/${item._id}`}><button className="btn bg-fuchsia-800 text-white">update </button></Link> 

                                </td>
                                <td>
                                    <button onClick={()=>handleDelete(item._id)} className="btn bg-fuchsia-800 text-white">delete </button>

                                </td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToy;