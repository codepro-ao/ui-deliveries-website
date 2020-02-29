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
                        <h1>Loren</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel erat.</p>
                </div>
                <div className="card">
                    <div className="wrapper">
                        <img src={Wallet} alt="Card image"/>
                        <h1>Ipsun</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel erat felis. </p>
                </div>
                <div className="card">
                    <div className="wrapper">
                        <img src={Browser} alt="Card image"/>
                        <h1>Sit</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
            </div>
        </main>
    )
}

export default CardList