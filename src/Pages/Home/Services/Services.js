import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
import './Search.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [search, setSearch] = useState([]);
    useEffect(() => {
        const ENDPOINT = `services.json`;
        const URL = `https://raw.githubusercontent.com/sourcecodebd/Car-Services-API/main/${ENDPOINT}`;
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setSearch(data);
            })
    }, []);

    const handleSearch = (e) => {
        const searchText = e.target.value;
        const foundServices = services.filter(service => service.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        setSearch(foundServices);
    }

    return (
        <div>

            <div className="service-container" id="services">
                <a href="/"><h2 className="mt-4">Total Services: {search.length}</h2></a>
                <p className="lines"></p>

                <div className="search-bar-service">
                    <i className="fas fa-search" id="service-search"></i>
                    <input onChange={handleSearch} type="text" placeholder="Search" id="" />
                </div>

                <div className="services">
                    {
                        search.map(service => <Service service={service} key={service.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;