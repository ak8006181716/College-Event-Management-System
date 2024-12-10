import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import {Home,EventList,EventDetails} from "../pages";
import { LoginAsOrganizer,LoginAsFaculty,LoginAsAttendee} from "../pages/Login";
import { RegisterAsOrganizer,RegisterAsFaculty,RegisterAsAttendee} from "../pages/Register";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";
import { AddEvents,OrganizerView,VerifyEvents,FacultyView } from '../pages/HandleEvents';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' end element={<Home/>}/>
        <Route path='/eventList'  element={<EventList/>}/>
        <Route path='/eventDetails'  element={<EventDetails/>}/>
        <Route path='/login' element={<Login />}>
          <Route path="loginAsFaculty"  element={<LoginAsFaculty/>} />
          <Route path="loginAsOrganizer" element={<LoginAsOrganizer/>} />
          <Route path="loginAsAttendee" end element={<LoginAsAttendee/>} />
        </Route>
        <Route path='/register' element={<Register />}>
          <Route path="registerAsFaculty" element={<RegisterAsFaculty/>} />
          <Route path="registerAsOrganizer" element={<RegisterAsOrganizer/>} />
          <Route path="registerAsAttendee" end element={<RegisterAsAttendee/>} />
        </Route>
        <Route path='/organizerView' element={<OrganizerView/>}/>
        <Route path="/addEvents" element={<AddEvents/>}/>
        <Route path='/facultyView' element={<FacultyView/>}/>
        <Route path='/verifyEvents' element={<VerifyEvents/>}/>
    </Routes>
  )
}

