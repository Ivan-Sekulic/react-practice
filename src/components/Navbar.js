import React from "react"
import Logo from "../resources/reactjs-icon.png"
import "../index.css"

export default function Navbar(){
    return (
        <nav>
            <img src={Logo} className="nav--icon" alt="Logo"/>
            <h3 className="nav-logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}