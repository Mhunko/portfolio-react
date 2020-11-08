import React, {Component} from 'react';
import './App.css';
import Bio from './Bio'
import Projects from "./Projects";
import Resume from "./Resume";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './styles/reset.css'
import './styles/site_styles.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.myRefMenu = React.createRef();
        this.myRefMainBox = React.createRef();

    }

    componentDidMount() {
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
