import React from 'react';
import image from "../assets/images/m1.jpg";

export const EventDetails = () => {

    const genres=["Creative", "Motivation"];

  return (
    <div>
        <section className="flex flex-row gap-24  flex-wrap py-16 min-h-screen w-full ">
        <div className="">
          <img className="rounded h-3/4 w-96 shadow-xl shadow-white" src={image} alt="..."/>
        </div>
        <div className="max-w-2xl text-lg text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">This is a title</h1>
          <p className="my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus saepe nam possimus quasi illum cum beatae velit est fugiat praesentium!</p>
           
              <p className="my-7 flex flex-wrap gap-2">
              { genres.map((genre) => (
                <span className="mr-2 border  rounded border-gray-600 p-2" >{genre}</span>
              )) }
            </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Event Duration : </span>
            <span>60 min.</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Prizes : </span>
            <span>Certificate</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Venue : </span>
            <span>ABESIT campus</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Date : </span>
            <span>25-11-2024</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Register : </span>
            <a href="#" target="_blank" rel="noreferrer">Click here</a>
          </p>

        </div>
      </section>
    </div>
  )
}
