import React, { useContext, useState } from 'react';
import {useQuery} from '@tanstack/react-query';
import { DELETE, GET, PUT } from '../../../../Utilities/RequestObjects';
import CustomModal from '../../../../Shared/CustomModal/CustomModal';
import ProductAbbrCard from './ProductAbbrCard/ProductAbbrCard';
import { AuthContext } from '../../../../Context/Context';

const MyProducts = () => {
  const {user,userServer} = useContext(AuthContext);
  const [Delete,setDelete] = useState('');
  const {data,refetch,isLoading} = useQuery(
    {
       queryKey: ['buyers',userServer], 
       queryFn:()=> GET(`/seller/products/${userServer?.uid}`)
    })

    // console.log(data?.data);


    if(isLoading){
      return <h1>Loading...</h1>
    }

    const handleDelete = (v)=>{
      if(v){
        DELETE(`/admin/seller/${Delete._id}`)
        .then(res=>{
          if(res?.data?.acknowledged){
            refetch();
          }
          else{
            alert('Something went wrong.');
          }
        })
        .catch(err=>{
          console.log(err);
        })
      }
      setDelete('');
    }


return (
<div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" style={{visibility:'hidden'}}/>
          </label>
        </th>
        <th>Name</th>
        <th>Contact</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row --> */}
      {
        data?.data?.map((value,index)=>{
          return<tr key={value._id}>
          <th>
            <label>
              {index+1}
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
                <ProductAbbrCard value={value} refetch={refetch}></ProductAbbrCard>
            </div>
          </td>
          <td>
            {value?.email?value?.email:'N/A'}
            <br/>
            <span className="badge badge-ghost badge-sm">{value?.phoneNumber?value?.phoneNumber:'N/A'}</span>
          </td>
          <td>
          <button className={`btn ${value?.sold?'btn-error':'btn-success'} btn-accent btn-xs`}>
            {value?.sold?<span>Sold</span>:<span>Available</span>}
          </button>
          </td>
          <th>
            <button className="btn btn-info btn-xs mx-5">details</button>
            <label htmlFor="my-modal" className='btn btn-info text-white btn-xs' onClick={()=>setDelete(value)}>Edit</label>
          </th>
        </tr>
        })
      }
    </tbody>
  </table>
</div>
    );
};

export default MyProducts;