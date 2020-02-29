import React from 'react'
import AppStore from '../assets/img/br/mobile-app/appstore.svg'
import GooglePlay from '../assets/img/br/mobile-app/playstore.svg'
import Facebook from '../assets/img/social-networks/facebook.svg'
import Instagram from '../assets/img/social-networks/instagram.svg'
import './Footer.css'
function Footer(){
    return(
            <main className="footer">
                <div className="footer-links">
                    <div><h1>My Logo</h1></div>
                    <div>
                        <ul>
                            <li>Nullam</li>
                            <li>Lorem</li>
                            <li>Nullam</li>
                            <li>Lorem e Nullam</li>
                            <li>Nullam  Lorem</li>
                            <li>Lorem e Nullam</li>
                            <li>Nullam Lorem</li>
                            <li>Lorem e Nu</li>
                            <li>Nullam  Lorem</li>
                            <li className="contact">phone:</li>
                            <li className="contact-link">+1 (54) 222 222</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Lorem Nullam </li>
                            <li>Lorem</li>
                            <li>Lorem Nullam</li>
                            <li>Lorem e Nullam</li>
                            <li>Lorem</li>
                            <li>Lorem e Nullam</li>
                            <li>Nullam de Lorem</li>
                            <li>Lorem e Nu</li>
                            <li>Nullam</li>
                            <li className="contact">e-mail:</li>
                            <li className="contact-link">exemplo@email.com</li>
                        </ul>
                    </div>
                    <div>
                       <ul>
                            <li> 
                                <img src={AppStore} alt="GooglePlay image"/>
                            </li>
                            <li> 
                                <img src={GooglePlay} alt="AppStore image"/>
                            </li>
                       </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                   <div className="footer-copyright-wrapper">
                    <div className="social-network">
                            <img src={Facebook} alt="AppStore image"/>
                            <img src={Instagram} alt="GooglePlay image"/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel erat felis. Morbi lobortis diam.</p>
                   </div>
                </div>
            </main>
        )
}

export default Footer