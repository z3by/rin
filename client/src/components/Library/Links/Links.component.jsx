import React, { Component } from "react";
import Card from "../Card/Card.component";

export default class Links extends Component {
  render() {
    return (
      <div>
        <Card
          info={{
            title: "title",
            subtitle: "subtitle",
            img: "https://picsum.photos/200/300?image=0",
            url: "https://picsum.photos/200/300?image=0"
          }}
        />
      </div>
    );
  }
}
