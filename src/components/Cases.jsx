import React from 'react'
import {ReactComponent as CaseNext} from "../assets/arrow-right.svg";
import {ReactComponent as CasePrev} from "../assets/arrow-left.svg";
import "./_cases.scss"
import { useNavigate } from 'react-router-dom';



const caseStudies = [
    {
        id:1,
        subtitle: "Lutrics box",
        title: "A custom formula for your skin's unique needs",
        img: "LutricsBox",
        route: '/lutricsBox'
    },
    {
        id:2,
        subtitle: "Lutrics Edu",
        title: "Open space floor plans for you next ventures",
        img: "Edu",
        route: '/lutricsEdu'
    },
    {
        id:3,
        subtitle: "Lutrics Agric",
        title: "For your best look ever",
        img: "Agric",
        route: '/lutricsAgric'
    }
];


function Cases() {
    const router = useNavigate()
    const handlePush =(route)=>{
    router(route)
    }
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

                    <div className='case' key={caseItem.id} 
                    onClick={()=> handlePush(caseItem.route)}>
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