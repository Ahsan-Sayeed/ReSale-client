import React from 'react';

const ProductCards = () => {
    return (
        <div className="object-cover w-full dark:bg-gray-500 aspect-square">
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <label htmlFor="my-modal-3" className="btn btn-primary">open modal</label>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ProductCards;