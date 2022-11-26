import React from 'react';

const ProductCards = ({value,setBooking,setModalData}) => {
    const date = new Date();
    return (
        <div className="object-cover w-full dark:bg-gray-500 aspect-square">
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={value.picture?value.picture:"https://placeimg.com/400/225/arch"} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{value.productName?value.productName:'N/A'}</h2>
            <p>location: {value.location?value.location:'N/A'}</p>
            <p>Re-Sale Price: {value.reSalePrice?value.reSalePrice:'N/A'}</p>
            <p>Orginal Price: {value.orginalPrice?value.orginalPrice:'N/A'}</p>
            <p>Years Of Use: {value.yearsOfUse?value.yearsOfUse:'N/A'}</p>
            <p>seller Name: {value.sellerName?value.sellerName:'N/A'} {value.verified&&<span className='text-blue-400 mx-2'>&#10003;</span>}</p>
            <p>Posted: {value.Time?date.toISOString():'N/A'}</p>
            <div className="card-actions justify-end">
            {
                value.booked?<button className='btn' disabled>Booked</button>:<label htmlFor="my-modal-3" className="btn btn-primary" onClick={()=>{
                setBooking({id:value._id,picture:value.picture,itemName:value.productName,price:value.reSalePrice,category:value.category})
                setModalData(true)
                }}>book Now</label>
            }
            </div>
        </div>
        </div>
        </div>
    );
};

export default ProductCards;