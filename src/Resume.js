import React, {Component} from 'react';
import './App.css';
import Projects from "./Projects";
import Bio from "./Bio";
import App from "./App";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import ResponsiveMenu from "./responsiveMenu";
import TopMenu from "./topMenu";
import './styles/reset.css'
import './styles/site_styles.css'
import './styles/resume_styles.css'



class Resume extends Component {
    constructor(props) {
        super(props);
        this.myRefMenu = React.createRef();
        this.myRefMainBox = React.createRef();
        this.loader = React.createRef();


    }

    menuOpenHandler = () => {
        console.log(this.myRefMenu.current)
        this.myRefMenu.current.style.width = "300px"
        this.myRefMainBox.current.style.color = "rgba(14,14,14,0.12)"
    }

    menuCloseHandler = () => {
        this.myRefMenu.current.style.width = "0px"
        this.myRefMainBox.current.style.color = "#fffcff"
    }
    componentDidMount() {
        const loader = this.loader.current
        if (loader) {
            setTimeout(() => {
                loader.className += " hidden"
            }, 1000)
        }
    }
    render() {


        return (<div className="App">
                <TopMenu/>
                <div id="grid-container-resume">
                    <div id="resume-main-image"></div>
                    <div id="text-content-resume">
                        <h1>professional summary</h1>
                        <p>
                            I am an international student from Ukraine currently studying at Green River College. I will
                            get my
                            Associate Degree in IT by the end of the spring 2020 and will look forward to achieving a
                            Bachelor’s Degree in software development.
                        </p>
                        <h1>languages and skills</h1>
                        <p>
                            I’m fluent in English, Ukrainian and Russian.
                            My main field of interest is web programming - both front and back end. I also have
                            experience with technologies
                            like git/github, mongodb, React JS and a little experience with Linux.
                        </p>
                        <h1>React JS</h1>
                        <div className="container">
                            <div className="skills html">70%</div>
                        </div>

                        <h1>JavaScript/NodeJS</h1>
                        <div className="container">
                            <div className="skills js">70%</div>
                        </div>

                        <h1>Python</h1>
                        <div className="container">
                            <div className="skills python">50%</div>
                        </div>

                        <h1>Java</h1>
                        <div className="container">
                            <div className="skills java">40%</div>
                        </div>
                    </div>
                </div>

                <ResponsiveMenu />


                <div className="loader" ref={this.loader}>
                    <img src="images/loader4.png"/>
                </div>

            </div>
        );
    }
}


export default Resume;
