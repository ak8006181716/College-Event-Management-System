import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

export const RegisterAsAttendee = () => {

  const navigate=useNavigate();

    async function handleRegister(event) {
        try{
          event.preventDefault();
          const authDetail={ 
            name:event.target.name.value,
            email:event.target.email.value,
            password:event.target.password.value
          }
          const url="http://localhost:8080/auth/registerAsAttendees/";
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(authDetail),
          })
          const data = await response.json();
          if(data.success){
            toast.success('Registration Successful');
          }
          data.success?navigate("/login"):toast.error(data.message);
        }
        catch(error){
          toast.error(error.message);
        }
    }

  return (
    <div class="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 shadow-2xl shadow-stone-700">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
            Create new account
        </h1>
        <form class="space-y-4 md:space-y-6" onSubmit={handleRegister}>
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-white">Your Name</label>
                <input type="name" name="name" id="name" class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" autoComplete='off'/>
            </div>
            
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-white">Email</label>
                <input type="email" name="email" id="email" placeholder="rohan123#gmail.com" class="border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" autoComplete='off'/>
            </div>

            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                <input type="password" name="password" id="number" placeholder="*********" class="border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
            </div>
           
            <button type="submit" class="w-full text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Sign in</button>
            <p class="text-sm font-light text-gray-400">
                Already have an account yet? <Link to="/login" class="font-medium  hover:underline text-primary-500">Sign in</Link>
            </p>
        </form>
    </div>
</div>
  ) 
}
