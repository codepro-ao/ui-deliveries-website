import React from 'react'
import './Hero.css'
function Hero(){
    return(
        <main className="hero">
            <div className="hero-container">
                <div className="hero-container-top">
                    <div className="describle">
                        <h1>Solicite a sua entrega online. Rápido e fácil.</h1>
                        <p>Crie o seu acesso e experimente.</p>
                    </div>
                    <form className="hero-form">
                        <input placeholder="Endereço" type="text" />
                        <input placeholder="Endereço" type="text" />
                        <div className="veiculo">
                            <button>Carro</button>
                            <button>Moto</button>
                        </div>
                        <button className="btn-solicitar">Solicitar entrega</button>
                    </form>
                </div>
                <div className="hero-container-botton">
                        <p>Estamos presentes em Angola</p>
                </div>
            </div>
        </main>
    )
}

export default Hero