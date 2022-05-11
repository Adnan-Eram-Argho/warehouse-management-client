import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './InventoryItems.css'
const InventoryItems = (props) => {
    const { image, fruit, description, price } = props.fruit;
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
                        Price: <span style={{ color: 'goldenrod' }}>{price}</span>

                    </Card.Text>
                    <Link className='btn' to='/checkout'>Check Out</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default InventoryItems;