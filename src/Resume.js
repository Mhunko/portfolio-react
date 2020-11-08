import React, {Component} from 'react';
import './App.css';
import ResponsiveMenu from "./components/ResponsiveMenu";
import TopMenu from "./components/TopMenu";
import './styles/reset.css'
import './styles/site_styles.css'
import './styles/resume_styles.css'
import {gsap} from "gsap";


class Resume extends Component {
    constructor(props) {
        super(props);
        this.myRefMenu = React.createRef();
        this.myRefMainBox = React.createRef();
        this.loader = React.createRef();
    }

    componentDidMount() {

        const loader = this.loader.current
        if (loader) {
            loader.className += " hidden"
        }
        let tlResume = gsap.timeline({defaults: {duration: 0.5, x: -1800, ease: "power1",}});
        tlResume.from('#summary-head', {delay: 0})
        tlResume.from('#summary-par', {}, 0.1)
        tlResume.from('#languages-head', {}, 0.2)
        tlResume.from('.tech-list', {}, 0.4)
        tlResume.from('#workexp-head', {}, 0.6)
        tlResume.from('#workexp-par', {}, 0.8)
        tlResume.from('#resume-main-image', {}, 0.9)
        tlResume.from('.top-navigation', {x: 0, y: -1000}, 0.5)
    }

    render() {

        return (
            <div className="App">
                <TopMenu/>
                <div id="grid-container-resume">
                    <img src="" id="resume-main-image" alt=""/>
                    <div id="text-content-resume">
                        <h1 id="summary-head">summary</h1>
                        <p id="summary-par">
                            I'm a web developer with 2+ years of experience designing building and maintaining
                            responsive web resources. My main specialty is frontend development with React.

                        </p>
                        <h1 id="languages-head">languages and technologies</h1>
                        <p className="tech-list">
                            React, Typescript, Javascript(node, ES6+), Sass, Redux/Saga, Webpack, Jest, git/github, SQL
                        </p>
                        <h1 id="workexp-head">work experience</h1>
                        <p id="workexp-par">July 2020 - Present | Xbox certification tester for BrickRed Systems - Redmond WA</p>
                    </div>
                </div>

                <ResponsiveMenu/>
                <div className="loader" ref={this.loader}>
                    <img src="images/loader4.png" alt=""/>
                </div>

            </div>
        );
    }
}


export default Resume;
