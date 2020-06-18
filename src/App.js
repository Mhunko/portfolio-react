import React, {Component} from 'react';
/*import { Project } from 'react';*/
/*import loader from '/images/loader3.gif';*/
import './App.css';
import Bio from './Bio'
import Projects from "./Projects";
import Resume from "./Resume";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
/*import {connect} from 'react-redux'*/
import './styles/reset.css'
import './styles/site_styles.css'



class App extends Component {
    constructor(props) {
        super(props);
        this.myRefMenu = React.createRef();
        this.myRefMainBox = React.createRef();

    }

    componentDidMount() {
        console.log(this.myRefMenu.current)
    }

    render() {
        return (
            <Router>
                <Switch>
                        <Route path="/" exact component={Bio}/>
                        <Route path="/projects" exact component={Projects}/>
                        <Route path="/resume" exact component={Resume}/>
                </Switch>
            </Router>

        );
    }
}



export default App;
