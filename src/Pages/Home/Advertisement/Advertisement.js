import React, { useEffect, useState } from 'react';
import { GET } from '../../../Utilities/RequestObjects';
import {useQuery} from '@tanstack/react-query'
import LoadingRound from '../../../Shared/LoadingRound/LoadingRound';

const Advertisement = () => {
const { isLoading, isError, data, error } = useQuery({
	queryKey:['ads'],
	queryFn:()=> GET('/ads')
})

if(isLoading){
	return <LoadingRound/>
}

if(data?.data.filter(v=>v.sold!==true).length>0)
    return (
<section className="py-6 dark:bg-gray-800">
<h1 className=" flex flex-col mx-auto text-3xl w-5/6 my-5">For Sale</h1>
	<div className="container flex flex-col justify-center p-4 mx-auto lg:w-5/6 w-full">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			
		{data?.data.map(value=>{
			return <div className={`bg-base-100 shadow-xl object-cover w-full dark:bg-gray-500 aspect-squar ${value?.sold&&'hidden'}`} >
			<figure><img src={value?.picture?value?.picture:"https://placeimg.com/400/225/arch"}  alt="Shoes" style={{height:'182px'}} className='w-full'/></figure>
				<div className="card-body">
				  <h2 className="card-title text-black">{value?.productName} <div className="badge badge-outline">{value?.condition}</div></h2>
				  <p>{value?.location}, {value?.category}</p>
				  <h1 className='font-bold text-info'>Tk {value?.reSalePrice} </h1>
			  </div>
			  </div>
		})}

		</div>
	</div>
</section>
    );
};

export default Advertisement;