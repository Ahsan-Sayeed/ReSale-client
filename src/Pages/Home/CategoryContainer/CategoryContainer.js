import React from "react";
import Card from "./Card/Card";
import {GET} from '../../../Utilities/RequestObjects';
import {useQuery} from '@tanstack/react-query'
import LoadingRound from "../../../Shared/LoadingRound/LoadingRound";

const CategoryContainer = () => {
  const {data,isLoading} = useQuery({
    queryKey:['category'],
    queryFn:() => GET('/category')
  }) 

  if(isLoading){
    return <LoadingRound/>
  }

  return (
    <div className="flex items-center justify-center flex-col p-10">
      <h1 className="text-3xl my-5">Categories</h1>
      
     <section className="py-6">
	  <div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
      {
        data?.data.map((value,idx)=><Card title={value.category} id={value._id} key={value.idx}></Card>)
      }
        </div>
	</div>
  </section>
    </div>
  );
};

export default CategoryContainer;
