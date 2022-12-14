import React from 'react';
import { useNavigate } from 'react-router-dom';
//object-cover w-full dark:bg-gray-500 aspect-square
const Card = ({title,id}) => {
    const navigate = useNavigate();
    return (
        <div className="card text-black glass shadow-xl" style={{backgroundColor:'#3498DB'}} onClick={()=>{navigate(`/category/${id}`)}}>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    );
};

export default Card;