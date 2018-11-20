import React, { Component } from 'react'
import "./StoriesFilter.css";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import { MenuList } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";


const lenses = [
    "Refugee-Owned",
    "Refugee-Led",
    "Refugee-Supporting",
    "Refugee-Supporting-Host-Weighted",
    "Lending-Facilities",
    "Refugee-Funds"
];

const SDGs = [
    "Climate-Action",
    "Decent-Work-and-Economic-Growth",
    "Gender-Equality",
    "Good-Health-and-Well-Being",
    "Industry-Innovation-and-Infrastructure",
    "Life-on-Land",
    "No-Poverty",
    "Partnerships-for-the-Goals",
    "Peace-Justice-and-Strong-Institutions",
    "Quality-Education",
    "Reduced-Inqualities",
    "Sustainable-Cities-and-Communities",
    "Zero-Hunger"
];

export default class StoriesFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFilterToggled: false
        }
    }

    toggleFilter = () => {
        this.setState({ isFilterToggled: !this.state.isFilterToggled });
    }

    render() {
        let show = this.state.isFilterToggled ? " show" : "";

        let allLenses = lenses.map((lens, i) => {
            return (
                <option value={lens} key={i}>{lens}</option>
            );
        });

        let allSDGs = SDGs.map((sdg, i) => {
            return (
                <MenuItem>
                    <Checkbox
                        checked={this.state.checked}
                        style={{ color: "var(--color-2)" }}
                        onChange={this.props.filterSDGs}
                        value={i}
                        key={i}
                        name="SDG"
                    />
                    {sdg}
                </MenuItem>
            );
        });

        return (
            <div className={"stories-filter" + show}>
                <a onClick={this.toggleFilter}>
                    <i className="fas fa-search" /> Search
                </a>

                <a
                    className="close"
                    onClick={this.toggleFilter}
                    style={{ display: this.state.isFilterToggled ? "block" : "none" }}>
                    <i className="fas fa-times" />
                </a>

                <div className="stories-filter-input">
                    <label htmlFor="story-title" className="stories-filter-label">
                        Filter by Story Title
                    </label>
                    <input
                        id="story-title"
                        type="text"
                        name="title"
                        placeholder="story title"
                        className="stories-filter-input-text"
                        onChange={this.props.filter}
                    />
                </div>

                <div className="stories-filter-input">
                    <label htmlFor="story-title" className="stories-filter-label">
                        Filter by Refugee Lens
                    </label>
                    <select name="lens" id="lens" onChange={this.props.filter} className="stories-lens-select">
                        <option>Select Lens</option>
                        {allLenses}
                    </select>
                </div>

                <div className="stories-filter-input">
                    <label htmlFor="story-title" className="stories-filter-label">
                        Filter by SDGs
                    </label>
                    <ExpansionPanel className="stories-filter-SDGs">
                        <ExpansionPanelSummary style={{ backgroundColor: "rgba(255, 153, 0, 0.8)", border: "1px solid #fff" }}>
                            <p>Select SDGs</p>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <MenuList>{allSDGs}</MenuList>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>

                <button
                    className="btn"
                    onClick={() => {
                        this.toggleFilter();
                        this.props.fetchStories();
                    }}
                >
                    Go
                </button>

            </div>
        )
    }
}