import React from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

export const AddEvents = () => {

    const navigate=useNavigate();

    async function handleEvents(event) {
        try{
          event.preventDefault();

          const authDetail={ 
            organizer_id:event.target.organizer_id.value,
            event_name:event.target.event_name.value,
            short_description:event.target.short_description.value,
            long_description:event.target.long_description.value,
            event_memebers:event.target.event_members.value,
            date:event.target.date.value,
            time:event.target.time.value,
            duration:event.target.duration.value,
            location:event.target.location.value,
            poster_link:event.target.poster_link.value,
            faculty_id:event.target.faculty_id.value,
            registration_link:event.target.registration_link.value,
            status:event.target.status.value
          }

          const url="http://localhost:8080/events/addEvents";
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(authDetail),
          })
          const data = await response.json();
          if(data.success){
            toast.success('Event added Successfully');
          }
          data.success?navigate("/OrganizerView"):toast.error(data.message);
        }
        catch(error){
          toast.error(error.message);
        }
    }


  return (
    <div class="w-full min-h-screen m-16 w-10/12  rounded-lg shadow border bg-gray-800 border-gray-700 shadow-2xl shadow-stone-700">
          <div class="p-6 space-y-4 ">
              <h1 class="text-xl p-6 font-bold leading-tight tracking-tight  md:text-2xl text-white">
                  Add New Event
              </h1>
              <form class="space-y-6 flex flex-col gap-6 " onSubmit={handleEvents}>

                  <div>
                      <input type="hidden" name="organizer_id" id="organizer_id" value={JSON.parse(sessionStorage.getItem("id"))} class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com"/>
                  </div>

                  <div>
                      <label for="event_name" class="block mb-4 text-sm font-medium text-white">Event Name</label>
                      <input type="name" name="event_name" id="event_name" class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>

                  <div>
                      <label for="short_description" class="block mb-4 text-sm font-medium text-white">Short description about event</label>
                      <input type="name" name="short_description" id="short_discription" class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="10-20 words" required="" />
                  </div>

                  <div>
                      <label for="Long_description" class="block mb-4 text-sm font-medium text-white">Long description about event</label>
                      <input type="name" name="long_description" id="long_discription" class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Describe in detail" required="" />
                  </div>

                  <div>
                      <label for="event_members" class="block mb-4 text-sm font-medium text-white">Members Detail</label>
                      <input type="name" name="event_members" id="short_discription" class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Rohit,Mohit" required="" />
                  </div>

                  <div>
                      <label for="Date" class="block mb-4 text-sm font-medium text-white">Event Date</label>
                      <input type="date" name="date" id="date" class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="01-04-2025" required="" />
                  </div>

                  <div>
                      <label for="time" class="block mb-4 text-sm font-medium text-white">Event Timing</label>
                      <input type="name" name="time" id="time" class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="9 AM" required="" />
                  </div>

                  <div>
                      <label for="duration" class="block mb-4 text-sm font-medium text-white">Event Duration</label>
                      <input type="name" name="duration" id="duration" class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="2 hours" required="" />
                  </div>

                  <div>
                      <label for="location" class="block mb-4 text-sm font-medium text-white">Event Location</label>
                      <input type="name" name="location" id="location" class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="College Auditorium" required="" />
                  </div>

                  <div>
                      <label for="poster" class="block mb-4 text-sm font-medium text-white">Event Poster Link</label>
                      <input type="name" name="poster_link" id="poster_link" class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="" required="" />
                  </div>

                  <div>
                      <label for="faculty_id" class="block mb-4 text-sm font-medium text-white">Faculty Id</label>
                      <input type="name" name="faculty_id" id="faculty_id" class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="" required="" />
                  </div>

                  <div>
                      <label for="registration_link" class="block mb-4 text-sm font-medium text-white">Registration Form Link</label>
                      <input type="name" name="registration_link" id="registration_link" class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="" required="" />
                  </div>
                  
                  <div>
                      <input type="hidden" name="status" id="status" value={false} class=" border  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"   />
                  </div>
                  <button type='submit'  class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-2xl">
                    <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute "></span>
    
                    <span class="relative text-white p-2 text-xl">Submit</span>
               
                </button>
              </form>
          </div>
      </div>
  )
}

// private String id;
// private String event_name;
// private String event_short_description;
// private String event_Long_description;
// private String event_date;
// private String event_time;
// private int event_duration;
// private String event_location;
// private String event_poster;
// private String event_organizer_id;
// private String event_faculty_id;
// private String event_status;
// private String event_type;
// private String event_registration_link;