import React from "react";
import { useNavigate } from "react-router-dom";

const OrderedCard = ({value,isLoading}) => {
    const navigate = useNavigate();
  if(!isLoading){
  return (
    <div className="glass rounded">
      <figure>
        <img src={value?.picture?value?.picture:"https://placeimg.com/400/225/arch"} className='w-full' style={{height:'200px'}} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{value?.itemName?value?.itemName:'N/A'}</h2>
        <p>${value?.price?value?.price:'N/A'}</p>
        <div className="card-actions justify-end">
            {
              value?.payed?<button className="btn btn-error">Payed</button>:<button className="btn btn-success" onClick={()=>navigate('/payment',{state:{price:value?.price,productID:value.productID}})}>Pay</button>
            }
        </div>
      </div>
    </div>
  );
};
}

export default OrderedCard;
