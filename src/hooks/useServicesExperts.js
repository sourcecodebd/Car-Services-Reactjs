import { useEffect, useState } from 'react';

const useServicesExperts = () => {
    const [services, setServices] = useState([]);
    const [experts, setExperts] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        const ENDPOINT1 = `services.json`;
        const servicesURL = `https://raw.githubusercontent.com/sourcecodebd/Car-Services-API/main/${ENDPOINT1}`;

        const ENDPOINT2 = `experts.json`;
        const expertsURL = `https://raw.githubusercontent.com/sourcecodebd/Car-Services-API/main/${ENDPOINT2}`;

        fetch(servicesURL)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            });
        fetch(expertsURL)
            .then(res => res.json())
            .then(data => {
                setExperts(data);
            });
    }, []);

    return {
        services,
        experts,
        search,
        setSearch
    }
}

export default useServicesExperts;