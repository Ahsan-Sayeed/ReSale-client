import React from "react";
import Card from "./Card/Card";

const CategoryContainer = () => {
  return (
    <div className="flex items-center justify-center flex-col p-10">
      <h1 className="text-3xl my-5">Categories</h1>
      
     <section className="py-6">
	  <div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
	</div>
  </section>
    </div>
  );
};

export default CategoryContainer;
