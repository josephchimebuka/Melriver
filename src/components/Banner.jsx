import React from 'react'
import {ReactComponent as RightArrow} from '../assets/arrow-right.svg';
import "./_banner.scss"

function Banner() {
    
  return (
    <section className='main'>
        <div className="container">
             <div className="row">
                <h2>
                    <div className="line">
                        <span>Revolutionalizing tech with IOT is</span>
                    </div>
                    <div className="line">
                        <span>what we do</span>
                    </div>
                </h2>
                <div className="btn-row">
                    <a href="/">more about us <RightArrow/></a>
                </div>
             </div>
        </div>
    </section>
  )
}

export default Banner