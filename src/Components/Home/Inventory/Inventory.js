import React from 'react';
import './Inventory.css'
import useFruits from '../../../hooks/useFruits';
import InventoryItems from '../InventoryItems/InventoryItems';
const Inventory = () => {
    const [fruits] = useFruits();
    return (
        <div>
            <div className='App'>
                <h1>Inventory</h1>
            </div>
            <div className='row '>
                {
                    fruits?.map(fruit => <InventoryItems key={fruit._id}
                        fruit={fruit}></InventoryItems>)
                }
            </div>

        </div>
    );
};

export default Inventory;