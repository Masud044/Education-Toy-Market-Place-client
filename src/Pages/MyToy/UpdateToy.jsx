import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAllToy from "../../Hook/useAllToy";
import { useState } from "react";

const UpdateToy = () => {
    const {id}= useParams();
    const [update,setUpdate] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const [allToy]= useAllToy();
    

    const onSubmit = data => {

        const {quantity, price,description } = data;
        const updateToy = { quantity:parseFloat(quantity),price:parseFloat(price),description }
        console.log(updateToy)


       fetch(`http://localhost:5000/AllToy/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
             body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after posting new menu item', data)
                if (data.modifiedCount>0) {

                    reset();
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'update is successfully done',
                      showConfirmButton: false,
                      timer: 1500
                    })
                     const rem = allToy.filter(toy=>toy._id!== id);
                     const updated = allToy.find(toy=>toy._id===id);
                     updated.updateToy
                     const newupdate = [updated,...rem];
                     setUpdate(newupdate);
                }
            })
       
}

    return (
        <div className="">
        <h1 className="text-3xl font-bold text-center text-fuchsia-700">Update Toy</h1>

        <form className="mt-20 mb-20 bg-fuchsia-300 p-4 rounded-lg" onSubmit={handleSubmit(onSubmit)}>


            <div className="grid grid-cols-2 gap-4">
              
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>

                    </label>
                    <input type="number" {...register("quantity", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Price</span>

                    </label>
                    <input type="number"{...register("price", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details description</span>

                    </label>
                    <textarea name="textarea"  {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Details description"></textarea>

                </div>
            </div>




            <input className="bg-fuchsia-800 mt-6 text-white rounded-lg p-3" type="submit" value="Update Toy" />
        </form >
    </div>
    );
};

export default UpdateToy;