import React from 'react'
import {ReactComponent as CaseNext} from "../assets/arrow-right.svg";
import {ReactComponent as CasePrev} from "../assets/arrow-left.svg";
import "./_cases.scss"

const caseStudies = [
    {
        id:1,
        subtitle: "Curology",
        title: "A custom formula for your skin's unique needs",
        img: "curology-min"
    },
    {
        id:2,
        subtitle: "Yourspace",
        title: "Open space floor plans for you next ventures",
        img: "yourspace-min"
    },
    {
        id:3,
        subtitle: "Lumin",
        title: "For your best look ever",
        img: "lumin-min"
    }
];


function Cases() {
  return (
    <section className='cases'>
        <div className="container-fluid">
            <div className="cases-navigation">
                <div className="cases-arrow prev disabled">
                    <CasePrev/>  
                </div>
                <div className="cases-arrow next">
                <CaseNext/>
                </div>
            </div>
            <div className="row">
               {
                caseStudies.map((caseItem)=>(
                    <div className='case' key={caseItem.id}>
                        <div className="case-details">
                        <h2>{caseItem.subtitle}</h2>
                            <span>{caseItem.title}</span>
                        </div>
                        <div className="case-image">
                            
                            <img src={require(`../assets/${caseItem.img}.png`)} alt={caseItem.title} />
                        </div>
                    </div>
                ))
               }
            </div>
        </div>
    </section>
  )
}

export default Cases