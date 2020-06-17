import React, {Component} from 'react';
import './App.css';
import ResponsiveMenu from "./components/ResponsiveMenu";
import TopMenu from "./components/TopMenu";
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
                            Im a versatile web developer with 2+ years of experience designing building and maintaining
                            responsive web resources. My main specialty is frontend development using React.

                        </p>
                        <h1>languages, technologies and skills</h1>
                        <p className="tech-list">
                            <ul>
                                <li className="tech-li">
                                    Javascript(node, ES6+) <div className="progress-lines"><span className="line-1">-----</span><span className="line-2">-----</span><span className="line-3">-----</span><span className="line-4">-----</span><span className="line-5">-----</span></div>
                                </li>
                                <li className="tech-li">
                                    React <div className="progress-lines"><span className="line-1">-----</span><span className="line-2">-----</span><span className="line-3">-----</span><span className="line-4">-----</span><span className="line-5">-----</span></div>
                                </li>
                                <li className="tech-li">
                                    Express <div className="progress-lines"><span className="line-1 blank">-----</span><span className="line-2 blank">-----</span><span className="line-3">-----</span><span className="line-4">-----</span><span className="line-5">-----</span></div>
                                </li>
                                <li className="tech-li">
                                    Mongodb <div className="progress-lines"><span className="line-1 blank">-----</span><span className="line-2">-----</span><span className="line-3">-----</span><span className="line-4">-----</span><span className="line-5 ">-----</span></div>
                                </li>
                                <li className="tech-li">
                                    Typescript <div className="progress-lines"><span className="line-1 blank">-----</span><span className="line-2 blank">-----</span><span className="line-3 blank">-----</span><span className="line-4">-----</span><span className="line-5">-----</span></div>
                                </li>
                                <li className="tech-li">
                                    Redux/Saga <div className="progress-lines"><span className="line-1 blank">-----</span><span className="line-2 blank">-----</span><span className="line-3 blank">-----</span><span className="line-4 blank">-----</span><span className="line-5">-----</span></div>
                                </li>
                                <li className="tech-li">
                                    git/github <div className="progress-lines"><span className="line-1 blank">-----</span><span className="line-2">-----</span><span className="line-3">-----</span><span className="line-4">-----</span><span className="line-5">-----</span></div>
                                </li>
                                <li className="tech-li">
                                    Webpack <div className="progress-lines"><span className="line-1 blank">-----</span><span className="line-2 blank">-----</span><span className="line-3 blank">-----</span><span className="line-4">-----</span><span className="line-5">-----</span></div>
                                </li>
                            </ul>
                        </p>
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
