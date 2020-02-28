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
                   <h1><span className="logo">Água Aki</span> é a melhor opção online de entregas</h1>
                   <div className="cards">
                        <div className="card">
                            <div><img src={Card} alt="Card image"/></div>
                            <p>Você ou sua empresa criam o acesso na plataforma da Click Entregas de forma gratuita, e podem usar nossos serviços com pagamento em dinheiro, diretamente ao entregador ou via boleto com faturamento todo dia 10.</p>
                        </div>
                        <div className="card">
                            <div><img src={Rate} alt="Card image"/></div>
                            <p>Contamos com cerca de 10.000 entregadores cadastrados, nosso sistema atribui o entregador melhor avaliado e mais próximo para atender seu pedido.</p>
                        </div>
                        <div className="card">
                            <div><img src={Wizard} alt="Card image"/></div>
                            <p>Através do nosso site existe a possibilidade de fazer a simulação dos preços, como também agendar suas entregas apenas fornecendo seu número de celular durante o preenchimento.</p>
                        </div>
                        <div className="card">
                            <div><img src={SMS} alt="Card image"/></div>
                            <p>Após a confirmação do seu pedido de entrega enviaremos o sms com nome e número de celular do entregador para pessoa de contato em cada ponto de retirada/entrega.</p>
                        </div>
                        <div className="card">
                            <div><img src={Rocket} alt="Card image"/></div>
                            <p>Os entregadores cadastrados na Click Entregas são treinados e capacitados para que sua encomenda chegue o mais rápido possível no seu destino.</p>
                        </div>
                        <div className="card">
                            <div><img src={Calc} alt="Card image"/></div>       
                            <p>Através do site da Click Entregas você pode obter o custo do seu envio on-line.</p>
                        </div>
                   </div>
               </div>
        </main>
    )
}

export default About