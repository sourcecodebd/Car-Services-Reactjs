import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { name, img, expertise } = expert;

    return (
        <div className="expert">
            <img src={img} className="img-fluid" alt={name} />
            <div>
                <h3>{name}</h3>
                <p>Expertise: {expertise}</p>
            </div>

        </div>
    );
};

export default Expert;