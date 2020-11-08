import React, {Component} from 'react';
import {Link} from 'react-router-dom'



class TopMenu extends Component {


    render() {

        return (
            <div className="App">
                <header>
                    <div className="top-navigation">
                        <ul className="inline-bar">
                            <li><Link to="/" className="navlink" ref={this.bioLink}>Bio</Link></li>
                            <li><Link to="/projects" className="navlink" ref={this.projectsLink}>Projects</Link></li>
                            <li><Link to="/resume" className="navlink" ref={this.resumeLink}>Resume</Link></li>
                        </ul>
                        <img className="down-arrow-img" src="./images/down-arrow.png" alt=""/>
                    </div>
                </header>
            </div>
        );
    }
}


export default TopMenu;
