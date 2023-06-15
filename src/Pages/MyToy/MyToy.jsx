import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useMyToy from "../../Hook/useMyToy";
import Swal from "sweetalert2";




const MyToy = () => {

    const [toy,refetch] = useMyToy();

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
            <h1 className="text-3xl font-bold text-center text-fuchsia-700">My Toy</h1>


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
                                    <button className="btn bg-fuchsia-800 text-white">update </button>

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