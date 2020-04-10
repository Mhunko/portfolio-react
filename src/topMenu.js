import React, {Component} from 'react';
/*import { Project } from 'react';*/
/*import loader from '/images/loader3.gif';*/
import './App.css';
/*import {connect} from 'react-redux'*/
import Projects from "./Projects";
import Bio from "./Bio";
import App from "./App";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './styles/reset.css'
import './styles/site_styles.css'
import './styles/resume_styles.css'



class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.myRefMenu = React.createRef();
        this.myRefMainBox = React.createRef();
        this.loader = React.createRef();


        this.bioLink = React.createRef();
        this.projectsLink = React.createRef();
        this.resumeLink = React.createRef();
    }

    render() {
        return (<div className="App">
                <header>
                    <div className="top-navigation">
                        <ul className="inline-bar">
                            <li><Link to="/"><a className="navlink" ref={this.bioLink}>Bio</a></Link></li>
                            <li><a href="/projects" className="navlink active" ref={this.projectsLink}>Projects</a></li>
                            <li><a href="/resume" className="navlink" ref={this.resumeLink}>Resume</a></li>
                        </ul>
                        <img className="down-arrow-img" src="./images/down-arrow.png"/>
                    </div>
                </header>
            </div>
        );
    }
}


export default TopMenu;
