import React from 'react'
import Navbar from '../fixed/Navbar';
import Slider from '../fixed/Slider';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <div className="card mt-5">
                <div className="card-header">
                    Blog Home
                </div>
                <div className="card-body">
                    <h5 className="card-title">Welcome to our blog</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
