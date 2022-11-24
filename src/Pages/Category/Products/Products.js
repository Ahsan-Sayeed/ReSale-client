import React from 'react';
import Modal from '../../../Shared/Modal/Modal';
import ProductCards from './ProductCards/ProductCards';

const Products = () => {
    return (
        <div>
        <section className="py-6">
            <p className="text-3xl m-5">Camera</p>   
           <div className="container flex flex-col justify-center p-4 mx-auto">
             <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <ProductCards></ProductCards>
                <ProductCards></ProductCards>
                <ProductCards></ProductCards>
                <ProductCards></ProductCards>
                <ProductCards></ProductCards>
                <ProductCards></ProductCards>
            </div>
	      </div>
          <Modal/>
       </section>
     </div>
    );
};

export default Products;