import React from 'react'
import {HeroContainer} from "./components/HeroContainer";
import { PopularEvents } from './components/PopularEvents';

export const Home = () => {
  return (
    <div>
        <HeroContainer />
        <PopularEvents />
    </div>
  )
}
