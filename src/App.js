import React,{useEffect} from "react"; 
import {gsap} from "gsap";
import "./App.scss"
import Header from "./components/Header";
import Home from "./pages/Home";


function App() {
useEffect(()=>{
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("vh", `${vh}px`);
  gsap.to("body", 0, {css:{visibility:"visible"}});
});
  return (
    <>
      <Header/>
      <Home/>
    </ >
  );
}

export default App;
