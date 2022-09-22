import React, {useEffect} from "react"; 
import {gsap} from "gsap";
import "./App.scss"
import Banner from "./components/Banner";
import Cases from "./components/Cases";
import Header from "./components/Header";
import IntroOverlay from "./components/IntroOverlay";


function App() {
  useEffect(()=>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("vh", `${vh}px`);
    gsap.to("body", 0, {css:{visibility:"visible"}});
    //timeline
    let tl = gsap.timeline();

    tl.from(".line span",1.8,{
     y:100,
     ease:"Power4.Out",
     delay:2,
     skew:7,
     stagger:{
      amount:0.3
     }
    });
  },[]);
  return (
    <div className="App">
      <IntroOverlay/>
      <Header/>
      <Banner/>
      <Cases/>
    </div>
  );
}

export default App;
