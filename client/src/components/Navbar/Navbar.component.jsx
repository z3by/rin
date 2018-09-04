import React, { Component } from 'react';
import Stories from '../Stories/Stories.component';
import './Navbar.css';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state = {
        counter: 10034623,
        index: -1
    }



    onClickCircle = (e) => {
        const index = parseInt(e.target.getAttribute('index')) - 1;
        document.querySelector('.active').classList.remove('active');
        document.querySelectorAll('.nav-circle')[index].classList.add('active');

    };


    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="logo">
                        <Link to={'/'}>
                            <img src="imgs/old-logo.png" alt="" className="logo-img" />
                        </Link>

                    </div>
                    <div className="navbar-middle">
                        <div className="nav-line"></div>
                        <Link to={'/stories'}>
                            <div className="nav-circle active" index="1" onClick={this.onClickCircle}>
                                <a className="nav-circle-text">
                                    stories
                            </a>
                            </div>
                        </Link>
                        <div className="nav-line"></div>
                        <Link to={'/map'}>
                            <div className="nav-circle" index="2" onClick={this.onClickCircle} >
                                <a className="nav-circle-text">
                                    map
                                    </a>
                            </div>
                        </Link>
                        <div className="nav-line"></div>
                        <Link to={'/data'}>
                            <div className="nav-circle" index="3" onClick={this.onClickCircle}>
                                <a className="nav-circle-text">
                                    data
                                </a>
                            </div>
                        </Link>
                        <div className="nav-line"></div>
                        <Link to={'/library'}>
                            <div className="nav-circle" index="4" onClick={this.onClickCircle}>
                                <a className="nav-circle-text">
                                    library
                            </a>
                            </div>
                        </Link>
                        <div className="nav-line"></div>
                        <Link to={'/about'}>
                            <div className="nav-circle" index="5" onClick={this.onClickCircle}>
                                <a className="nav-circle-text">
                                    about
                            </a>
                            </div>
                        </Link>
                        <div className="nav-line"></div>
                        <div className="counter">
                            <h4>
                                {this.state.counter}
                                <span>$</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
