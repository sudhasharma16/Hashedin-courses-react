import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Home: React.FC = () =>  {
  return (
      <>
        <Navbar />
        
        <section className='section'>
            <Outlet />
        </section>
      </>
    
  )
}

export default Home
