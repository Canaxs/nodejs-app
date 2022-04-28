import React from 'react'
import Logo1 from '../image/1.jpg';
import Logo2 from '../image/2.jpg';
import Logo3 from '../image/3.jpg';

const Slider = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{height: "600px"}}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Logo1} className="d-block w-100" alt="..." style={{objectFit:"cover"}} height={600}/>
                </div>
                <div className="carousel-item">
                    <img src={Logo2} className="d-block w-100" alt="..." style={{objectFit:"cover"}} height={600}/>
                </div>
                <div className="carousel-item">
                    <img src={Logo3} className="d-block w-100" alt="..." style={{objectFit:"cover"}} height={600}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider;