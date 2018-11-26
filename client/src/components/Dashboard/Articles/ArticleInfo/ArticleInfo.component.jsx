import React, { Component } from "react";
import axios from "axios";
import "./ArticleInfo.css";

export default class ArticleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      article: {
        imgs: [""]
      }
    };
  }

  componentWillMount() {
    this.getarticle(this.state.id);
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  getarticle = id => {
    axios.get(`/api/articles/${id}`).then(res => {
      this.setState({
        article: res.data[0]
      });
    });
  };

  render() {
    return (
      <div className="admin-info-single fadeInFast">
        <table>
          <tr>
            <th>Article ID</th>
            <td>{this.state.id}</td>
          </tr>
          <tr>
            <th>Article Tilte</th>
            <td>{this.state.article.title}</td>
          </tr>
          <tr>
            <th>Article Subtitle</th>
            <td>
              <p className="p-theme-1-admin-info">
                {this.state.article.subtitle}
              </p>
            </td>
          </tr>
          <tr>
            <th>Article Details</th>
            <td>
              <p className="p-theme-1-admin-info">{this.state.article.text}</p>
            </td>
          </tr>

          <tr>
            <th>Article Images</th>
            <td>
              <img
                className="admin-img"
                src={this.state.article.imgs[0]}
                alt="article"
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
