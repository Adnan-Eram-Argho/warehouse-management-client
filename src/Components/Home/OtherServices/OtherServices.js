import React from 'react';
import './OtherServices.css'
const OtherServices = () => {
    return (
        <div className='container'>
            <div className='App my-5'>
                <h2>Our upcoming services</h2>
            </div>
            <div className='row '>
                <div className='col-lg-5 m-3 row other-cont'>
                    <div className="other-text col-lg-8 d-flex align-items-center">
                        <h3>We are going to open a warehouse for electronics pretty soon</h3>

                    </div>
                    <div className="other-img col-lg-4 mt-2 ">
                        <img src="https://img.freepik.com/free-vector/colored-icons-different-types-home-appliances_1284-44063.jpg?t=st=1652254699~exp=1652255299~hmac=538215a252ef07164340a09b39c5b957657a85813bcec0c097b12c17df088b95" alt="" className='img-fluid' />
                    </div>
                </div>
                <div className='col-lg-5  row other-cont'>
                    <div className="other-text col-lg-8 d-flex align-items-center">
                        <h3>We are going to open a warehouse for stationary items pretty soon</h3>

                    </div>
                    <div className="other-img col-lg-4 mt-2 ">
                        <img src="https://img.freepik.com/free-vector/back-school-accessories-composition-poster_1284-9693.jpg?t=st=1652256281~exp=1652256881~hmac=a5a157456aa7d275b352ba2b00fb72dee549802a7df149616d448644ad09f183" alt="" className='img-fluid ' />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default OtherServices;