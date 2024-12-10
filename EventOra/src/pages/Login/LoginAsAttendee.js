import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

export const LoginAsAttendee = () => {

    const navigate=useNavigate();

    async function handleLogin(event) {
        try{
          event.preventDefault();
          const authDetail={ 
            email:event.target.email.value,
            password:event.target.password.value
          }
          const url="http://localhost:8080/auth/loginAsAttendees/";
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(authDetail),
          })
          const data = await response.json();
          if(data.success){
            toast.success('Login Successful');
            sessionStorage.setItem("id", JSON.stringify(data.id) );
            sessionStorage.setItem("type",JSON.stringify(data.type) );
          }
          data.success?navigate("/"):toast.error(data.message);
        }
        catch(error){
          toast.error(error.message);
        }
    }

  return (
    <div class="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 shadow-2xl shadow-stone-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                      <input type="email" name="email" id="email" class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required="" />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <Link to="#" class="text-sm font-medium hover:underline text-gray-300">Forgot password?</Link>
                  </div>
                  <button type="submit" class="w-full text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-400">
                      Don’t have an account yet? <Link to="/register" class="font-medium  hover:underline text-primary-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  )
}
