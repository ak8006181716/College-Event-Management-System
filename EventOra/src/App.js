import React from 'react';
import {Header,Footer} from "./components";
import { AllRoutes } from './routes/AllRoutes';

export const App = () => {
  return (
    <div className='min-h-screen bg-slate-900 flex flex-col items-center '>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}
