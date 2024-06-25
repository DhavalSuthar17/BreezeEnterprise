import { useState } from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Products from './components/Products';
import About from './components/About';

import './App.css';


function App() {

  const[isMenuOpen , setIsMenuOpen] = useState(false);


//  function to control the humburger menu using usestate hook
   function humMenu(){

    setIsMenuOpen(!isMenuOpen);

   }  


  // function for scrolling to the particulat part 

  const scrollToSection = (id) =>  {

    const element = document.getElementById(id);

    if(element){
      element.scrollIntoView({behavior:'smooth'});
    }

  };


  //function to handle menu and scroll both at same time 

  const handleMenuandScroll = (id) => {
    humMenu()
    scrollToSection(id)
    
    
  }


  return (
    <div className="App overflow-x-hidden">
       <Navbar handleMenuandScroll={handleMenuandScroll} scrollToSection={scrollToSection} 
      humMenu={humMenu} 
       isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <MainSection />
      <Products  />
      <About/>
      
    </div>
  );
}

export default App;
