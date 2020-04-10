import React, {Component} from 'react';
import './App.css';




class ResponsiveMenu extends Component {
    constructor(props) {
        super(props);
        this.myRefMenu = React.createRef();
        this.myRefMainBox = React.createRef();
        this.loader = React.createRef();

        this.bioLink = React.createRef();
        this.projectsLink = React.createRef();
        this.resumeLink = React.createRef();


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
                <div id="mainbox" ref={this.myRefMainBox} onClick={this.menuOpenHandler}>&#9776;</div>
                <div id="menu" className="sidemenu" ref={this.myRefMenu} style={{textAlign: 'left'}}>
                    <a href="/" style={{marginTop: '40px'}} ref={this.bioLink}>Bio</a>
                    <a href="/projects" ref={this.projectsLink}>Projects</a>
                    <a href="/resume" ref={this.resumeLink}>Resume</a>
                    <a href="#" className="closebtn" onClick={this.menuCloseHandler}>&times;</a>
                </div>
            </div>
        );
    }
}


export default ResponsiveMenu;
