import React, { useContext } from 'react';
import Products from './Products/Products';
import {useQuery} from '@tanstack/react-query';
import { GET } from '../../Utilities/RequestObjects';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const Category = () => {
    const {user} = useContext(AuthContext)
    const params = useParams();
    const {data,isLoading,refetch} = useQuery({ 
        queryKey: ['products',user?.uid], 
        queryFn: ()=>GET(`/products/${params.id}?uid=${user?.uid}`) 
    })
    
return (
<section>
	<div className="dark:bg-violet-400">
		<div className="container flex flex-col px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className='text-2xl text-left -mt-10 mb-10 text-white'>Home{">"}{data?.data[0].category}</h1>
			<h1 className="text-5xl text-left font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">{data?.data[0].category}</h1>
		</div>
	</div>
    <div className=" w-full lg:w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" >
        <Products data={data} refetch={refetch}></Products>
    </div>
</section>
    );
};

export default Category;