import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <span className="nav-circle-logo"></span>
                <span className="nav-item-part">
                    <span className="v-line"></span>
                    <span className="nav-circle"></span>
                    <span className="v-line"></span>
                </span>
                <span className="nav-item-part">
                    <span className="nav-circle"></span>
                    <span className="v-line"></span>
                </span>
                <span className="nav-item-part">
                    <span className="nav-circle"></span>
                    <span className="v-line"></span>
                </span>
                <span className="nav-item-part">
                    <span className="nav-circle"></span>
                    <span className="v-line"></span>
                </span>
                <span className="nav-item-part">
                    <span className="nav-circle"></span>
                    <span className="v-line"></span>
                </span>
                <span className="nav-rec">
                    $2635224
                </span>
            </div>
        )
    }
}
