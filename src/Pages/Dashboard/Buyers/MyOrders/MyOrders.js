import React, { useContext } from 'react';
import OrderedCard from './OrderedCard/OrderedCard';
import { useQuery } from '@tanstack/react-query';
import { GET } from '../../../../Utilities/RequestObjects';
import { AuthContext } from '../../../../Context/Context';

const MyOrders = () => {
    const {user,loading} = useContext(AuthContext);

    const {data,isLoading,refetch} = useQuery({ 
        queryKey: ['book'],
        queryFn:()=> GET(`/book/${user?.uid}`)
    });
    

    if(!isLoading&&!loading&&data){
    return (
    <section className="py-6">
        <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">

                {data?.data.map(value=><OrderedCard key={value._id} value={value} isLoading={isLoading}></OrderedCard>)}
                
            </div>
        </div>
    </section>
    );
};
 return <></>;
}

export default MyOrders;