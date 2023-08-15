import React, { Component } from "react";
import Img1 from "../Assets/card1.jpg"
import Img2 from "../Assets/card2.jpg"
import Img3 from "../Assets/card3.jpg"
import Img4 from "../Assets/card4.jpg"
import Img5 from "../Assets/card5.jpg"
import Img6 from "../Assets/card6.jpg"
import Img7 from "../Assets/card7.jpg"
import Img8 from "../Assets/instagram-icon.png"
import Img9 from "../Assets/facebook-icon.webp"
import Img10 from "../Assets/twitter-logo.webp"
// import Img11 from "../Assets/facebook-icons.png"


export default class Content extends Component {
    constructor() {
        super()
        this.state = {
            display: false
        }
    }
    handlButtonShow = () => {// if we use arrow funtion then it would be resolve nhi to bind use krna parega
        this.setState({
            display: true
        })
    }
    handlButtonShow1 = () => {
        this.setState({
            display: false
        })
    }
    render() {
        return <article className="content">
            <div className="login">
                <div className="brackets-login">
                    <i className="fa-solid fa-chevron-left" style={{ color: "white" }}></i>
                    <i className="fa-solid fa-chevron-right" style={{ color: "white" }}></i>
                </div>
                <div className="login-button">
                    <button className="active-sign-btn">Sign up</button>
                    <button className="active-login-btn">Log in</button>
                    <div className="menu-login">
                        <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
                    </div>
                </div>
            </div>
            <div className="content-div">
                <div className="focus">
                    <h1>Focus</h1>
                    <a href="#">Show all</a>
                    <div className="cards">

                        <div className="card card1" >
                            <img src={Img1} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card2">
                            <img src={Img2} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" stylec={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card3">
                            <img src={Img3} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card4">
                            <img src={Img4} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card5">
                            <img src={Img5} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card6">
                            <img src={Img6} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card7">
                            <img src={Img7} alt="Image-cards" />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                    </div>

                </div>
                <div className="focus">
                    <h1>Best episodes of the week</h1>
                    <a href="#">Show all</a>
                    <div className="cards">

                        <div className="card card1" >
                            <img src={Img1} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card2">
                            <img src={Img2} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" stylec={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card3">
                            <img src={Img3} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card4">
                            <img src={Img4} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card5">
                            <img src={Img5} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card6">
                            <img src={Img6} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card7">
                            <img src={Img7} alt="Image-cards" />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                    </div>

                </div>
                <div className="focus">
                    <h1>The Spirit of India</h1>
                    <a href="#">Show all</a>
                    <div className="cards">

                        <div className="card card1" >
                            <img src={Img1} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card2">
                            <img src={Img2} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" stylec={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card3">
                            <img src={Img3} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card4">
                            <img src={Img4} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card5">
                            <img src={Img5} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card6">
                            <img src={Img6} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card7">
                            <img src={Img7} alt="Image-cards" />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                    </div>

                </div>
                <div className="focus">
                    <h1>Kya bol rahi Public!</h1>
                    <a href="#">Show all</a>
                    <div className="cards">

                        <div className="card card1" >
                            <img src={Img1} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card2">
                            <img src={Img2} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" stylec={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card3">
                            <img src={Img3} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card4">
                            <img src={Img4} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card5">
                            <img src={Img5} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card6">
                            <img src={Img6} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card7">
                            <img src={Img7} alt="Image-cards" />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                    </div>

                </div>
                <div className="focus">
                    <h1>Popular albums</h1>
                    <a href="#">Show all</a>
                    <div className="cards">

                        <div className="card card1" >
                            <img src={Img1} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card2">
                            <img src={Img2} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" stylec={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card3">
                            <img src={Img3} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card4">
                            <img src={Img4} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card5">
                            <img src={Img5} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card6">
                            <img src={Img6} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card7">
                            <img src={Img7} alt="Image-cards" />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                    </div>

                </div>
                <div className="focus">
                    <h1>Trending now</h1>
                    <a href="#">Show all</a>
                    <div className="cards">

                        <div className="card card1" >
                            <img src={Img1} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card2">
                            <img src={Img2} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" stylec={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card3">
                            <img src={Img3} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card4">
                            <img src={Img4} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card5">
                            <img src={Img5} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card6">
                            <img src={Img6} alt="Image-cards" onMouseOver={this.handlButtonShow} onMouseOut={this.handlButtonShow1} />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                        <div className="card card7">
                            <img src={Img7} alt="Image-cards" />
                            <h3>Peaceful Piano</h3>
                            <p>Peaceful piano to help you slow down....</p>
                            {/* <button className="play-btn" style={{display:this.state.display?'block':'none'}} ><i className="fa-solid fa-play"></i></button> */}
                        </div>
                    </div>

                </div>


                <div className="footer-div-row">
                    <div className="first-row">
                        <div className="item-column">

                            <div className="company-text">
                                <h2>Company</h2>
                                <a>About</a>
                                <a>Jobs</a>
                                <a>For the Record</a>
                            </div>
                            <div className="company-text">
                                <h2>Communities</h2>
                                <a>For Artists</a>
                                <a>Developers</a>
                                <a>Advertising</a>
                                <a>Investors</a>
                                <a>Vendors</a>
                                <a>Spotify for work</a>
                            </div>
                            <div className="company-text">
                                <h2>Useful links</h2>
                                <a href="">Suppot</a>
                                <a href="">Free Mobile</a>
                            </div>
                        </div>
                        <div className="column-icons">
                            <img className="first-img-insta" src={Img8} alt="" />
                            <img className="first-img-twitter" src={Img10} alt="" />
                            <img src={Img9} alt="" />
                        </div>
                    </div>
                    <p className="line"></p>
                    <div className="second-row">
                        <p>© Spotify AB</p>

                    </div>
                </div>

            </div>

        </article>

    }
}