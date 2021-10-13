import React from 'react';
import bgServiceDetails from '../../car-service-header.jpg';

const NotFound = () => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0.5, 0.5, 0.5, 0.5), rgba(0.9, 0.8, 0.9, 0.9)), URL(${bgServiceDetails})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
    }

    return (
        <div style={backgroundStyle}>
            <div className="col-md-6 mx-auto pt-3">
                <i className="fas fa-exclamation-circle fa-4x text-warning"></i>
                <h1 className="text-danger">404</h1>
                <h2 className="text-white">The Page Your're trying to access was not found</h2>
            </div>
        </div>
    );
};

export default NotFound;