import React from 'react'
import AppStore from '../../assets/img/br/vehicles/moto.svg'
import GooglePlay from '../../assets/img/br/mobile-app/playstore.svg'
import AppMobile from '../../assets/img/br/app-promo/app-promo.png'
import './AppWrapper.css'
function AppWrapper(){
    return(
        <main className="appwrapper">
            <div className="appwrapper-container">
                <div className="describle">
                    <h2>
                        Instale o APP e tenha todos os entregadores na sua mão
                    </h2>
                    <p>Qualquer momento crie novos pedidos de entrega e acompanhe pedidos em andamento também.</p>
                    <div className="describle-img">
                        <img src={AppStore} alt="AppStore image"/>
                        <img src={GooglePlay} alt="GooglePlay image"/>
                    </div>
                </div>
                <div className="layout">
                    <img 
                        src={AppMobile}
                        alt="Mobile Screanshot"
                        srcset="../../assets/img/br/app-promo/app-promo@2x.png 2x, ../../assets/img/br/app-promo/app-promo@3x.png 3x"
                    />
                </div>
            </div>
        </main>
    )
}

export default AppWrapper