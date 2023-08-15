import React, { Component } from "react";

export default class Signup extends Component {
    constructor() {
        super()
    }
    render() {
        return <article className="sign-up-article">
            <a href="#">
                <p>Preview of spotify</p>
                <h1>Sign up to get unlimted songs and podcasts with occasional ads. No credit card needed.</h1>
            </a>
            <button>Sign up free</button>
        </article>

    }
}