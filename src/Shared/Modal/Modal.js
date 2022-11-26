import React, { useCallback, useContext, useEffect } from "react";
import { AuthContext } from "../../Context/Context";

const Modal = ({booking,setModalData,onSubmiModal}) => {
  const {user} = useContext(AuthContext);
  
  const handleSubmit = data =>{
    data.preventDefault();
    const itemName = data.target.itemName.value;
    const price = data.target.price.value;
    const username = data.target.username.value;
    const email = data.target.email.value;
    const userUID = user.uid;
    const phoneNumber = data.target.phoneNumber.value;
    const meetingLocation = data.target.meetingLocation.value;
    const bodyData = {itemName,picture:booking.picture,price,username,email,userUID,phoneNumber,meetingLocation,category:booking.category,productID:booking.id,payed:false};
    setModalData(false)
    onSubmiModal(bodyData);
  }

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
         
         <form onSubmit={handleSubmit}>
          <label>Item Name</label>
            <input type="text" name="itemName" placeholder="Type here" defaultValue={booking.itemName} className="input input-bordered w-full my-2" disabled/>
          <label>price</label>
            <input type="text" name="price" placeholder="Type here" defaultValue={booking.price} className="input input-bordered w-full my-2" disabled/>
          <label>Username</label>
            <input type="text" name="username" disabled defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full my-2" />
          <label>Email</label>
            <input type="text" name="email" disabled defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full my-2" />
          <label>Phone Number</label>
            <input type="text" name="phoneNumber" placeholder="Type here" className="input input-bordered w-full my-2" />
          <label>Meeting Location</label>
            <input type="text" name="meetingLocation" placeholder="Type here" className="input input-bordered w-full my-2"/>
            <br />
            {/* <button type="submit"><label htmlFor="my-modal3" className="btn btn-error">Submit</label></button> */}
            <button type="submit" className="btn btn-error">submit</button>
         </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
