import React, { Component } from "react";
import MailsTableComponent from "./MailsTable.component";
import Axios from "axios";

export default class MailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: []
    };
  }

  componentDidMount() {
    this.fetchEmails();
  }

  fetchEmails = () => {
    Axios.get("/api/maillist").then(result => {
      this.setState({ emails: result.data });
    });
  };

  deleteEmail = (emailId) => {
    Axios.delete('/api/maillist/' + emailId).then(result => { 
      this.fetchEmails()
    })    
  }

  render() {
    const emailsStr = this.state.emails.map(mail => { 
      return mail.email
    }).join()
    return (
      <div className="container">
        <a href={"mailto:" + emailsStr}>
          <button className="btn">Send Email To All</button>
        </a>
        <MailsTableComponent deleteEmail={this.deleteEmail} rows={this.state.emails} />
      </div>
    );
  }
}
