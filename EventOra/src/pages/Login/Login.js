import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Login = () => { 
  return (
    <div className='min-h-screen pt-28 flex flex-col items-center w-10/12'>
   <nav class="w-full p-12 text-xl" aria-label="Breadcrumb " >
        <ol class=" w-full justify-evenly inline-flex flex flex-row  space-x-1 md:space-x-2 rtl:space-x-reverse">
         <li class="inline-flex items-center">
         <div class="flex items-center">
             <Link to="loginAsAttendee"  class="ms-1  font-medium text-gray-700 hover:text-blue-600 md:ms-2 text-gray-400 hover:text-white active:text-white">As Attendee</Link>
          </div>
        </li>
        <li>
            <div class="flex items-center">
             <Link to="loginAsOrganizer" class="ms-1  font-medium text-gray-700 hover:text-blue-600 md:ms-2 text-gray-400 hover:text-white active:text-white">As Organizer</Link>
             </div>
        </li>
        <li aria-current="page">
        <div class="flex items-center">
             <Link to="loginAsFaculty"  class="ms-1  font-medium text-gray-700 hover:text-blue-600 md:ms-2 text-gray-400 hover:text-white active:text-whte">As Faculty</Link>
             </div>
        </li>
     </ol>
    </nav>
      <div className='w-full flex flex-col justify-center items-center'>
        <Outlet/>
      </div>
    </div>
  )
} 
