import React from "react";

const Modal = () => {
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
         
         <form>
            <input type="text" placeholder="Type here" className="input input-bordered w-full my-2" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full my-2" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full my-2" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full my-2" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full my-2" />
            <br />
            <button className="btn">Submit</button>
         </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
