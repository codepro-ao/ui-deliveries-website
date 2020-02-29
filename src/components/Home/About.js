import React from 'react'
import Card from '../../assets/img/icon/card.svg'
import Rate from '../../assets/img/icon/rate.svg'
import Wizard from '../../assets/img/icon/wizard.svg'
import SMS from '../../assets/img/icon/sms.svg'
import Rocket from '../../assets/img/icon/rocket.svg'
import Calc from '../../assets/img/icon/calc.svg'
import './About.css'
function About(){
    return(
        <main className="about">
            <div className="about-container">
                   <h1><span className="logo">My Logo</span> Lorem ipsum dolor sit  consectetur.</h1>
                   <div className="cards">
                        <div className="card">
                            <div><img src={Card} alt="Card image"/></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel erat felis. Morbi lobortis diam sit amet egestas elementum. Cras fringilla dictum porttitor. Praesent libero odio, mattis pulvinar orci non, dapibus porta nunc. Vestibulum sit amet consequat lectus.</p>
                        </div>
                        <div className="card">
                            <div><img src={Rate} alt="Card image"/></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel erat felis. Morbi lobortis diam sit amet egestas elementum. Cras fringilla .</p>
                        </div>
                        <div className="card">
                            <div><img src={Wizard} alt="Card image"/></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel erat felis. Morbi lobortis diam sit amet egestas elementum. Cras fringilla dictum porttitor. Praesent libero.</p>
                        </div>
                        <div className="card">
                            <div><img src={SMS} alt="Card image"/></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel erat felis. Morbi lobortis diam sit amet egestas elementum. Cras fringilla dictum porttitor. </p>
                        </div>
                        <div className="card">
                            <div><img src={Rocket} alt="Card image"/></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel erat felis. Morbi lobortis diam sit amet egestas elementum. Cras fringilla.</p>
                        </div>
                        <div className="card">
                            <div><img src={Calc} alt="Card image"/></div>       
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel erat felis. </p>
                        </div>
                   </div>
               </div>
        </main>
    )
}

export default About