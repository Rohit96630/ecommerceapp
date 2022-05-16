import React, {useState, useEffect} from 'react';
import Adminheader from './adminheader';
import axios from 'axios';

const Dashboard  = () =>{
    return(
        <>
            <Adminheader/>
            <div className="container mt-5">
                <div className='row'>
                    <div className="col-lg-12 text-center">
                        <h3 className='text-primary'> Dashboard </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;