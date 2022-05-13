import React from 'react';
import { Link } from 'react-router-dom';
import useFruits from '../../hooks/useFruits';

import ManageInventory from '../ManageInventory/ManageInventory';



const ManageInventories = () => {
    const [fruits] = useFruits();

    return (
        <div>
            <div className='App mt-5 '>
                <h1>Inventory</h1>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='row container'>
                    {
                        fruits?.map(fruit => <ManageInventory key={fruit._id}
                            fruit={fruit}></ManageInventory>)
                    }
                </div>
            </div>
            <div className=' App mt-5'>
                <Link to='/addnewitem' className='btn'>Add new item</Link>
            </div>
        </div>
    );
};

export default ManageInventories;