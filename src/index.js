import React from "react"
import ReactDOM from "react-dom"
import Header from "./js/Header"
import Body from "./js/Body"
import Footer from "./js/Footer"



// This is a react component. 
// Function that returns react elements
// Calls like html tag
// Needs to be named in Pascal Case
 
function Page(){
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(
    <Page/>,
    document.getElementById("root"))