import React, {Component} from 'react';
import './App.css';
import ResponsiveMenu from "./components/ResponsiveMenu";
import './styles/reset.css'
import './styles/site_styles.css'
import './styles/bio_styles.css'
//import {gsap} from 'gsap'
import {Link} from "react-router-dom";


class Bio extends Component {
    constructor(props) {
        super(props);
        this.myRefMenu = React.createRef();
        this.myRefMainBox = React.createRef();
        this.loader = React.createRef();
        this.bioLink = React.createRef();
    }

    componentDidMount() {

        const loader = this.loader.current

        if (loader) {
               loader.className += " hidden"
        }
    }

    render() {

        return (<div className="App">

                <header id="main-bio-content">
                    <div id="container-bio">
                        <div id="head">
                            <img id="ava" src="images/ava_main.png" alt=""/>
                            <p>Hi, my name is</p>
                            <h1 id="name">Maksym Hunko</h1>
                            <ul id="social">
                                <div>
                                    <li><a href="https://www.facebook.com/profile.php?id=100005810296282"><img
                                        src="./images/logos/facebooklogo.png" alt="My facebook page"
                                        className="social-img" id="facebook-bio"/></a></li>
                                    <li><a href="https://github.com/podgulyavhyy"><img src="./images/logos/github_white.png"
                                                                                       alt="My github page"
                                                                                       className="social-img" id="github-bio"/></a></li>
                                </div>
                                <div>
                                    <li><a href="https://linkedin.com/in/maksym-hunko-b420121a2"><img
                                        src="./images/logos/in_logo.png"
                                        alt="My linkedIn page"
                                        className="social-img" id="instagram-bio"/></a></li>
                                    <li><a href="https://t.me/podgulyavshyy"><img src="./images/logos/telegramlogo.png"
                                                                                  alt="My telegram account"
                                                                                  className="social-img" id="telegram-bio"/></a></li>
                                </div>
                            </ul>

                            <p><span id="highlight">I am a Web developer from Kyiv, Ukraine currently based in Seattle and I am looking forward to be working with you! Please use this website to learn more about me and my work.</span>
                            </p>
                        </div>
                        <nav id="navbar">
                            <ul>
                                <li><Link to="/" className="navlink" ref={this.bioLink}>Bio</Link></li>
                                <li><Link to="/projects" className="navlink" ref={this.projectsLink}>Projects</Link></li>
                                <li><Link to="/resume" className="navlink" ref={this.resumeLink}>Resume</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <ResponsiveMenu/>


                <div className="loader" ref={this.loader}>
                    <img src="images/loader4.png" alt=""/>
                </div>

            </div>
        );
    }
}


export default Bio;
