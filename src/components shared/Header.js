import React from 'react'
import './Header.css'
function Header(){
    return(
        <header className="header">
            <div className="header-container">
                <h1>My logo</h1>
                <ul>
                    <li className="call-me">Lorem ipsum dolor</li>
                    <li className="number">+1 <span> 333666777</span> </li>
                    <li className="btn-solicitar">Lorem ipsum </li>
                    <li className="btn-sign-in">Consectetur adipi</li>
                </ul>
            </div>
        </header>
    )
}

export default Header