import React from 'react';
import { Card } from 'react-bootstrap';


const ManageInventory = (props) => {
    const { image, fruit, description, price, quantity, supplierName, _id } = props.fruit;
    const handleDelete = () => {
        console.log(_id)
        const allow = window.confirm("are you sure you wanna delete this item");
        if (allow) {
            console.log("deleting", fruit);
            const url = ` http://localhost:5000/fruits/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        window.location.reload(true);
                    }
                })
        }
    }
    return (

        <div className='col-lg-4 d-flex col-md-6 justify-content-center mt-5 p-0'>
            <Card className='inventory-item' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{fruit}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Supplier: <span style={{ color: 'goldenrod' }}>{supplierName}</span>

                    </Card.Text>
                    <Card.Text>
                        Quantity: <span style={{ color: 'goldenrod' }}>{quantity} kg</span>

                    </Card.Text>
                    <Card.Text>
                        Price: <span style={{ color: 'goldenrod' }}>{price}</span>

                    </Card.Text>

                    <button className='btn mx-2' onClick={() => handleDelete()}>X</button>
                </Card.Body>
            </Card>

        </div>

    );
};

export default ManageInventory;