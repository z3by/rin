import React, { Component } from "react";
import "./Stories.css";
import * as stories from "./stories-info";
import Story from "./Story/Story.component";

class Stories extends Component {
  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  // handle the down arrow btn
  goDown = () => {};

  // handle the down arrow btn
  goTop = () => {};

  render() {
    return (
      <div className="stories fadeInFast">
        <div className="header">
          <img src="/imgs/success.jpg" className="header-img" alt="" />
          <div className="header-text">
            <h1 className="color-1">Success Stories</h1>

            <div className="go-down" onClick={this.goDown}>
              <i className="fas fa-arrow-circle-down" />
            </div>
          </div>
        </div>

        <div className="story-items">
          <Story
            story={{
              id: 2,
              title: "Improving Lives and Communities",
              text:
                "In the summer of 2016, Wes Clanton was looking for something to do. Which, if you knew him – and knew his crowded schedule – might have come as a surprise. An officer in the merchant marine, Clanton was already spending six months a year – 60 days on and 60 days off – crisscrossing the Pacific Ocean on a cargo ship. He was also in graduate school, working toward an advanced degree in marine transportation management – “basically,” he says, “like an MBA for boat driving.” But an important aspect of Clanton’s life was miss When he was a child, his parents had, as he puts it, “done mission trips,” and they had instilled in him the same passion to give back to his community, be it locally or on a global scale. That’s one of the reasons he joined Rotary. “What appealed to me was the service aspect,” he explains. “I was looking to do something that was greater than myself.” (At the time, Clanton was a member of the Rotary E-Club of District 5010, Alaska-Yukon; he has since transitioned into the Rotary Club of Nashville, Tennessee, USA.) Nonetheless, he wanted to do more. “I was looking for an opportunity to volunteer, for a larger project that I could work on,” he recalls. That’s when a friend told Clanton about ShelterBox.Founded by a Rotary member in the United Kingdom in 2000, ShelterBox responds to natural and manmade disasters, providing temporary shelter and other essential nonfood aid to displaced people around the world. In 2004, after a tsunami left more than 200,000 dead in a dozen Asian countries, ShelterBox was there. As it was after the 2010 earthquake in Haiti and after Typhoon Haiyan devastated the Philippines three years later. More recently, ShelterBox assisted survivors of hurricanes in the Caribbean, displaced families in Bangladesh and Syria, and war-ravaged communities in Iraq.",
              img: "/imgs/stories/imgs/img3.jpg"
            }}
          />
        </div>
        <div className="back-to-top" onClick={this.goTop}>
          <i className="fas fa-arrow-circle-up" />
        </div>
      </div>
    );
  }
}

export default Stories;
