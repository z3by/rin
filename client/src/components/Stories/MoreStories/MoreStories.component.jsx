import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MoreStories.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import StoriesFilter from "./StoriesFilter/StoriesFilter.component";

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

export default class MoreStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      filterOptions: {
        SDGs: []
      }
    };
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
    this.fetchStories();
  }

  //Get stories depending on entered filtering options by a user if there is any
  fetchStories = () => {
    const options = this.state.filterOptions;

    for (const key in options) {
      if (!options[key]) {
        delete options[key];
      }
    }

    Axios.get("/api/stories", {
      params: options
    }).then(res => {
      this.setState({
        stories: res.data
      });
    })
      .catch(err => {
        console.log(err);
      });
  };

  // get the user filter input and call the filter by the options func
  setFilterOptions = e => {
    this.setState({
      filterOptions: {
        ...this.state.filterOptions,
        [e.target.name]: e.target.value
      }
    });
  };

  //get the selected SDGs by the user
  filterSDGs = e => {
    const index = e.target.value;
    const sdgVal = SDGs[index];
    const checked = this.state.filterOptions.SDGs.includes(sdgVal);
    let selectedSDGs;

    if (!checked) {
      selectedSDGs = [...this.state.filterOptions.SDGs, sdgVal];
    } else {
      selectedSDGs = this.state.filterOptions.SDGs.filter(sdg => {
        return sdg !== sdgVal;
      });
    }

    this.setState({
      filterOptions: {
        ...this.state.filterOptions,
        SDGs: selectedSDGs
      }
    });
  }

  render() {
    return (
      <div className="more-stories">
        <div className="container">
          <StoriesFilter
            filter={this.setFilterOptions}
            filterSDGs={this.filterSDGs}
            fetchStories={this.fetchStories}
            options={this.state.filterOptions} />

          {this.state.stories.map(story => {
            return (
              <Card className="story-card">
                <CardContent>
                  <h4>{story.title}</h4>
                  <h5>{story.pre_description}</h5>
                  <div
                    className="story-card-img"
                    style={{ backgroundImage: "url(" + story.imgs[0] + ")" }}
                  />
                </CardContent>
                <CardActions>
                  <Link to={`/stories/${story.id}`}>
                    <Button className="color-5">read this story</Button>
                  </Link>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}
