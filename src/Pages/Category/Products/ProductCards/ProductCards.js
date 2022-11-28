import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/Context';
import { GET, POST } from '../../../../Utilities/RequestObjects';

const ProductCards = ({value,setBooking,setModalData}) => {
    const date = new Date();
    const [isVerified,setVerified] = useState('');
    const [show,setShow] = useState(true);
    const {user} = useContext(AuthContext);
    
    // console.log(new Date(value.Time).toLocaleTimeString())

    useEffect(()=>{
        GET(`/isverified/${value.sellerUID}`)
        .then(res=>{
            setVerified(res?.data.verified);
        })
        .catch(err=>{
            console.log(err);
        })
    },[isVerified])

    const handleReport = (v) =>{
        POST('/reportitem',{productID:value._id,sellerName:value.sellerName,report:v,time:(new Date()).toLocaleTimeString(),role:'items',senderName:user.displayName,email:user.email,workDone:false})
        .then(res=>{
            if(res.status===200){
                alert("reported succesfully");
            }
        })
        .catch(err=>{
            console.log(err);
        })
        // console.log(v);
        // console.log(value._id)
    }

    return (
        <div className="object-cover w-full aspect-square">
        <div className="card card-compact glass shadow-xl">
        <figure><img src={value.picture?value.picture:"https://placeimg.com/400/225/arch"} alt="Shoes" className='w-full' style={{height:'200px'}}/></figure>
        <div className="card-body text-black">
            <h2 className="card-title">{value.productName?value.productName:'N/A'}</h2>
            <p>location: {value.location?value.location:'N/A'}</p>
            <p>Re-Sale Price: {value.reSalePrice?value.reSalePrice:'N/A'}</p>
            <p>Orginal Price: {value.orginalPrice?value.orginalPrice:'N/A'}</p>
            <p>Years Of Use: {value.yearsOfUse?value.yearsOfUse:'N/A'}</p>
            <p>Seller Name: {value.sellerName?value.sellerName:'N/A'}{isVerified&&<span className='text-white font-bold mx-2 rounded-xl px-1 bg-blue-400'>&#10003;</span>}</p>
            <p>Posted on {value.Time?new Date(value.Time).toLocaleTimeString():'N/A'}</p>
            <div className="card-actions justify-end">
            {
                value.booked?<button className='btn' disabled>Booked</button>:<label htmlFor="my-modal-3" className="btn btn-primary" onClick={()=>{
                setBooking({id:value._id,picture:value.picture,itemName:value.productName,price:value.reSalePrice,category:value.category})
                setModalData(true)
                }}>book Now</label>
            }
            <label htmlFor="my-modal-x" className="btn btn-secondary" onClick={()=>setShow(true)}>Report</label>
            </div>
        </div>
        </div>
        <ReportModal show={show} setShow={setShow} handleReport={handleReport}/>
        </div>
    );
};


const ReportModal = ({show,setShow,handleReport}) =>{
    const handleSubmit = (e) =>{
        e.preventDefault();
        setShow(false);
        handleReport(e.target.report.value);
    }
    return <>
    <input type="checkbox" id="my-modal-x" className="modal-toggle" />
    {show&&<div className="modal">
    <form className="modal-box relative" onSubmit={handleSubmit}>
      <label htmlFor="my-modal-x" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <textarea className="textarea textarea-primary w-full" name='report' placeholder="Write down your report.."></textarea>
      <button className='btn btn-secondary'>submit</button>
    </form>
  </div>}
  </>
}

export default ProductCards;