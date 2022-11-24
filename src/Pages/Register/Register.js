import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import { useForm } from "react-hook-form";

const Register = () => {
	const {createUser,updateUser} = useContext(AuthContext);
	const navigate = useNavigate();
	const { register,reset, handleSubmit, formState: { errors } } = useForm();
	
	const onSubmit = data =>{
		console.log(data,errors.message);
		reset();

	const obj = {displayName:data.fullName||"Anynomus"} 
    createUser(data.email,data.password)
    .then(({user})=>{
      if(user&&user.uid){
        updateUser(obj)
        .then(()=>{
        //   SetToken(user.email);
          alert("account created succesfully");
		  console.log(user);
        //   navigate(changer,{replace:true});
        })
        .catch(err=>{
          console.log(err);
        })
      }
      else{

      }
    })
    .catch(err=>{
      // error message here
      if(err.message==='Firebase: Error (auth/email-already-in-use).'){
        alert("Account already in use");
      }
    })


	}
  


    return (
        <div className="flex flex-col items-center my-10">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
		<h1 className="text-2xl font-bold text-center">Sign Up</h1>
		<form className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-1 text-sm">
				<label htmlFor="fullName">User Name</label>
			<input type="text" id='fullName' placeholder="Full Name" className="input input-bordered w-full" {...register("fullName", { required: true })} />
			</div>
			<div className="space-y-1 text-sm">
				<label htmlFor="email">Email</label>
			<input type="email" id='email' placeholder="Email" className="input input-bordered w-full" {...register("email", { required: true })} />
			</div>
			<div className="space-y-1 text-sm">
				<label htmlFor="pass">Password</label>
			<input type="password" id='pass' placeholder="Password" className="input input-bordered w-full" {...register("password", { required: true })} />
			</div>
			<div className="space-y-1 text-sm">
				<label htmlFor="identity">Account</label>
				<select id='identity' className="select select-bordered w-full" {...register("optionSelect", { required: true })} >
				<option selected>Buyer</option>
				<option>Seller</option>
				</select>
			</div>
			<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400" type="submit">Sign Up</button>
	</form> 
	<p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
		<a rel="noopener noreferrer" href="/login" className="underline dark:text-gray-100">Sign In</a>
	</p>
</div>
        </div>
    );
};

export default Register;