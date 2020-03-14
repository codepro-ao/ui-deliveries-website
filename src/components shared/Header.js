import React,{Component} from 'react'
import './Header.css'

export default class Header extends Component{

    constructor(){
        super();
        this.state={
                visFlex:'flex',
                alterPos:'rotate(180deg)'
        } 
    }
    toggleBtn(){
        if(this.state.visFlex==='flex'){
            this.setState({
                visFlex:'none',
                alterPos:'rotate(0)'
            });
        }
        else{
            this.setState({
                visFlex:'flex',
                alterPos:'rotate(180deg)'
            });
        }
        document.querySelector(".menu-container-mobile").style.display=this.state.visFlex;
        document.querySelector(".mobile-menu").style.transform=this.state.alterPos;
    }
    render(props ){
        return(
            <header className="header">
                <div className="header-container">
                    <h1>My logo</h1>
                    <ul className="">
                        <li className="call-me">Lorem ipsum dolor</li>
                        <li className="number">+1 <span> 333666777</span> </li>
                        <li className="btn-solicitar">Lorem ipsum </li>
                        <li className="btn-sign-in">Consectetur adipi</li>
                    </ul>
                    <div className="menu-container-mobile">
                        <button className="btn-solicitar">Lorem ipsum dolor</button>
                    </div>
                    <div  onClick={this.toggleBtn.bind(this)}   className="mobile-menu">
                    </div>
                </div>
            </header>
        );
    }
}