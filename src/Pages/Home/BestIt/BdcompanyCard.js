import React from 'react';

const BdcompanyCard = ({company}) => {
    const {name, logo, location} = company
    return (
        <div className="card card-compact  bg-base-100  shadow-2xl">
            <figure className='h-1/2'><img src={logo} alt="Shoes" className='h-24' /></figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p>{location}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default BdcompanyCard;