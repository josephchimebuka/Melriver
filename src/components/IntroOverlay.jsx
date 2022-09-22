import React from 'react'

function IntroOverlay() {
    //Mix blend css property will really help this code this component to blend in very well
  return (
    <>
    <div className='introOverlay'>
    <div className="top">
    <div className="overlay-top"></div>
        <div className="overlay-top"></div>
        <div className="overlay-top"></div>
    </div>

    <div className="bottom">
        <div className="overlay-bottom"></div>
        <div className="overlay-bottom"></div>
        <div className="overlay-bottom"></div>
    </div>
    </div>
    </>
  )
}

export default IntroOverlay