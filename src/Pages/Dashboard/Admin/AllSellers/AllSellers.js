import React, { useState } from 'react';
import {useQuery} from '@tanstack/react-query';
import { DELETE, GET, PUT } from '../../../../Utilities/RequestObjects';
import CustomModal from '../../../../Shared/CustomModal/CustomModal';

const AllSellers = () => {
  const [Delete,setDelete] = useState('');
  const {data,refetch,isLoading} = useQuery(
    {
       queryKey: ['buyers'], 
       queryFn:()=> GET('/admin/Seller')
    })

    console.log(data?.data);

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

    const handleUpdate = (id) =>{
      PUT(`/admin/seller/${id}`,{})
      .then(res=>{
        if(res.data.acknowledged&&res.data.modifiedCount>0){
          refetch();
        }
      })
      .catch(err=>{
        console.log(err)
      })
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
        <th>Action</th>
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
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{value?.name?value?.name:'N/A'}</div>
                <div className="text-sm opacity-50">{'N/A'}</div>
              </div>
            </div>
          </td>
          <td>
            {value?.email?value?.email:'N/A'}
            <br/>
            <span className="badge badge-ghost badge-sm">{value?.phoneNumber?value?.phoneNumber:'N/A'}</span>
          </td>
          <td>
          <button className={`btn ${!value?.verified&&'btn-success'} btn-xs`} 
          onClick={()=>handleUpdate(value._id)} 
          disabled={value?.verified}>
           {value?.verified&& <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Blue_check.svg" 
              alt="" style={{height:'20px'}}
              className='mr-2 border border-blue-200 rounded-xl p-1'
              />
           }
            {value?.verified?<span className='text-blue-300'>Verified</span>:'Unverified'}
          </button>
          </td>
          <th>
            <button className="btn btn-info btn-xs mx-5">details</button>
            <label htmlFor="my-modal" className='btn btn-error text-white btn-xs' onClick={()=>setDelete(value)}>Delete</label>
          </th>
        </tr>
        })
      }
    </tbody>
  </table>
  <CustomModal title={`Are You Sure You Want To Delete ${Delete.name}`} 
    bodyText={`If you delete ${Delete.name} your data will be no longer available, and it can't be recover any more.`}
    success={{btn:'Delete',fun:handleDelete}}
    decline={{btn:'Decline',fun:handleDelete}}
  />
</div>
    );
};

export default AllSellers;