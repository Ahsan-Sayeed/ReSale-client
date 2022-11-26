import React, { useContext } from 'react';
import OrderedCard from './OrderedCard/OrderedCard';
import { useQuery } from '@tanstack/react-query';
import { GET } from '../../../../Utilities/RequestObjects';
import { AuthContext } from '../../../../Context/Context';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const {data,isLoading,refetch} = useQuery({ 
        queryKey: ['book',user?.uid],
        queryFn:()=> GET(`/book/${user?.uid}`)
    });


    return (
<section className="py-6 dark:bg-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			
            {data?.data.map(value=><OrderedCard key={value._id} value={value}></OrderedCard>)}
            
		</div>
	</div>
</section>
    );
};

export default MyOrders;