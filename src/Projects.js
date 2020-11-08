import React, {Component} from 'react';
import './App.css';
import ResponsiveMenu from "./components/ResponsiveMenu";
import TopMenu from "./components/TopMenu";
import './styles/reset.css'
import './styles/site_styles.css'
import './styles/projects_styles.css'
import {gsap} from 'gsap'

class Projects extends Component{
    constructor(props) {
        super(props);
        this.loader = React.createRef();
        this.testAni = React.createRef();
        this.topMenu = React.createRef();
    }

    componentDidMount() {
        let tlProjects = gsap.timeline({defaults: {duration: 1, y: -1000, ease: "power1",}});
        tlProjects.from('#proj3', {delay: 0})
        tlProjects.from('#proj2', {}, 0.5)
        tlProjects.from('#proj1', {}, 1)
        tlProjects.from('#header', {}, 1.2)
        tlProjects.from('.top-navigation', {}, 0.8)

        const loader = this.loader.current
        if (loader) {
            loader.className += " hidden"
        }
    }

    render() {
        return (
            <div>
                <TopMenu className="topmenu" ref={this.topMenu}/>

                <h1 id="header">My projects</h1>
                <div id="grid-container-projects">
                    <div id="proj1" ref={this.testAni}>
                        <img className="project-img" src="./images/weather_app.png" alt=""/>
                        <h1>Weather app</h1>
                        <p>My very first very simple app for searching weather data using darksky api.</p>
                        <ul className="site-git-links">
                            <li><a href="https://github.com/podgulyavhyy/weather-web-application"><img
                                src="./images/logos/github_white.png" alt="Github page" className="social-img"/></a></li>
                            <li><a href="https://hunko-weather-application.herokuapp.com/"><img src="./images/logos/weblogo.png"
                                                                         alt="Project page" className="social-img"/></a>
                            </li>
                        </ul>
                    </div>
                    <div id="proj2">
                        <img className="project-img" src="./images/persist.png" alt=""/>
                        <h1>Redux persist test project</h1>
                        <p>Toy website that utilizes react redux and can rehydrate state after page refresh</p>
                        <ul className="site-git-links">
                            <li><a href="https://github.com/podgulyavhyy/react-redux-saga-persist-test"><img
                                src="./images/logos/github_white.png" alt="Github page" className="social-img"/></a></li>
                            <li><a href="https://reactreduxpersist.herokuapp.com/"><img
                                src="./images/logos/weblogo.png" alt="Project page" className="social-img"/></a></li>
                        </ul>
                    </div>
                    <div id="proj3">
                        <img className="project-img" src="./images/book_proj1.png" alt=""/>
                        <h1>Book List Project</h1>
                        <p>Full stack project with user authentication that allows you to keep track of your book goals.</p>
                        <ul className="site-git-links">
                            <li><a href="https://github.com/podgulyavhyy/book-list-project"><img src="./images/logos/github_white.png"
                                                                               alt="Github page"
                                                                               className="social-img"/></a>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>


                <ResponsiveMenu />
                <div className="loader" ref={this.loader}>
                    <img src="images/loader4.png" alt=""/>
                </div>

            </div>

        );
    }

}

export default Projects;
