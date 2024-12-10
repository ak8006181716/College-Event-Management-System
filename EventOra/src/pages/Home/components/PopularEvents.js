import React from 'react';
import { EventCard } from '../../../components';



export const PopularEvents = () => {
  return (
    <div className='flex flex-col p-16 items-center'>
        <p className='self-ceter text-4xl my-8 text-white'>Popular Events</p>
        <div className='flex flex-row gap-12 flex-wrap max-w-7xl justify-center py-4'>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
    </div>
  )
}
