import React from "react";

const CustomModal = ({title,bodyText,success,decline}) => {
    const handleClick = () =>{
        success.fun(true)
    }
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {title}
          </h3>
          <p className="py-4">
            {bodyText}
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn btn-error text-white" onClick={()=>success?.fun(true)}>
              {success?.btn}
            </label>
            <label htmlFor="my-modal" className="btn" onClick={()=>decline.fun(false)}>
              {decline?.btn}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
