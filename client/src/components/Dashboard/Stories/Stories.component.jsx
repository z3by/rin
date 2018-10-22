import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import StoriesList from "../StoriesList/StoriesList.component";


export default class Stories extends Component {
    render() {
        return (
            <div className="projects-dashboard">
                <nav className="nav-up">
                    <ul>
                        <li>
                            <Link to={"/dashboard/stories/add"}>add story</Link>
                        </li>

                        <li>
                            <Link to={"/dashboard/stories/list"}>show stories</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    {/* <Route path={"/dashboard/stories/add"} component={NewProject} /> */}
                    <Route path={"/dashboard/stories/list"} component={StoriesList} />
                </main>
            </div>
        )
    }
}
