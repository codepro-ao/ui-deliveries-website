import React from 'react'
import AppStore from '../../assets/img/br/mobile-app/appstore.svg'
import GooglePlay from '../../assets/img/br/mobile-app/playstore.svg'
import AppMobile from '../../assets/img/br/app-promo/app-promo.png'
import './AppWrapper.css'
function AppWrapper(){
    return(
        <main className="appwrapper">
            <div className="appwrapper-container">
                <div className="describle">
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel erat felis Morbi .</p>
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