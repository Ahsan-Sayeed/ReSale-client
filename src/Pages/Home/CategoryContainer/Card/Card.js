import React from 'react';
import { useNavigate } from 'react-router-dom';
//object-cover w-full dark:bg-gray-500 aspect-square
const Card = () => {
    const navigate = useNavigate();
    const id = 1;
    return (
        <div className="card bg-base-100 shadow-xl" onClick={()=>{navigate(`/category/${id}`)}}>
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    );
};

export default Card;