import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryRoute.css'
const InventoryRoute = () => {
    const { id } = useParams();
    console.log(id)
    const [fruit, setFruit] = useState();
    const url = `http://localhost:5000/fruits/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFruit(data))
    }, [])
    console.log(fruit);
    return (
        <div>
            <h1>hello </h1>
        </div>
    );
};

export default InventoryRoute;