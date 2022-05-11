import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex align-items-center justify-content-center' style={{ height: '400px' }}>
            <Spinner animation="border" variant="success" />
        </div>
    );
};

export default Loading;