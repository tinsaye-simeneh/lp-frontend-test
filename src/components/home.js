import React from 'react';
import homeIllust from '../assets/images/homeIllust.svg'; 

const Home = () => {
    return (
        <div className='container-fluid mt-5 bg-white'>
        <div className='row'>
            <div className='col-md-6 mx-auto bg-white pt-5 ps-5 mt-5 pb-5'>
                <h1 className='ps-5 mt-5'>Welcome to #Brand Name</h1>
                <p className='ps-5 mt-5'> A place where access your hidden skills </p>
                <p className='ps-5 mt-3 pb-5'> Register and get a free access to our Resources </p>
            </div>
            <div className='col-md-5 pt-3 mx-auto bg-white mt-5'>
                <img src={homeIllust} alt='home' className='img-fluid' />
            </div>
        </div>
        </div>
    );
}

export default Home;
