import React from 'react';
import { EventCard } from '../../../components';
import gsap from "gsap";
import{ useGSAP} from "@gsap/react";
import { useRef} from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const PopularEvents = () => {
  const helo1 = useRef();
  const helo2 = useRef();
  const helo3 = useRef();
  const helo4 = useRef();
  const helo5 = useRef();
  const helo6= useRef();
  
  useGSAP(()=>{
    
    gsap.from(helo1.current,{
     y:-100,
     opacity:0,
     delay:0.3,
      duration:1,
      stagger:0.2,
      
      scrollTrigger:(helo1.current,{
        trigger:helo1.current,
        start:"top 75%"
      })

    })


    gsap.from(helo2.current,{
      x:-100,
      opacity:0,
      delay:0.3,
       duration:1,
       stagger:0.2,
       
       scrollTrigger:(helo2.current,{
         trigger:helo2.current,
         start:"top 75%"
       })
 
     })


     gsap.from(helo3.current,{
      y:100,
      opacity:0,
      delay:0.3,
       duration:1,
       stagger:0.2,
       
       scrollTrigger:(helo3.current,{
         trigger:helo3.current,
         start:"top 75%"
       })
 
     })


     gsap.from(helo4.current,{
      y:-100,
      opacity:0,
      delay:0.3,
       duration:1,
       stagger:0.2,
       
       scrollTrigger:(helo4.current,{
         trigger:helo4.current,
         start:"top 75%"
       })
 
     })

    
     gsap.from(helo5.current,{
      x:-100,
      opacity:0,
      delay:0.3,
       duration:1,
       stagger:0.2,
       
       scrollTrigger:(helo5.current,{
         trigger:helo5.current,
         start:"top 75%"
       })
 
     })

     gsap.from(helo6.current,{
      y:100,
      opacity:0,
      delay:0.3,
       duration:1,
       stagger:0.2,
       
       scrollTrigger:(helo6.current,{
         trigger:helo6.current,
         start:"top 75%"
       })
 
     })

 })


  return (
    <div className='flex flex-col p-16 items-center '>
        <p className='self-ceter text-4xl my-8 text-white'>Popular Events</p>
        <div  className='flex flex-row gap-12 flex-wrap max-w-7xl justify-center list-none py-4'>
          <li ref={helo1}>
            <EventCard/>
            </li>
            <li ref={helo2}>
            <EventCard/>
            </li>
            <li ref={helo3}>
            <EventCard/>
            </li>
            <li ref={helo4}>
            <EventCard/>
            </li>
            <li ref={helo5}>
            <EventCard/>
            </li>
            <li ref={helo6}>
            <EventCard/>
            </li>
        </div>
    </div>
  )
}
