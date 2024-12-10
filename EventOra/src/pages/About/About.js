import React from 'react'
import m1 from '../../assets/images/m1.jpg'
import helpdesk from '../../assets/images/help-desk.png'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
export const About = () => {
  
  useGSAP(()=>{
    let tl=gsap.timeline()
    tl.from(".pic",{
      x:-100,
      duration:0.8,
      delay:0.5,
      opacity:0,

    })
    tl.from(".heading",{
      x:100,
      opacity:0,
      duration:1,
      stagger:0.3
    })
    tl.from(".down",{
      y:100,
      opacity:0,
      duration:1,
      
    })
    gsap.from(".Scrollbar",{
      x:-200,
      duration:2,
      opacity:0,
      stagger:0.3,
      scrollTrigger: {
        trigger: ".Scrollbar", // Element to trigger animation
           // Smoothly animate on scroll
      }
    })
  
   
  })
  



  
    const cardData = [
      {
        title: "Rahul Kashyap",
        role: "Backend Developer",
        description: "Rahul is responsible for designing and implementing the server-side architecture for EventOra. He ensures the APIs are efficient, secure, and scalable.",
        image: helpdesk,
        
      },
      {
        title: "Anshu Kumar",
        role: "Backend Developer",
        description: "Anshu focuses on database design and optimization for EventOra. She ensures data integrity and seamless communication between the backend and frontend",
        image: helpdesk,
      },
      {
        title: "Ankit Kumar",
        role: "Frontend Developer",
        description: "Ankit leads the frontend development of EventOra, crafting an intuitive and visually appealing user interface using modern frameworks like React.",
        image: helpdesk,
      }
    ]

  return (
    <headmain className='bg-white w-full mt-16'>

      <main className='mt-12 text-center text-stone-600' >
        <h1 className='text-4xl font-bold m-4'>ABOUT-US</h1>
        <div className='w-full bg-slate-300 pt-10'>
          <h1 className=' pic text-4xl font-bold text-left pl-10'>
            DISCOVER EPIC EVENTS BY EventOra
          </h1>
          <div className='flex flex-col'>
            <div className='flex'>
              <img src={helpdesk} className=' pic w-6/12 pt-6 pl-10 p-2 '></img>
              <sometext>
                <div className= ' heading bg-white text-left h-32  m-10 rounded-md'>
                  <p className='m-3 font-extrabold'>
                    Epic Events by Booth, Inc.
                  </p>
                  <p className='m-3'>
                    From dream to reality, every event with us transforms into a memorable affair. Let Epic Events craft your perfect moment.
                  </p>

                </div>


                <div className=' heading bg-white text-left h-32  m-10 rounded-md'>
                  <p className='m-3 font-extrabold'>
                    Professional Touch, Personal Experience
                  </p>
                  <p className='m-3'>
                    Every event we manage is a blend of precision and passion. We ensure moments that linger in memories, creating experiences that stand out. </p>

                </div>


                <div className='heading bg-white text-left h-32  m-10 rounded-md'>
                  <p className='m-3 font-extrabold'>
                    Stay Updated With Epic News
                  </p>
                  <p className='m-3'>
                    Journey into the heart of event planning through our blog. Discover insights, tips, and the latest updates to inspire and inform. </p>

                </div>
              </sometext>
            </div>
            <div className=' down bg-white text-left h-32  m-8 rounded-md'>
              <p className='m-3 font-extrabold'>
                Epic Events by Booth, Inc.
              </p>
              <p className='m-3'>
                From dream to reality, every event with us transforms into a memorable affair. Let Epic Events craft your perfect moment.
              </p>

            </div>



          </div>
        </div>
      </main>
    <h1 className='text-center text-4xl  font-extrabold text-stone-600 mt-10'>
    Meet The Minds Behind The EventOra
    </h1>
    <div className=" Scrollbar flex flex-wrap justify-center gap-8 p-8">
     {cardData.map((card, index) => (
        <div
          key={index}
          className=" w-72 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <img src={card.image}alt={"card.title"}className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-500 italic mb-2">{card.role}</p>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>


    </headmain>
  )
}
