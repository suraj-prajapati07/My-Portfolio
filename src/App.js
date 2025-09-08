import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className='relative w-screen min-h-screen flex flex-col bg-slate-100'>
      <div className='fixed w-full z-50'>
        <Navbar/>
      </div>
      <div className='w-full relative mt-14 z-10'>
        <Home/>
        <About/>
        <Process/>
        <Services/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
        
    </div>
  );
}

export default App;
