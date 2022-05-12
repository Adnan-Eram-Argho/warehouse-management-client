import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewItem = () => {
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
            sold: data?.sold
        }
        console.log(newFruit)

        fetch('http://localhost:5000/fruits/', {
            method: 'POST',
            body: JSON.stringify(newFruit),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

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