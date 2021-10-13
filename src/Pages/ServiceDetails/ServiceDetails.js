import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useServicesExperts from '../../hooks/useServicesExperts';
import bgServiceDetails from '../../car-service-header.jpg';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const { services } = useServicesExperts();
    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        const foundService = services?.find(service => service.id = serviceId);
        setSingleService(foundService);
    }, [services, serviceId]);

    const justify = {
        textAlign: 'justify',
    }
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0.2, 0.2, 0.2, 0.2), rgba(0.8, 0.8, 0.8, 0.8)), URL(${bgServiceDetails})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
    }

    return (
        <div className="pt-5" style={backgroundStyle}>
            <div className="card shadow col-md-6 mx-auto px-5 py-3 bg-dark text-info border-white rounded-3 mt-3">
                <h3>Id: {serviceId}</h3>
                <h3>{singleService?.name}</h3>
                <p style={justify}>{singleService?.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;