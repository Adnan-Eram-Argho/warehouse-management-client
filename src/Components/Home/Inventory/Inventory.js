import React from 'react';
import './Inventory.css'
import useFruits from '../../../hooks/useFruits';
import InventoryItems from '../InventoryItems/InventoryItems';
import { Link } from 'react-router-dom';
const Inventory = () => {
    const [fruits] = useFruits();
    let allfruit;
    if (fruits?.length) {
        allfruit = fruits.slice(0, 6)

    }

    return (
        <div>

            <div className='App'>
                <h1>Inventory</h1>
            </div>
            <div className='row '>
                {
                    allfruit?.map(fruit => <InventoryItems key={fruit._id}
                        fruit={fruit}></InventoryItems>)
                }
            </div>
            <div className='App mt-5'>
                <Link className='btn' to='/manageinventories'> Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Inventory;