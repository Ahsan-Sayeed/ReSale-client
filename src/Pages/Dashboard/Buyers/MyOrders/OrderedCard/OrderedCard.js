import React from "react";
import { useNavigate } from "react-router-dom";

const OrderedCard = ({value}) => {
    const navigate = useNavigate();

  return (
    <div className="glass">
      <figure>
        <img src={value?.picture?value?.picture:"https://placeimg.com/400/225/arch"} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{value?.itemName?value?.itemName:'N/A'}</h2>
        <p>{value?.price?value?.price:'N/A'}</p>
        <div className="card-actions justify-end">
            {
              value?.payed?<button className="btn btn-info">Payed</button>:<button className="btn btn-primary" onClick={()=>navigate('/payment')}>Pay</button>
            }
        </div>
      </div>
    </div>
  );
};

export default OrderedCard;
