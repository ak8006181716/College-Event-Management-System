import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/m3.jpg";
import { Link } from "react-router-dom";

export const Header = () => {

  const [isSession,setSession]=useState(false);
  const navigate=useNavigate();

  function handleStorage(){
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("type");
    setSession(false);
    navigate("/");
  }

  useEffect(()=>{
    if(sessionStorage.getItem("id")){setSession(true)}
  },[sessionStorage.getItem("id")])

  return (
    <nav className="bg-black w-full flex-wrap min-h-20 flex gap-6 flex-row justify-between text-white items-center p-4 ">
       <div className=" flex flex-row items-center gap-4">
            <img src={logo} alt="" className="h-10 w-10 rounded-full" />
            <p className="text-3xl font-sans">EventOra</p>
       </div>
       <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
          <Link to="/" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-2xl">
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-5 py-2 transition-all ease-out bg-gray-900 rounded-2xl group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white text-sm">Home</span>
            </span>
          </Link>
          <Link to="eventList" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-2xl">
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-5 py-2 transition-all ease-out bg-gray-900 rounded-2xl group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white text-sm">Events</span>
            </span>
          </Link>
          {
          !isSession &&
           < Link to="login" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-2xl">
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-5 py-2 transition-all ease-out bg-gray-900 rounded-2xl group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white text-sm">Login</span>
            </span>
          </Link>
          }
          {
           isSession &&
           < Link onClick={handleStorage} to="/" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-2xl">
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-5 py-2 transition-all ease-out bg-gray-900 rounded-2xl group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white text-sm">Logout</span>
            </span>
          </Link>
          }

          <Link to="register" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-2xl">
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-5 py-2 transition-all ease-out bg-gray-900 rounded-2xl group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white text-sm">Register</span>
            </span>
          </Link>
       </div>
    </nav>
  )
}

