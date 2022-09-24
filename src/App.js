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

    // tl.from(".line span", 1.8,{
    //  y:90,
    //  ease:"power4.out",
    //  delay:1,
    //  skewY:8,
    //  stagger:{
    //   amount:0.3
    //  }
    // })
    tl.to(".overlay-top", 1.6,{
      height:0,
      ease: "expo.inOut",
      stagger:0.4
    }).to(".overlay-bottom", 1.6,{
      width:0,
      delay:-.8,
      ease:"expo.inOut",
      stagger:{
        amount:0.4,
      }
    }).to(".introOverlay",0,{css:{display:"none"}})
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
