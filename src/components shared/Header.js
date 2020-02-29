import React from 'react'
import './Header.css'
function Header(){
    return(
        <header>
            <div className="header-container">
                <h1>Água Ki</h1>
                <ul>
                    <li className="call-me">Ligue para mim</li>
                    <li className="number">+244 <span> 914682536</span> </li>
                    <li className="btn-solicitar">Solicitar entrega</li>
                    <li className="btn-sign-in">Entrar / Cadastrar</li>
                </ul>
            </div>
        </header>
    )
}

export default Header