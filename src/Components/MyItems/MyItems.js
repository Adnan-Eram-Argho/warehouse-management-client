
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ManageInventory from '../ManageInventory/ManageInventory'

const MyItems = () => {

    const [fruit, setFruit] = useState([]);
    const { email } = useParams();
    const url = `https://boiling-atoll-49170.herokuapp.com/fruit/${email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFruit(data)

            })
    }, [])
    console.log(fruit);
    return (
        <div className='mt-5'>
            <div className="mt-5 App">
                <h1>hello {email} </h1>
                <p>These are your added items</p>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='row container'>
                    {
                        fruit?.map(fruit => <ManageInventory key={fruit._id}
                            fruit={fruit}></ManageInventory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;