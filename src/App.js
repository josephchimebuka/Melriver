import React,{useEffect} from "react"; 
import {gsap} from "gsap";
import "./App.scss"
import Header from "./components/Header";
import Home from "./pages/Home";
import CaseStudies from './pages/CaseStudies'
import About from "./pages/About";
import Services from "./pages/Services";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation";

function App() {
useEffect(()=>{
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("vh", `${vh}px`);
  gsap.to("body", 0, {css:{visibility:"visible"}});
});
const routes=[
  {path: '/', name: 'Home', Component: <Home/>},
  {path: '/casestudies', name: 'CaseStudies', Component: <CaseStudies/>},
  {path: '/about', name: 'About', Component: <About/>},
   {path: '/services', name: 'Services', Component: <Services/>}
]
  return (
    <>
      <Header/>
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
