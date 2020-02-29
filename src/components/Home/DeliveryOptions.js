import React from 'react'
import Moto from '../../assets/img/br/vehicles/moto.svg'
import Car from '../../assets/img/br/vehicles/car.svg'
import Van from '../../assets/img/br/vehicles/van.svg'
import './DeliveryOptions.css'
function DeliveryOptions(){
    return(
        <main className="deliverydptions">
            <div className="deliverydptions-container">
                <h1>Opções de entrega</h1>
                <div className="cards">
                    <div className="card">
                        <img src={Moto} alt="Card image"/>
                        <h2>Moto</h2>
                    </div>
                    <div className="card">
                        <img src={Car} alt="Card image"/>
                        <h2>Carro</h2>
                    </div>
                    <div className="card">
                        <img src={Van} alt="Card image"/>
                        <h2>Carrinha</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DeliveryOptions