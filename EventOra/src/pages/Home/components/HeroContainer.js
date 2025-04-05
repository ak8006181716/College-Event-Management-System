import { Link } from "react-router-dom";
import m1 from "../../../assets/images/m1.jpg";

import m3 from "../../../assets/images/bg-test1.jpg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export const HeroContainer = () => {
  
  useGSAP(()=>{
    let tl = gsap.timeline()
    tl.from(".heading",{
      x:-100,
      opacity:0,
      delay:0.5,
      duration:1,
      stagger:0.3
    })
    tl.from(".pera",{
      x:-100,
      opacity:0,
      duration:1,
      stagger:0.3
    })
    tl.from(".event",{
      x:-100,
      opacity:0,
      duration:0.5,
      stagger:0.3
    })
    gsap.from(".image",{
      x:100,
      opacity:0,
      delay:0.75,
      duration:1,
      stagger:0.3

    })
  })




  return (
    <section className="flex flex-col justify-between min-h-80 lg:flex-row bg-cover h-screen gap-8  items-center text-white p-14 m-auto " style={{ backgroundImage: `url(${m3})`}}>
        <div className="text my-5 ">
            <h1 className=" heading text-5xl mt-6 font-bold">Manage Your Events</h1>
            <p className=" pera text-2xl my-12 px-1 w-9/12 ">At EventOra, we believe in fostering a connected and thriving academic community. Our mission is to revolutionize college management by blending technology with innovation, ensuring every stakeholder enjoys a smooth, efficient, and collaborative experience.</p>
            <Link to="eventList" type="button" className=" event text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none">Explore Events</Link>
        </div>
        <div className="visual my-5 w-full">
            <img className=" image rounded-xl h-72 hover:s  shadow-xl " src={m1} alt="main-section" />
        </div>
    </section>
  )
}

