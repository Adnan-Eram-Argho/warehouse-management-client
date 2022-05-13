import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const AddNewItem = () => {
    const [user] = useAuthState(auth)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    //add new item
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const newFruit = {
            fruit: data?.fruit,
            description: data?.description,
            image: data?.image,
            price: data?.price,
            quantity: data.quantity,
            supplierName: data?.supplierName,
            sold: data?.sold,
            email: user?.email
        }
        console.log(newFruit)

        fetch('https://boiling-atoll-49170.herokuapp.com/fruits/', {
            method: 'POST',
            body: JSON.stringify(newFruit),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        const done = window.confirm('adding done')
        if (done) {
            window.location.reload(true)
        }
        navigate(from, { replace: true })
    };
    console.log(errors);
    return (
        <div>
            <div className='d-flex flex-column align-items-center mt-5'>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column align-items-center mt-5'>
                    <input type="text" placeholder="fruit" {...register("fruit", {})} className="mt-2" />
                    <input type="text" placeholder="description" {...register("description", {})} className="mt-2" />
                    <input type="text" placeholder="image" {...register("image", {})} className="mt-2" />
                    <input type="text" placeholder="price" {...register("price", {})} className="mt-2" />
                    <input type="text" placeholder="quantity" {...register("quantity", {})} className="mt-2" />
                    <input type="text" placeholder="supplierName" {...register("supplierName", {})} className="mt-2" />
                    <input type="text" placeholder="sold" {...register("sold", {})} className="mt-2" />


                    <input type="submit" className='btn mt-3' />
                </form>
            </div>
        </div>
    );
};

export default AddNewItem;