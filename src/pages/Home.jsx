import React from 'react'
import { useEffect,useState } from 'react'
import Banner from '../components/Banner'
import Cases from '../components/Cases'
import { gsap } from 'gsap'
import IntroOverlay from '../components/IntroOverlay'


        //timeline
   let tl = gsap.timeline();
const homeAnimation=(completeAnimation)=>{
 tl.from(".line span", 1.8,{
         y:100,
         ease:'power4.out',
         delay:3,
         skewY:7,
         stagger:{
          amount:0.5
         }
        })
        tl.to(".overlay-top", 1.6,{
            height:0,
            ease: "expo.inOut",
            stagger:0.4
          }).to(".overlay-bottom", 1.6,{
            width:0,
            delay:-0.8,
            ease:"expo.inOut",
            stagger:{
              amount:0.4,
            }
          }).to(".introOverlay", 0 ,{css:  {display:"none"}})
          .from(".case-image img", 1.6, {
              scale: 1.4,
              ease: "expo.inOut",
              delay: -2,
              stagger:{
                  amount:0.4
              },
              onComplete:completeAnimation
          })
}


const Home = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    const completeAnimation =()=>{
        setAnimationComplete(true)
        // alert("animation complete")
    };
    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("vh", `${vh}px`);
       homeAnimation(completeAnimation);

      },[])

  return (
    <div>
    {
        animationComplete === false ? <IntroOverlay/> : ""
    }
      <Banner />
      <Cases />
    </div>
  )
}

export default Home
