import React, { useEffect, useState } from 'react';
import Modal from '../../../Shared/Modal/Modal';
import { POST } from '../../../Utilities/RequestObjects';
import ProductCards from './ProductCards/ProductCards';

const Products = ({data=[],refetch}) => {
    const [booking, setBooking] = useState('');
    const [modalData,setModalData] = useState(true);

    const onSubmiModal = (bodyData) =>{
        POST('/book',bodyData)
        .then(res=>{
            if(res.data.acknowledged){
                refetch();
                alert('success');
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    
    return (
        <div>
        <section className="py-6">
            <p className="text-3xl m-5">Products</p>   
           <div className="container flex flex-col justify-center p-4 mx-auto">
             <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                {data?.data?.map(value=><ProductCards key={value?._id} value={value} setBooking={setBooking} setModalData={setModalData}></ProductCards>)}
            </div>
	      </div>
          {
              modalData&&<Modal booking={booking} setModalData={setModalData} onSubmiModal={onSubmiModal}/>
          }
       </section>
     </div>
    );
};

export default Products;