import { useState, useEffect } from "react";

import './App.css'
import HeroLogo from './components/Herologo'
import Navbar from './components/Navbar'
import TrendingNews from "./components/TrendingNews";
import TrendingRepos from "./components/TrendingRepos";
import DevJokes from "./components/DevJokes";

function App() {
  
  const[showMainContent,setShowMainContent]=useState(false)

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setShowMainContent(true);
    },2500);
    return ()=>clearTimeout(timer);
  },[]);

  return (
    <>
      {!showMainContent ? (
        <HeroLogo />
      ) : (
        <div>
          <Navbar />
          
          <TrendingNews/>
          <TrendingRepos/>
          <DevJokes/>

          
        </div>
      )}
    </>
  );
}

export default App
