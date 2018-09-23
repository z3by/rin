import React, { Component } from "react";
import "./Story.css";

export default class Story extends Component {
  state = {
    stories: [
      {
        id: 0,
        title: "A Reason to Smile",
        text: 'A Social enterprise Smarita and her friend Becky began one of Kolkata’s first social enterprises tackling sex trafficking by employing rescued victims of sex trafficking. Reflection was created to employ sex trafficking survivors to manufacture fashion accessories and Destiny Foundation was created to utilise the profits from Reflection for various non-profit projects focussed on empowering girls and women.',
        img: "/imgs/story.jpeg"
      },
      {
        id: 1,
        title: "Creating a Family",
        text:
          'Husband and wife team Thierry Kouembi and Marlyse Tchuigoua know what it\'s like to be newcomers to Canada. They arrived in Calgary in 2015 from Italy with big dreams to bring Milan-quality fashion design and manufacturing to Alberta. Tchuigoua spent seven years as a pattern designer with the world-famous brand Dolce & Gabbana, following stints with other big names in Italy over 12 years after the couple moved there from Cameroon. "We decided it would be nice to come here and have our own manufacturing business," said Kouembi, who has also spent his life around clothes and fashion, working in fabric manufacturing himself as a student and being the son of a seamstress. The couple started small, working out of a room in their Calgary home, taking on all kinds of alterations and custom sewing jobs before deciding to take their dream to the next level. They did so with help from organizations like the Francophone Economic Development Council for Alberta and Futurpreneur Canada, a non-profit that provides financing and mentoring for entrepreneurs.',
        img: "/imgs/story.jpeg"
      },
      {
        id: 2,
        title: "Final Exam",
        text:
          'Husband and wife team Thierry Kouembi and Marlyse Tchuigoua know what it\'s like to be newcomers to Canada. They arrived in Calgary in 2015 from Italy with big dreams to bring Milan-quality fashion design and manufacturing to Alberta. Tchuigoua spent seven years as a pattern designer with the world-famous brand Dolce & Gabbana, following stints with other big names in Italy over 12 years after the couple moved there from Cameroon. "We decided it would be nice to come here and have our own manufacturing business," said Kouembi, who has also spent his life around clothes and fashion, working in fabric manufacturing himself as a student and being the son of a seamstress. The couple started small, working out of a room in their Calgary home, taking on all kinds of alterations and custom sewing jobs before deciding to take their dream to the next level. They did so with help from organizations like the Francophone Economic Development Council for Alberta and Futurpreneur Canada, a non-profit that provides financing and mentoring for entrepreneurs.',
        img: "/imgs/story.jpeg"
      },
      {
        id: 3,
        title: "The Power of Light",
        text:
          'Husband and wife team Thierry Kouembi and Marlyse Tchuigoua know what it\'s like to be newcomers to Canada. They arrived in Calgary in 2015 from Italy with big dreams to bring Milan-quality fashion design and manufacturing to Alberta. Tchuigoua spent seven years as a pattern designer with the world-famous brand Dolce & Gabbana, following stints with other big names in Italy over 12 years after the couple moved there from Cameroon. "We decided it would be nice to come here and have our own manufacturing business," said Kouembi, who has also spent his life around clothes and fashion, working in fabric manufacturing himself as a student and being the son of a seamstress. The couple started small, working out of a room in their Calgary home, taking on all kinds of alterations and custom sewing jobs before deciding to take their dream to the next level. They did so with help from organizations like the Francophone Economic Development Council for Alberta and Futurpreneur Canada, a non-profit that provides financing and mentoring for entrepreneurs.',
        img: "/imgs/story.jpeg"
      },
      {
        id: 4,
        title: "Nowhare to Turn",
        text:
          'Husband and wife team Thierry Kouembi and Marlyse Tchuigoua know what it\'s like to be newcomers to Canada. They arrived in Calgary in 2015 from Italy with big dreams to bring Milan-quality fashion design and manufacturing to Alberta. Tchuigoua spent seven years as a pattern designer with the world-famous brand Dolce & Gabbana, following stints with other big names in Italy over 12 years after the couple moved there from Cameroon. "We decided it would be nice to come here and have our own manufacturing business," said Kouembi, who has also spent his life around clothes and fashion, working in fabric manufacturing himself as a student and being the son of a seamstress. The couple started small, working out of a room in their Calgary home, taking on all kinds of alterations and custom sewing jobs before deciding to take their dream to the next level. They did so with help from organizations like the Francophone Economic Development Council for Alberta and Futurpreneur Canada, a non-profit that provides financing and mentoring for entrepreneurs.',
        img: "/imgs/story.jpeg"
      }
    ]
  };

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  componentWillUnmount() {
    document.body.style.overflowY = "hidden";
  }

  render() {
    const id = this.props.match.params.id;

    return (
      <div className="story">
        <div className="story-img1">
          <img className="img1" src={this.state.stories[id].img} alt="" />
          <div className="story-title1">
            <h1>{this.state.stories[id].title}</h1>
          </div>
        </div>
        <div className="story-images">
          <img src="/imgs/RIN1.png" className="story-1" /><br />
          <img src="/imgs/RIN2.jpg" />
        </div>
        <p className="story-text">
          A Social enterprise Smarita and her friend Becky began one of Kolkata’s first social enterprises tackling sex trafficking by employing rescued victims of sex trafficking. Reflection was created to employ sex trafficking survivors to manufacture fashion accessories and Destiny Foundation was created to utilise the profits from Reflection for various non-profit projects focussed on empowering girls and women.',
        </p>
      </div>
    );
  }
}
