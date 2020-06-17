import React, {Component} from 'react';

import './App.css';

import ResponsiveMenu from "./components/ResponsiveMenu";
import './styles/reset.css'
import './styles/site_styles.css'
import './styles/bio_styles.css'



class Bio extends Component{
    constructor(props) {
        super(props);
        this.myRefMenu = React.createRef();
        this.myRefMainBox = React.createRef();
        this.loader = React.createRef();
        this.bioLink = React.createRef();
    }
    componentDidMount() {
        const loader = this.loader.current
        /*this.bioLink.className += "active"*/
        if (loader) {
            setTimeout(() => {
                loader.className += " hidden"
            }, 1000)
        }
    }
    render() {


        return (<div className="App">

                <header id="main-bio-content">
                    <div id="container-bio">
                        <div id="head">
                            <img id="ava" src="images/ava.png" alt=""/>
                            <p>Greetings, my name is</p>
                            <h1 id="name">Maksym Hunko</h1>
                            <ul id="social">
                                <li><a href="https://www.facebook.com/profile.php?id=100005810296282"><img
                                    src="./images/logos/facebooklogo.png" alt="My facebook page"
                                    className="social-img"/></a></li>
                                <li><a href="https://github.com/podgulyavhyy"><img src="./images/logos/gitlogo.png"
                                                                                   alt="My github page"
                                                                                   className="social-img"/></a></li>
                                <li><a href="https://www.instagram.com/podgulyavshyy/"><img
                                    src="./images/logos/instlogo.png"
                                    alt="My instagram page"
                                    className="social-img"/></a></li>
                                <li><a href="https://t.me/podgulyavshyy"><img src="./images/logos/telegramlogo.png"
                                                                              alt="My telegram account"
                                                                              className="social-img"/></a></li>
                            </ul>

                            <p><span id="highlight">I am a Web developer from Kiev, Ukraine currently based in Seattle and I am looking forward to be working with you! Please use this website to learn more about me and my work.</span>
                            </p>
                        </div>
                        <nav id="navbar">
                            <ul>
                                <li className="active"><a href="/" className="navlink">Bio</a></li>
                                <li><a href="/projects" className="navlink">Projects</a></li>
                                <li><a href="/resume" className="navlink">Resume</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <ResponsiveMenu />


                <div className="loader" ref={this.loader}>
                    <img src="images/loader4.png" alt=""/>
                </div>

            </div>
        );
    }
}


export default Bio;
