import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "../../App.css";


import About from "../About/About.component";
import Stories from "../Stories/Stories.component";
import Map from "../Map/Map.component";
import Data from "../Data/Data.component";
import Landing from "../Landing/Landing.component";
import Library from "../Library/Library.component";
import Navbar from '../Navbar/Navbar.component';


export default class MyRouter extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path='/' component={Landing} x="190" />
                    <Route path='/stories' component={Stories} />
                    <Route path='/map' component={Map} />
                    <Route path='/data' component={Data} />
                    <Route path='/library' component={Library} />
                    <Route path='/about' component={About} />
                </div>
            </Router>
        )
    }
}
