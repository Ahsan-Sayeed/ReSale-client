import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Context/Context';
import { POST } from '../../../../Utilities/RequestObjects';

const AddAProduct = () => {
	const {user,userServer} = useContext(AuthContext);
	const { register, handleSubmit,reset, formState: { errors } } = useForm();
	

	const onSubmit = data => {
		const {condition,description,location,orginalPrice,phoneNumber,picture,productName,
			   reSalePrice,sellerName,yearsOfPurches,yearsOfUse,category} = data;
			
			//image hosting
			const formData = new FormData();
			const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageHostingApi}`;
			formData.append('image',picture[0]);
			fetch(url,{
				method:'POST',
				body: formData
			})
			.then(res=>res.json())
			.then(res=>{
				if(res.status===200){
					POST('/seller/products',{picture:res.data.display_url,condition,description,location,orginalPrice,phoneNumber,productName,
						reSalePrice,sellerName,yearsOfPurches,yearsOfUse,category,advertise:false,sold:false,
						sellerName:userServer.name,sellerEmail:userServer.email,sellerUID:userServer.uid,role:userServer.role})
						.then(res=>{
							if(res.data.acknowledged){
								reset();
								alert('Product added');
							}
						})
						.catch(err=>{
							console.log(err);
						})
				}
				else{
					alert('something went wrong');
				}
			})
			.catch(err=>{
				console.log(err)
			})
			//end of image hosting
	}

	// console.log(user,userServer);
    return (
<section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Products information</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="productName" className="text-sm">Products Name</label><br />
					<input type="text" id='productName' 
					placeholder="Products Name" 
					className="input input-bordered w-full max-w-xs"
					{...register("productName", { required: true })}
					/>
					<br />
					<label htmlFor="productCategory" className="text-sm">Products Category</label><br />
					<select id='condition' className="select select-bordered w-full max-w-xs" 
					{...register("category", { required: true })}>
						<option selected>Bed Room</option>
						<option>Kitchen</option>
						<option>Dinig Room</option>
					</select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="orginalPrice" className="text-sm">Orginal Price</label><br />
					<input type="number" id='orginalprice' placeholder="Orginal Price" 
					className="input input-bordered w-full max-w-xs" 
					{...register("orginalPrice", { required: true })}
					/><br />
					<label htmlFor="resaleprice" className="text-sm">Re-sale Price</label><br />
					<input type="number" id='resaleprice' placeholder="Re-sale price" 
					className="input input-bordered w-full max-w-xs" 
					{...register("reSalePrice", { required: true })}
					/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="yearsofuse" className="text-sm">Years of use</label><br />
					<input type="text" id='yearsofuse' placeholder="Years of use" 
					className="input input-bordered w-full max-w-xs" 
					{...register("yearsOfUse", { required: true })}
					/>
					<br />
					<label htmlFor="yearsofpurches" className="text-sm">Years of purches</label><br />
					<input type="text" id='yearsofpurches' placeholder="Years of purches" 
					className="input input-bordered w-full max-w-xs" 
					{...register("yearsOfPurches", { required: true })}
					/>
				</div>
				<div className="col-span-full">
					<label htmlFor="condition" className="text-sm">Condition Type</label><br />
					<select id='condition' className="select select-bordered w-full max-w-xs" 
					{...register("condition", { required: true })}>
						<option selected>Excellent</option>
						<option>Good</option>
						<option>Fair</option>
					</select>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="picture" className="text-sm">Picture</label>
					<input type="file" id='picture' className="file-input file-input-bordered w-full max-w-xs" 
					{...register("picture", { required: true })}
					/>
					<br />
					<label htmlFor="desc" className="text-sm">Description</label><br />
					<textarea id='desc' className="textarea textarea-bordered w-full" placeholder="Description.."
					{...register("description", { required: true })}
					></textarea>
				</div>
			</div>
		</fieldset>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Sellers information</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="sellername" className="text-sm">Seller Name</label><br />
					<input type="text" id='sellername' placeholder="Seller Name" 
					className="input input-bordered w-full max-w-xs" 
					{...register("sellerName", { required: true })}
					/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="phoneNumber" className="text-sm">Mobile</label><br />
					<input type="text" id='phoneNumber' placeholder="Mobile" 
					className="input input-bordered w-full max-w-xs" 
					{...register("phoneNumber", { required: true })}
					/>
				</div>
				<div className="col-span-full">
					<label htmlFor="location" className="text-sm">Location</label><br />
					<textarea id='location' className="textarea textarea-bordered w-full" 
					placeholder="Location.."
					{...register("location", { required: true })}
					></textarea>
				</div>
				<div className="col-span-full">
					<div className="flex items-center space-x-2">
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</div>
			</div>
		</fieldset>
	</form>
</section>
    );
};

export default AddAProduct;