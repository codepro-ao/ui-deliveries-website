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
                    <div><h1>Água Aki</h1></div>
                    <div>
                        <ul>
                            <li>Preços</li>
                            <li>Vagas</li>
                            <li>Contatos</li>
                            <li>Termos e condições</li>
                            <li>Pedido de entrega</li>
                            <li>Dostavista Group</li>
                            <li>Perguntas frequentes</li>
                            <li>Sobre nós</li>
                            <li>Para entregadores</li>
                            <li className="contact">telefone:</li>
                            <li className="contact-link">+244 222 222</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Vagas</li>
                            <li>Contatos</li>
                            <li>Termos e condições</li>
                            <li>Pedido de entrega</li>
                            <li>Dostavista Group</li>
                            <li>Perguntas frequentes</li>
                            <li>Sobre nós</li>
                            <li>Para entregadores</li>
                            <li>Documentação API</li>
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
                        <p>CALL CENTER: Das 8:00 às 21:00 Seg-Sex. O nosso serviço de agendamento on-line opera 24/7.</p>
                   </div>
                </div>
            </main>
        )
}

export default Footer