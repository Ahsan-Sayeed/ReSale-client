import React from 'react';

const GetUpdate = () => {
    return (
        <div className="w-full my-32 py-10" style={{backgroundColor:'black'}}>
	<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
		<h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">Get Our Updates</h1>
		<p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Get top deals, latest trends, and more.</p>
		<div className="flex flex-row mb-8">
			<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3 " />
			<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-success dark:text-gray-900">Subscribe</button>
		</div>
	</div>
</div>
    );
};

export default GetUpdate;