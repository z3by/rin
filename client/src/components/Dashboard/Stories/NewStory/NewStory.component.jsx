import React, { Component } from "react";
import axios from "axios";
import "./NewStory.css";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
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

export default class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lens: "",
      SDGs: [],
      title: "",
      pre_description: "",
      lens: "",
      text: "",
      img: "",
      loading: false,
      formValid: false
    };
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  enableAddButton = () => {
    this.setState({
      formValid: true
    });
  };

  disableAddButton = () => {
    this.setState({
      formValid: false
    });
  };

  checkButtonAvailability = () => {
    const state = this.state;
    // check if the user added all required input
    const isValid =
      state.title &&
      state.pre_description &&
      state.lens &&
      state.text &&
      state.img;

    if (isValid) {
      this.enableAddButton();
    } else {
      this.disableAddButton();
    }
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.checkButtonAvailability();
    });
  };

  // when checkboxes are checked;
  onChangeSDG = e => {
    const index = e.target.value;
    const sdgVal = SDGs[index];
    const checked = this.state.SDGs.includes(sdgVal);
    let selectedSDGs;

    if (!checked) {
      selectedSDGs = [...this.state.SDGs, SDGs[index]];
    } else {
      selectedSDGs = this.state.SDGs.filter(sdg => {
        return sdg !== sdgVal;
      });
    }

    this.setState({
      SDGs: selectedSDGs
    });
  };

  addStory = e => {
    e.preventDefault();
    let storyData = {
      title: this.state.title,
      pre_description: this.state.pre_description,
      text: this.state.text,
      imgs: [this.state.img],
      lens: this.state.lens,
      SDGs: this.state.SDGs
    };

    axios
      .post("/api/stories", storyData)
      .then(response => {
        document.querySelector(".admin-form form").reset();
        document.querySelector(".done-img").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".done-img").style.display = "none";
        }, 3000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  onChangeImg = e => {
    this.setState({
      loading: true
    });

    e.preventDefault();
    const formData = new FormData();
    formData.append("img", e.target.files[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios.post("/api/upload", formData, config).then(res => {
      const imageURL = res.data.location;
      this.setState(
        {
          img: imageURL,
          loading: false
        },
        () => {
          this.checkButtonAvailability();
        }
      );
    });
  };

  render() {
    let lensesUI = lenses.map((lens, i) => {
      return (
        <option value={lens} key={i}>
          {lens}
        </option>
      );
    });

    let SDGsUI = SDGs.map((sdg, id) => {
      return (
        <MenuItem>
          <Checkbox
            checked={this.state.checkedA}
            style={{ color: "var(--color-2)" }}
            onChange={this.onChangeSDG}
            value={id}
          />
          {sdg}
        </MenuItem>
      );
    });

    return (
      <Paper className="admin-form">
        <form onSubmit={this.addStory}>
          <input
            type="text"
            name="title"
            placeholder="Story Title"
            id="story-title"
            onChange={this.onChange}
          />
          <input
            type="text"
            placeholder="Story Description"
            name="pre_description"
            id="story-pre_description"
            onChange={this.onChange}
          />
          <textarea
            placeholder="Story Text"
            rows="4"
            cols="50"
            type="text"
            name="text"
            id="story-text"
            onChange={this.onChange}
          />
          <select name="lens" id="lens" onChange={this.onChange}>
            <option>Select Lens</option>
            {lensesUI}
          </select>
          <br />
          <ExpansionPanel id="checkboxes">
            <ExpansionPanelSummary>
              <p>Select SDGs</p>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <MenuList className="menu-full-width">{SDGsUI}</MenuList>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <br />
          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={this.onChangeImg}
          />
          <img className="admin-img-update" src={this.state.img} />
          <img
            src="/imgs/loading.gif"
            alt=""
            className="loading"
            style={{ display: this.state.loading ? "block" : "none" }}
          />
          <button
            type="submit"
            className="btn-admin"
            disabled={!this.state.formValid}
          >
            <i className="fas fa-plus" /> Add Story
          </button>
          <div className="done-img">
            <img src="/imgs/done.gif" alt="" />
          </div>
        </form>
      </Paper>
    );
  }
}
