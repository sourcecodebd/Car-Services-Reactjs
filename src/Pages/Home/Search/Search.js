import React from 'react';
import useServicesExperts from '../../../hooks/useServicesExperts';
import './Search.css';
import searchLogo from './SearchLogo';

const Search = () => {
    const { services, search, experts, setSearch } = useServicesExperts();

    const handleSearch = (e) => {
        const searchText = e.target.value;
        const foundServices = services.filter(service => service.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        const foundExperts = experts.filter(service => service.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);

        const foundRes = [];
        foundRes.push(foundServices, foundExperts);

        if (searchText) {
            console.log(foundRes);
            setSearch(foundRes);
        }
        else {
            setSearch([]);
        }
    }

    return (
        <div>
            <div className="search-bar">
                <i className="fas fa-search fa-2x" onClick={searchLogo} id="expert-search"></i>
                <input onChange={handleSearch} type="text" placeholder="Search" className="search-input" />
            </div>
            <div className="container">

                {
                    search?.length === 0 ?
                        ""

                        :
                        <div>
                            {
                                search?.map(found =>
                                    found.map(f =>
                                        <div className="search-result mx-auto" key={f.id}>
                                            <div className="d-flex justify-content-center">
                                                <div>
                                                    {
                                                        f.description ?
                                                            <div>
                                                                <div><span className="fw-bold text-white">Service Name: </span>{f.name}</div>
                                                                <div><span className="fw-bold text-white">Price: </span>{f.price}</div>
                                                                <div><span className="fw-bold text-white">Description: </span>{f.description}</div>
                                                            </div>
                                                            :
                                                            <div>
                                                                <div><span className="fw-bold text-white">Experts Name: </span>{f.name}</div>
                                                                <div><span className="fw-bold text-white">Expertise: </span>{f.expertise}</div>
                                                            </div>
                                                    }
                                                    {

                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    )
                                )
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Search;