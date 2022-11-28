import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import { useForm } from "react-hook-form";
import { GET, POST } from "../../Utilities/RequestObjects";


const Login = () => {
	const {signInWithEmail,signInWithGoogle,signInWitGit} = useContext(AuthContext);
	const [wrong,setWrong] = useState('');
	const navigate = useNavigate();
	const { register,reset, handleSubmit, formState: { errors } } = useForm();
	const location = useLocation();
	const To = location?.state?.from||'/';

	const onSubmit = data =>{
	reset();
//
	
	signInWithEmail(data.email,data.password)
    .then(({user})=>{
      if(user&&user.uid){
		////	Start				
		GET(`/jwt?email=${user.email}`)
		.then(res=>{
			localStorage.setItem("accessToken",`Bearer ${res.data.accessToken}`);
		})
		.catch(err=>{
			console.log(err);
		})
		/// End
		navigate(To,{replace:true});
      }
      else{
        alert("please try again later");
      }
    })
    .catch(err=>{
      if(err.message==="Firebase: Error (auth/wrong-password)."){
       setWrong("Wrong password");
      }
      else{
        alert("something went wrong please try agein later");
      }
    })
	}

	

	const handleSignInGoogle = () =>{
		signInWithGoogle()
		.then(({user})=>{
		  if(user&&user.uid){
			//start
			//save to database start
				POST('/createaccount',{name:user.displayName,email:user.email,uid:user.uid,role:"Buyer",verified:false})
				.then(res=>{
					if(res.data.acknowledged){
////	Start				
						GET(`/jwt?email=${user.email}`)
						.then(res=>{
							localStorage.setItem("accessToken",`Bearer ${res.data.accessToken}`);
						})
						.catch(err=>{
							console.log(err);
						})

	/// End
						reset();
						navigate(To,{replace:true});
					}
					else{
						alert("Something went wrong please try again later");
					}
				})
				.catch(err=>{
					console.log(err);
				})
				///end	
		  }
		  else{
			alert("please try again later");
		  }
		})
		.catch(err=>{
			alert("something went wrong please try agein later");
			console.log(err)
		})
	  }



    return (
        <div className='flex items-center flex-col my-10'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit(onSubmit)}>
		<div className="space-y-1 text-sm">
			<label for="email" className="block dark:text-gray-400">Email</label>
			<input type="email" name="email" id="email" placeholder="Email" {...register("email", { required: true })} className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block dark:text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" {...register("password", { required: true })} className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			<div className="flex justify-end text-xs dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign in</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4 rounded-xl">
		<button aria-label="Log in with Google" className="btn btn-outline rounded-xl p-3 border w-full flex items-center justify-center" onClick={handleSignInGoogle}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<span className="mx-2">Google</span> 
		</button>
	</div>
	<p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
		<a rel="noopener noreferrer" href="/register" className="underline dark:text-gray-100">Sign up</a>
	</p>
</div>
        </div>
    );
};

export default Login;