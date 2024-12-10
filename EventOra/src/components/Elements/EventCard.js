import React from 'react';
import image from "../../assets/images/m2.jpg";
import { Link } from 'react-router-dom';

export const EventCard = () => {
  return (
<div class="max-w-sm  border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700 shadow-2xl hover:border-white hover:shadow-white">
    <Link to="/eventDetails">
        <img class="rounded-t-lg w-full" src={image} alt="" />
    </Link>
    <div class="p-5">
        <Link to="/eventDetails">
            <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">Noteworthy technology acquisitions 2021</h5>
        </Link>
        <p class="mb-3 font-normal  text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Link to="/eventDetails" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-2xl">
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-5 py-2 transition-all ease-out bg-gray-900 rounded-2xl group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white text-sm">Read more</span>
            </span>
        </Link>
    </div>
</div>

  )
}
