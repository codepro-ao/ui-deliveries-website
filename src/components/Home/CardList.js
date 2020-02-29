import React from 'react'
import Hourglass from '../../assets/img/br/icons/hourglass.svg'
import Wallet from '../../assets/img/br/icons/wallet.svg'
import Browser from '../../assets/img/br/icons/browser.svg'
import './CardList.css'
function CardList(){
    return(
        <main className="cardlist">
            <div className="cardlist-container">
                <div className="card">
                    <div className="wrapper">
                        <img src={Hourglass} alt="Card image"/>
                        <h1>90 min</h1>
                    </div>
                    <p>Podemos entregar o mais rápido possível ou você pode agendar o serviço.</p>
                </div>
                <div className="card">
                    <div className="wrapper">
                        <img src={Wallet} alt="Card image"/>
                        <h1>1000Kz</h1>
                    </div>
                    <p>Você sabe quanto vai pagar antes mesmo de solicitar, a partir do valor mínimo.</p>
                </div>
                <div className="card">
                    <div className="wrapper">
                        <img src={Browser} alt="Card image"/>
                        <h1>API</h1>
                    </div>
                    <p>Vendendo on-line? Turbine suas vendas via API.</p>
                </div>
            </div>
        </main>
    )
}

export default CardList