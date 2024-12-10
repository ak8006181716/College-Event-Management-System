import React from 'react';
import { Link } from 'react-router-dom';
import {EventCard} from "../../components/Elements/EventCard"

export const OrganizerView = () => {
  return (
    <div className='min-h-screen'>
      <div>
        <h1 className='text-3xl pt-16 pl-16 text-white font-bold'>Your Events</h1>
        <div className='flex flex-row flex-wrap gap-12 justify-center items-center py-16'>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      </div>
      </div>
      <div className='text-right animate-bounce pr-16 pb-12'>
      <Link to="/addEvents" class="relative rounded-full  p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-2xl">
                    <span class="w-28 h-24 rounded-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute "></span>
                    <span class="relative text-white p-6 text-xl">+</span>    
      </Link>
      </div>
    </div>
  )
}
