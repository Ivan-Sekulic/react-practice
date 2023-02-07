import React from "react"
import "../index.css"
import Logo from "../resources/R.png"

export default function Header(){
    return(
    <header className="header">
       <nav className="nav">
          <img className="header-imag" src={Logo} width="40" alt="React"/>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
       </nav>
    </header>
    )
}

