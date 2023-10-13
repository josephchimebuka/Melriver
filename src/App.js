import React,{useEffect, useState} from "react"; 
import {gsap} from "gsap";
import "./App.scss"
import Header from "./components/Header";
import Home from "./pages/Home";
import CaseStudies from './pages/CaseStudies'
import About from "./pages/About";
import Services from "./pages/Services";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation";
import LutricsBox from "./pages/lutricsBox";
import LutricsEdu from "./pages/lutricsEdu";
import LutricsAgric from "./pages/lutricsAgric";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimension, setDimensions] =  useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
useEffect(()=>{
  gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
});


const routes=[
   {path: '/', name: 'Home', Component: <Home/>},
   {path: '/casestudies', name: 'CaseStudies', Component: <CaseStudies/>},
   {path: '/about', name: 'About', Component: <About/>},
   {path: '/services', name: 'Services', Component: <Services/>},
   {path: '/lutricsBox', name: 'Lutrics Box', Component: <LutricsBox/>},
   {path: '/lutricsEdu', name: 'Lutrics Edu', Component: <LutricsEdu/>},
   {path: '/lutricsAgric', name: 'Lutrics Agric', Component: <LutricsAgric/>}
]


  return (
    <>
      <Header dimension={dimension}/>
      <div className="App">
        <Routes>

        {
          routes.map(({path, Component})=> (       
            <Route key={path} exact path={path} element={Component}/>
          ))
        }
        </Routes>
      </div>
      <Navbar/>
    </ >
  );
}


export default App;
