import React, {Component} from 'react';
import './App.css';
import ResponsiveMenu from "./components/ResponsiveMenu";
import TopMenu from "./components/TopMenu";
import './styles/reset.css'
import './styles/site_styles.css'
import './styles/projects_styles.css'



class Projects extends Component{
    constructor(props) {
        super(props);
        this.myRefMenu = React.createRef();
        this.myRefMainBox = React.createRef();
        this.loader = React.createRef();

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
        return (
            <div>
                <TopMenu/>
                <h1 id="header">My projects</h1>
                <div id="grid-container-projects">
                    <div id="proj1">
                        <img className="project-img" src="./images/proj-bot.png" alt=""/>
                        <h1>Telegram Encryption Bot</h1>
                        <p>Telegram bot that encrypts your messages using prime number encryption algorithm written in
                            Python</p>
                        <ul className="site-git-links">
                            <li><a href="https://github.com/podgulyavhyy/Prime-Number-Encryption-Telegram-Bot-1.0"><img
                                src="./images/logos/gitlogo.png" alt="Github page" className="social-img"/></a></li>
                            <li><a href="https://t.me/primenum_bot"><img src="./images/logos/weblogo.png"
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
                                src="./images/logos/gitlogo.png" alt="Github page" className="social-img"/></a></li>
                            <li><a href="https://reactreduxpersist.herokuapp.com/"><img
                                src="./images/logos/weblogo.png" alt="Project page" className="social-img"/></a></li>
                        </ul>
                    </div>
                    <div id="proj3">
                        <img className="project-img" src="./images/book_proj1.png" alt=""/>
                        <h1>Book List Project</h1>
                        <p>Full stack project with user authentication that allows you to keep track of your book goals.</p>
                        <ul className="site-git-links">
                            <li><a href="https://github.com/podgulyavhyy/book-list-project"><img src="./images/logos/gitlogo.png"
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
