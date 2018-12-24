import React, { Component } from "react";
import "./Dashboard.css";
import { Route } from "react-router-dom";
import Axios from "axios";
import AdminList from "../general-components/AdminList/AdminList.component";
import Sidebar from "../general-components/sidebar/sidebar";
import Navbar from "../general-components/navbar/Navbar";
import StoryForm from "./StoryForm/StoryForm.component";
import ProjectForm from "./ProjectForm/ProjectForm.component";
import ArticleForm from "./ArticleForm/ArticleForm.component";
import ResearchForm from "./ResearchForm/ResearchForm.component";
import NewsForm from "./NewsForm/NewsForm.component";
import ProjectInfo from "./ProjectInfo/ProjectInfo.component";
import StoryInfo from "./StoryInfo/StoryInfo.component";
import ArticleInfo from "./ArticleInfo/ArticleInfo.component";
import Requests from "./Requests/Requests.component";
import ResearchInfo from "./ResearchInfo/ResearchInfo.component";
import NewsInfo from "./NewsInfo/NewsInfo.component";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarToggled: false,
      requestsCount: 0,
      projectRequests: [],
      articleRequests: []
    };
  }

  componentDidMount() {
    document.querySelector(".navbar").style.display = "none";
    document.querySelector(".logo").style.display = "none";
  }
  componentWillUnmount() {
    document.querySelector(".navbar").style.display = "block";
    document.querySelector(".logo").style.display = "block";
  }
  componentWillMount() {
    Axios.get("/users/isadmin").then(res => {
      if (res.data === false) {
        this.props.history.push("/admin");
      }
    });
    this.fetchProjectsRequests();
    this.fetchArticlesRequests();
  }

  toggleDrawer = () => {
    this.setState({
      sidebarToggled: !this.state.sidebarToggled
    });
  };

  fetchProjectsRequests = () => {
    const url = `/api/requests/projects`;
    Axios.get(url)
      .then(result => {
        const ProjectData = result.data.rows.map(project => {
          return {
            id: project.id,
            title: project.name,
            subtitle: project.organization,
            img: project.img
          };
        });
        this.setState({ projectRequests: ProjectData });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchArticlesRequests = () => {
    const url = `/api/requests/articles`;
    Axios.get(url)
      .then(result => {
        this.setState({ articleRequests: result.data.rows });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="admin-dashboard fadeInFast">
        <Sidebar
          toggleDrawer={this.toggleDrawer}
          toggled={this.state.sidebarToggled}
          fetchRequests={this.fetchRequests}
        />
        <Navbar
          {...this.props}
          toggleDrawer={this.toggleDrawer}
          requestsCount={this.state.requestsCount}
        />
        <main>
          <Route path="/dashboard/projects/:id" component={ProjectInfo} />
          <Route
            path="/dashboard/projects"
            exact
            render={() => {
              return (
                <AdminList
                  itemName="project"
                  pluralName="projects"
                  controls={true}
                  wantedFields={[
                    "id",
                    "name",
                    "organization",
                    "investmentSize"
                  ]}
                />
              );
            }}
          />
          <Route
            path="/dashboard/requests"
            render={() => (
              <Requests
                {...this.props}
                projectRequests={this.state.projectRequests}
                articleRequests={this.state.articleRequests}
                fetchRequests={this.fetchRequests}
              />
            )}
          />
          <Route path="/dashboard/addproject" component={ProjectForm} />
          <Route path="/dashboard/updateproject/:id" component={ProjectForm} />
          <Route
            path="/dashboard/stories"
            exact
            render={() => {
              return (
                <AdminList
                  itemName="story"
                  pluralName="stories"
                  controls={true}
                  wantedFields={["id", "buisness", "buisnessDescription"]}
                />
              );
            }}
          />
          <Route path="/dashboard/stories/:id" component={StoryInfo} />
          <Route path="/dashboard/addstory" component={StoryForm} />
          <Route path="/dashboard/updatestory/:id" component={StoryForm} />

          <Route
            path="/dashboard/users"
            render={() => {
              return (
                <AdminList
                  itemName="member"
                  pluralName="members"
                  controls={false}
                  wantedFields={[
                    "id",
                    "firstName",
                    "lastName",
                    "userRole",
                    "email",
                    "organizationName"
                  ]}
                />
              );
            }}
          />
          <Route
            path="/dashboard/articles"
            exact
            render={() => {
              return (
                <AdminList
                  itemName="article"
                  pluralName="articles"
                  controls={true}
                  wantedFields={["id", "title", "subtitle"]}
                />
              );
            }}
          />
          <Route
            path="/dashboard/researches"
            exact
            render={() => {
              return (
                <AdminList
                  itemName="research"
                  pluralName="researches"
                  controls={true}
                  wantedFields={[
                    "id",
                    "title",
                    "subtitle",
                    "publisher",
                    "pages"
                  ]}
                />
              );
            }}
          />
          <Route path="/dashboard/addresearch" component={ResearchForm} />
          <Route
            path="/dashboard/updateresearch/:id"
            component={ResearchForm}
          />
          <Route path="/dashboard/researches/:id" component={ResearchInfo} />
          <Route
            path="/dashboard/news"
            exact
            render={() => {
              return (
                <AdminList
                  itemName="news"
                  pluralName="news"
                  controls={true}
                  wantedFields={["id", "title", "subtitle"]}
                />
              );
            }}
          />
          <Route path="/dashboard/updatenews/:id" component={NewsForm} />
          <Route path="/dashboard/addnews" component={NewsForm} />
          <Route path="/dashboard/news/:id" component={NewsInfo} />

          <Route path="/dashboard/articles/:id" component={ArticleInfo} />
          <Route path="/dashboard/addarticle" component={ArticleForm} />
          <Route path="/dashboard/updatearticle/:id" component={ArticleForm} />
        </main>
      </div>
    );
  }
}
