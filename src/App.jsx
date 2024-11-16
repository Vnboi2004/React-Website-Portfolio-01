import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Pricing from './components/Pricing/Pricing';
import Testimonial from './components/Testimonial/Testimonial';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import 'remixicon/fonts/remixicon.css';
import './App.css';
const App = () => {
  return (
    <>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Service/>
        <Resume/>
        <Portfolio/>
        <Pricing/>
        <Testimonial/>
        <Blog/>
        <Contact/>
      </main>
    </>
  )
}

export default App
