import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, price, time, img } = service;

    let history = useHistory();
    const handleDetails = (id) => {
        history.push(`/service-details/${id}`);
    }


    return (
        <div className="service">
            <img src={img} width="300" height="200" className="img-fluid" alt={name} />
            <div className="service-body">
                <p><i className="fas fa-taxi text-warning"></i> Service: {name}</p>
                <p><i className="fas fa-tags text-warning"></i> Price: {price.toFixed(2)} taka</p>
                <p><i className="fas fa-history text-warning"></i> Delivery Time: {time.toFixed(2)}pm</p>
                <div className="service-footer">
                    <button onClick={() => handleDetails(id)} className="btn btn-light fw-bold"><i className="fas fa-street-view"></i> View More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;