import React from 'react'
import './Hero.css'
function Hero(){
    return(
        <main className="hero">
            <div className="hero-container">
                <div className="hero-container-top">
                    <div className="describle">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipi.</h1>
                        <p>Lorem ipsum dolor sit amet, con</p>
                    </div>
                    <form className="hero-form">
                        <input placeholder="Dolor" type="text" />
                        <input placeholder="Dolor" type="text" />
                        <div className="veiculo">
                            <button>Loren</button>
                            <button>Ipson</button>
                        </div>
                        <button className="btn-solicitar">Lorem ipsum dolor</button>
                    </form>
                </div>
                <div className="hero-container-botton">
                        <p>Lorem ipsum dolor sit amet. </p>
                </div>
            </div>
        </main>
    )
}

export default Hero