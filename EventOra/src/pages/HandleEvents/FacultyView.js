import React from 'react';
import { EventCard } from '../../components';

export const FacultyView = () => {
  return (
    <div className='min-h-screen'>
      <div>
        <div className='w-full flex pt-16 flex-row justify-between px-16 flex-wrap'>
        <h1 className='text-3xl text-white font-bold'>Events for Verification</h1>
        <h1>1234</h1>
        </div>
        <div className='flex flex-row flex-wrap gap-12 justify-center items-center py-16'>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      </div>
      </div>
    </div>
  )
}
