import React, { Component } from "react";
import Home from "./Components/Home"
import Signup from "./Components/Signup"
import Content from "./Components/Content"
import "./style.css"
import "./tablet.css"
export default class App extends Component {
    constructor() {
        super()
    }
    render() {
        return<>
        <section className="view-content">
            <Home />
            <Content />
        </section>
        <section className="adv-login">
            <Signup />
        </section>
        </> 

    }
}