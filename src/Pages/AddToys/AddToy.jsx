
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const image_hosting_token = import.meta.env.VITE_image_hosting_token;

const AddToy = () => {
    const { register, handleSubmit, reset } = useForm();

    const image_hosting_URL = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const { user } = useContext(AuthContext);

    const onSubmit = data => {


        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_URL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;

                    console.log(data, imgURL)

                    const { instructorName, className, availableSeats, price, email } = data;
                    const newClass = { instructorName, className, price: parseFloat(price), availableSeats: parseFloat(availableSeats), image: imgURL, email, status: "panding" }
                    console.log(newClass)


                    fetch('http://localhost:5000/class', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newClass)
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


                }
            })
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
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Toy Image</span>

                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />

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
                        <input type="text"{...register("category", { required: true })} placeholder="Type here" className="input input-bordered max-w-5xl " />

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