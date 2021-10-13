import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import './Shipping.css'
import useAuth from '../../hooks/useAuth';
import bgServiceDetails from '../../car-service-header.jpg';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                <h4>{user?.displayName}! <i className="fas fa-cart-plus"></i> Purchase Your Order</h4>
            </div>
            <div className="shipping">
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Name" {...register("name")} />
                    <input placeholder="Email" {...register("email", { required: true })} />
                    {errors.email && <span className="red">Email field is required</span>}
                    <input placeholder="Address" {...register("address", { required: true })} />
                    <input placeholder="City" {...register("city", { required: true })} />
                    <input placeholder="Phone number" {...register("phone", { required: true })} />
                    <div className="d-flex justify-content-center mt-3">
                        <Button type="submit" variant="contained">Continue</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Shipping;