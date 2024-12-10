import { Link } from "react-router-dom";
import m1 from "../../../assets/images/m1.jpg";
import m2 from "../../../assets/images/m2.jpg"

export const HeroContainer = () => {
  return (
    <section className="flex flex-col min-h-80 lg:flex-row gap-16 items-center text-white p-14 m-auto bg-black ">
        <div className="text my-5 ">
            <h1 className="text-5xl mt-6 font-bold">Manage Your Events</h1>
            <p className="text-2xl my-12 px-1 ">Revolutionize the way college events are managed!Effortlessly organize, track, and execute with precision.</p>
            <Link to="eventList" type="button" className="text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none">Explore Events</Link>
        </div>
        <div className="visual my-5">
            <img className="rounded-lg  h-72   shadow-xl " src={m1} alt="main-section" />
        </div>
    </section>
  )
}

