import React, { Component } from "react";
// import FontAwesomeIcon from "@fortawesome/free-solid-svg-icons";
// import HomelogoImg from "../Assets/home-logo2.png";

export default class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return <article className="home">
            <div className="home-div">
                <a href=""><i className="fa-solid fa-house gap"></i>Home</a>
                <a href=""><i className="fa-solid fa-magnifying-glass gap" style={{ color: "white" }}></i>Search</a>
            </div>
            <div className="library-div">
                <div className="library-div-icons">
                    <i className="fa-solid fa-book gap-library" ></i>
                    <span className="text-library-heading">Your Library</span>
                    <i className="fa-solid fa-plus gap-library"></i>
                </div>
                <div className="scroll-library">
                    <div className="create-playlists">
                        <h3>Create your first playlist</h3>
                        <p>it's eassy, we'll help you</p>
                        <button>Create playlist</button>
                    </div>
                    <div className="create-playlists">
                        <h3>Let's find some podcasts to follow</h3>
                        <p>We'll keep you updated on new episodes</p>
                        <button>Browse podcasts</button>
                    </div>
                </div>
                <div className="privacy-items">
                    <span>legal</span>
                    <span>Privacy Center</span>
                    <span>Privacy Policy</span>
                    <span>Cookies</span>
                    <span>AboutAds</span>
                    <span>Accessibility</span>
                    <a>Cookies</a>
                </div>
                <button><i className="fa-solid fa-globe gap-i" style={{ color: "#ffffff" }}></i>English</button>
            </div>
        </article>

    }
}