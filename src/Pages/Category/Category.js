import React from 'react';
import Products from './Products/Products';

const Category = () => {
    return (
<section>
	<div className="dark:bg-violet-400">
		<div className="container flex flex-col px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className='text-2xl text-left -mt-10 mb-10 text-white'>Home{">"}CatagoryName</h1>
			<h1 className="text-5xl text-left font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Photography</h1>
		</div>
	</div>
    <div className=" w-full lg:w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" >
        <Products></Products>
    </div>
</section>
    );
};

export default Category;