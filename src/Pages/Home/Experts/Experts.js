import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import Search from '../Search/Search';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        const ENDPOINT = `experts.json`;
        const URL = `https://raw.githubusercontent.com/sourcecodebd/Car-Services-API/main/${ENDPOINT}`;
        fetch(URL)
            .then(res => res.json())
            .then(data => setExperts(data))
    }, []);

    return (
        <div className="bg-dark py-4">
            <a href="/" className="text-decoration-none"><h2 className="mt-4 text-white">Our Experts</h2></a>
            <p className="lines bg-warning"></p>

            <Search />
            <div className="experts container">
                {
                    experts.map(expert => <Expert expert={expert} key={expert.id} />)
                }
            </div>

        </div>
    );
};

export default Experts;