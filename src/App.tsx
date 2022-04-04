import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Courses from './Components/Courses/Courses';
import Error from './Components/Error/Error';
import Home from "./Components/Home/Home"
import Profile from './Components/Profile/Profile';
import Wishlist from './Components/Wishlist/Wishlist';
import './App.css';
import CourseDisplay from './Components/CourseDisplay/CourseDisplay';
import CardStateProvider from './Components/Context/CardStateProvider';

function App() {
  return (
    <CardStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='courses' element={<Courses />} />
            <Route path='profile' element={<Profile />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='courses/:id' element={<CourseDisplay />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CardStateProvider>
    
  );
}

export default App;
