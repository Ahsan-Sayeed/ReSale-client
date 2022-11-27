import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { DELETE, GET } from '../../../../Utilities/RequestObjects';

const ReportedItem = () => {
    const {data,isLoading,refetch} = useQuery({ 
        queryKey: ['report'], 
        queryFn: ()=>GET('/reportitem') 
    })
    
    const handleDelete = (id) =>{
        DELETE(`/report/${id}`)
        .then(res=>{
            if(res.status===200){
                refetch();
                alert('Product deleted');
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    if(isLoading){
        return <span>Loading...</span>
    }
    return (
<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Reported Items</h2>
	<div className="flex flex-col overflow-x-auto text-xs">
		<div className="flex text-left dark:bg-gray-700">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3"></div>
			<div className="w-32 px-2 py-3 sm:p-3">Sender</div>
			<div className="flex-1 px-2 py-3 sm:p-3">Message</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block">Received</div>
			<div className="w-24 px-2 py-3 text-right sm:p-3 sm:block">Action</div>
		</div>

    	{
            data?.data.map(v=><div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3"></div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>{v?.senderName}</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">
                {v?.report}
            </div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>{v?.time}</p>
			</div>
			<div className=" w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				{v?.workDone?<button className='btn btn-xs btn-success text-white'>✓</button>:<button className='btn btn-xs btn-error' onClick={()=>handleDelete(v.productID)}>delete</button>}
			</div>
		    </div>  
           )
        }
        {
            !(data?.data.length>0)&&<p className='text-center text-xl'>No report found</p>
        }
				
	</div>
</div>
    );
};

export default ReportedItem;