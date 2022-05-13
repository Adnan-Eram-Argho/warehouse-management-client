import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import './InventoryRoute.css'
const InventoryRoute = () => {


    const [fruitQuantity, setFruitQuantiy] = useState();
    const { id } = useParams();

    const [fruit, setFruit] = useState();
    const url = `https://boiling-atoll-49170.herokuapp.com/fruits/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFruit(data)
                setFruitQuantiy(data?.quantity)
            })
    }, [])


    // deliver
    const handleDelivered = (e) => {

        let quantity = parseInt(fruitQuantity);
        console.log(fruitQuantity)
        quantity = quantity - 1;

        setFruitQuantiy(quantity)
        if (fruitQuantity === 0) {
            alert('you have nothing left');
            setFruitQuantiy(0);
        }

        //put

        console.log(fruitQuantity)
        const updatedFruit = {

            fruit: fruit?.fruit,
            description: fruit?.description,
            image: fruit?.image,
            price: fruit?.price,
            quantity: fruitQuantity - 1,
            supplierName: fruit?.supplierName,
            sold: fruit?.sold
        }
        //update
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(updatedFruit),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);


            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    //form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        let num = parseInt(data.addQuantity);
        let totalNum = num + parseInt(fruitQuantity)
        setFruitQuantiy(totalNum)
        console.log(totalNum)
        //updated
        const updatedFruit = {

            fruit: fruit?.fruit,
            description: fruit?.description,
            image: fruit?.image,
            price: fruit?.price,
            quantity: parseInt(fruitQuantity) + parseFloat(num),
            supplierName: fruit?.supplierName,
            sold: fruit?.sold
        }

        //update

        console.log(fruitQuantity)
        console.log(updatedFruit)
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(updatedFruit),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);


            })
            .catch((error) => {
                console.error('Error:', error);
            });




    };
    console.log(errors);
    return (
        <div className='mt-5 container App'>
            <h1 className='mt-5 mb-5'>Here is the full description of the fruit</h1>
            <div>
                <div className='row container App'>
                    <div className="col-6"><h4>Name:</h4></div>
                    <div className="col-6">{fruit?.fruit}</div>
                </div>
                <hr />
                <div className='row container App'>
                    <div className="col-6">id:</div>
                    <div className="col-6 scroll">{fruit?._id}</div>
                </div>
                <hr />
                <div className='row container App'>
                    <div className="col-6">image:</div>
                    <div className="col-6"><img src={fruit?.image} alt="" className='w-25 image-fluid' /></div>
                </div>
                <hr />
                <div className='row container App'>
                    <div className="col-6">description:</div>
                    <div className="col-6">{fruit?.description}</div>
                </div>
                <hr />
                <div className='row container App'>
                    <div className="col-6">price:</div>
                    <div className="col-6">{fruit?.price}</div>
                </div>
                <hr />
                <div className='row container App'>
                    <div className="col-6">Quantity:</div>
                    <div className="col-6">{fruitQuantity ? fruitQuantity : fruitQuantity === 0 ? fruitQuantity : parseInt(fruit?.quantity)} Kg</div>
                </div>
                <hr />
                <div className='row container App'>
                    <div className="col-6">Supplier Name:</div>
                    <div className="col-6">{fruit?.supplierName}</div>
                </div>
                <hr />
                <div className='row container App'>
                    <div className="col-6">Sold :</div>
                    <div className="col-6">{fruit?.sold}</div>
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <button className="btn" onClick={() => handleDelivered()}>Delivered</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                    <input type="number" placeholder="add quantity" {...register("addQuantity", { required: true, min: 0 })} />

                    <button type="submit" className='btn' >Add</button>
                </form>
            </div>
            <div className='App mt-5'>
                <Link className='btn' to='/manageinventories'> Manage Inventories</Link>
            </div>
        </div>
    );
};

export default InventoryRoute;