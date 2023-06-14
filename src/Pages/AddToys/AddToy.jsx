
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";



const AddToy = () => {
    const { register, handleSubmit, reset } = useForm();


    const { user } = useContext(AuthContext);

    const onSubmit = data => {



        const {toyName ,image,sellerName,sellerEmail,quantity, price, rating,subcategory,description } = data;
        const newToy = { toyName ,image,sellerName,sellerEmail,quantity:parseFloat(quantity),price:parseFloat(price),rating:parseFloat( rating),subcategory,description }
        console.log(newToy)


        fetch('http://localhost:5000/AllToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after posting new menu item', data)
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        // if(user && user.email){
        //    const toyitem = {toyName ,image,sellerName,email:user?.email,quantity:parseFloat(quantity),price:parseFloat(price),rating:parseFloat( rating),subcategory,description }
        //     fetch('http://localhost:5000/myToy',{
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(toyitem)
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('after posting new menu item', data)
        //         if (data.insertedId) {
        //             reset();
        //             Swal.fire({
        //                 position: 'top-end',
        //                 icon: 'success',
        //                 title: 'Item added successfully',
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             })
        //         }
        //     })
        // }

}

return (
    <div className="">
        <h1 className="text-3xl font-bold text-center text-fuchsia-700">Add Toy</h1>

        <form className="mt-20 bg-fuchsia-300 p-4 rounded-lg" onSubmit={handleSubmit(onSubmit)}>


            <div className="grid grid-cols-2 gap-4">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Toy name</span>

                    </label>
                    <input type="text" {...register("toyName", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Toy image</span>

                    </label>
                    <input type="text" {...register("image", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Seller Name</span>

                    </label>
                    <input type='text' {...register("sellerName", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " value={user?.displayName} readOnly />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Seller Email</span>

                    </label>
                    <input type='email' {...register("sellerEmail", { required: true })} placeholder="Type here" value={user?.email} className="input input-bordered max-w-5xl " readOnly />

                </div>
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
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Rating</span>

                    </label>
                    <input type="number"{...register("rating", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Subcategory</span>

                    </label>
                    <input type="text"{...register("subcategory", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details description</span>

                    </label>
                    <textarea name="textarea"  {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Details description"></textarea>

                </div>
            </div>




            <input className="bg-fuchsia-800 mt-6 text-white rounded-lg p-3" type="submit" value="Add class" />
        </form >
    </div>

);
};

export default AddToy;