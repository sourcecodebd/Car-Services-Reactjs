import React from 'react';
import Button from '@mui/material/Button';
import bgServiceDetails from '../../car-service-header.jpg';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {

    const { user } = useAuth();

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0.5, 0.5, 0.5, 0.5), rgba(0.9, 0.8, 0.9, 0.9)), URL(${bgServiceDetails})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
    }

    return (
        <div style={backgroundStyle} className="pt-2">
            <div className="alert alert-light col-md-6 mx-auto bg-danger text-white">
                <h4>{user?.displayName}! <i className="fas fa-shopping-bag"></i> Place Your Order</h4>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <Button variant="contained">Continue</Button>
            </div>
        </div>
    );
};

export default PlaceOrder;