import React, { Component } from "react";
import "./Story.css";

export default class Story extends Component {
  state = {
    stories: [
      {
        id: 0,
        title: "Defining Small and Medium Enterprises",
        text:
          "A Social enterprise Smarita and her friend Becky began one of Kolkata’s first social enterprises tackling sex trafficking by employing rescued victims of sex trafficking. Reflection was created to employ sex trafficking survivors to manufacture fashion accessories and Destiny Foundation was created to utilise the profits from Reflection for various non-profit projects focussed on empowering girls and women.",
        img: "/imgs/stories/imgs/img1.jpg",
        banner: "/imgs/stories/banners/test.jpg",
        logo: "/imgs/stories/logos/logo3.png"
      },
      {
        id: 1,
        title: "From Poverty to Prosperity",
        text:
          'Husband and wife team Thierry Kouembi and Marlyse Tchuigoua know what it\'s like to be newcomers to Canada. They arrived in Calgary in 2015 from Italy with big dreams to bring Milan-quality fashion design and manufacturing to Alberta. Tchuigoua spent seven years as a pattern designer with the world-famous brand Dolce & Gabbana, following stints with other big names in Italy over 12 years after the couple moved there from Cameroon. "We decided it would be nice to come here and have our own manufacturing business," said Kouembi, who has also spent his life around clothes and fashion, working in fabric manufacturing himself as a student and being the son of a seamstress. The couple started small, working out of a room in their Calgary home, taking on all kinds of alterations and custom sewing jobs before deciding to take their dream to the next level. They did so with help from organizations like the Francophone Economic Development Council for Alberta and Futurpreneur Canada, a non-profit that provides financing and mentoring for entrepreneurs.',
        img: "/imgs/stories/imgs/img2.jpg",
        banner: "/imgs/stories/banners/test.jpg",
        logo: "/imgs/stories/logos/logo3.png"
      },
      {
        id: 2,
        title: "Improving Lives and Communities",
        text:
          'Husband and wife team Thierry Kouembi and Marlyse Tchuigoua know what it\'s like to be newcomers to Canada. They arrived in Calgary in 2015 from Italy with big dreams to bring Milan-quality fashion design and manufacturing to Alberta. Tchuigoua spent seven years as a pattern designer with the world-famous brand Dolce & Gabbana, following stints with other big names in Italy over 12 years after the couple moved there from Cameroon. "We decided it would be nice to come here and have our own manufacturing business," said Kouembi, who has also spent his life around clothes and fashion, working in fabric manufacturing himself as a student and being the son of a seamstress. The couple started small, working out of a room in their Calgary home, taking on all kinds of alterations and custom sewing jobs before deciding to take their dream to the next level. They did so with help from organizations like the Francophone Economic Development Council for Alberta and Futurpreneur Canada, a non-profit that provides financing and mentoring for entrepreneurs.',
        img: "/imgs/stories/imgs/img3.jpg",
        banner: "/imgs/stories/banners/test.jpg",
        logo: "/imgs/stories/logos/logo3.png"
      },
      {
        id: 3,
        title: "Sunshine Exports",
        text:
          'Husband and wife team Thierry Kouembi and Marlyse Tchuigoua know what it\'s like to be newcomers to Canada. They arrived in Calgary in 2015 from Italy with big dreams to bring Milan-quality fashion design and manufacturing to Alberta. Tchuigoua spent seven years as a pattern designer with the world-famous brand Dolce & Gabbana, following stints with other big names in Italy over 12 years after the couple moved there from Cameroon. "We decided it would be nice to come here and have our own manufacturing business," said Kouembi, who has also spent his life around clothes and fashion, working in fabric manufacturing himself as a student and being the son of a seamstress. The couple started small, working out of a room in their Calgary home, taking on all kinds of alterations and custom sewing jobs before deciding to take their dream to the next level. They did so with help from organizations like the Francophone Economic Development Council for Alberta and Futurpreneur Canada, a non-profit that provides financing and mentoring for entrepreneurs.',
        img: "/imgs/stories/imgs/img4.jpg",
        banner: "/imgs/stories/banners/test.jpg",
        logo: "/imgs/stories/logos/logo3.png"
      },
      {
        id: 4,
        title: "daauus shines up",
        text:
          'Husband and wife team Thierry Kouembi and Marlyse Tchuigoua know what it\'s like to be newcomers to Canada. They arrived in Calgary in 2015 from Italy with big dreams to bring Milan-quality fashion design and manufacturing to Alberta. Tchuigoua spent seven years as a pattern designer with the world-famous brand Dolce & Gabbana, following stints with other big names in Italy over 12 years after the couple moved there from Cameroon. "We decided it would be nice to come here and have our own manufacturing business," said Kouembi, who has also spent his life around clothes and fashion, working in fabric manufacturing himself as a student and being the son of a seamstress. The couple started small, working out of a room in their Calgary home, taking on all kinds of alterations and custom sewing jobs before deciding to take their dream to the next level. They did so with help from organizations like the Francophone Economic Development Council for Alberta and Futurpreneur Canada, a non-profit that provides financing and mentoring for entrepreneurs.',
        img: "/imgs/stories/imgs/img5.jpg",
        banner: "/imgs/stories/banners/banner5.jpg",
        logo: "/imgs/stories/logos/logo2.png"
      },
      {
        id: 5,
        title: "Tibetan Fuel For The Mind ",
        text:
          'Husband and wife team Thierry Kouembi and Marlyse Tchuigoua know what it\'s like to be newcomers to Canada. They arrived in Calgary in 2015 from Italy with big dreams to bring Milan-quality fashion design and manufacturing to Alberta. Tchuigoua spent seven years as a pattern designer with the world-famous brand Dolce & Gabbana, following stints with other big names in Italy over 12 years after the couple moved there from Cameroon. "We decided it would be nice to come here and have our own manufacturing business," said Kouembi, who has also spent his life around clothes and fashion, working in fabric manufacturing himself as a student and being the son of a seamstress. The couple started small, working out of a room in their Calgary home, taking on all kinds of alterations and custom sewing jobs before deciding to take their dream to the next level. They did so with help from organizations like the Francophone Economic Development Council for Alberta and Futurpreneur Canada, a non-profit that provides financing and mentoring for entrepreneurs.',
        img: "/imgs/stories/imgs/img6.jpg",
        banner: "/imgs/stories/banners/banner6.jpg",
        logo: "/imgs/stories/logos/logo4.png"
      },
      {
        id: 6,
        title: "2014 Scholars",
        text:
          'Husband and wife team Thierry Kouembi and Marlyse Tchuigoua know what it\'s like to be newcomers to Canada. They arrived in Calgary in 2015 from Italy with big dreams to bring Milan-quality fashion design and manufacturing to Alberta. Tchuigoua spent seven years as a pattern designer with the world-famous brand Dolce & Gabbana, following stints with other big names in Italy over 12 years after the couple moved there from Cameroon. "We decided it would be nice to come here and have our own manufacturing business," said Kouembi, who has also spent his life around clothes and fashion, working in fabric manufacturing himself as a student and being the son of a seamstress. The couple started small, working out of a room in their Calgary home, taking on all kinds of alterations and custom sewing jobs before deciding to take their dream to the next level. They did so with help from organizations like the Francophone Economic Development Council for Alberta and Futurpreneur Canada, a non-profit that provides financing and mentoring for entrepreneurs.',
        img: "/imgs/stories/imgs/img7.jpg",
        banner: "/imgs/stories/banners/banner7.jpg",
        logo: "/imgs/stories/logos/logo1.png"
      },
      {
        id: 7,
        title: "2013 Scholars",
        text:
          'Husband and wife team Thierry Kouembi and Marlyse Tchuigoua know what it\'s like to be newcomers to Canada. They arrived in Calgary in 2015 from Italy with big dreams to bring Milan-quality fashion design and manufacturing to Alberta. Tchuigoua spent seven years as a pattern designer with the world-famous brand Dolce & Gabbana, following stints with other big names in Italy over 12 years after the couple moved there from Cameroon. "We decided it would be nice to come here and have our own manufacturing business," said Kouembi, who has also spent his life around clothes and fashion, working in fabric manufacturing himself as a student and being the son of a seamstress. The couple started small, working out of a room in their Calgary home, taking on all kinds of alterations and custom sewing jobs before deciding to take their dream to the next level. They did so with help from organizations like the Francophone Economic Development Council for Alberta and Futurpreneur Canada, a non-profit that provides financing and mentoring for entrepreneurs.',
        img: "/imgs/stories/imgs/img8.jpg",
        banner: "/imgs/stories/banners/banner8.jpg",
        logo: "/imgs/stories/logos/logo6.png"
      },
      {
        id: 8,
        title: "ELY FLORES",
        text:
          'Husband and wife team Thierry Kouembi and Marlyse Tchuigoua know what it\'s like to be newcomers to Canada. They arrived in Calgary in 2015 from Italy with big dreams to bring Milan-quality fashion design and manufacturing to Alberta. Tchuigoua spent seven years as a pattern designer with the world-famous brand Dolce & Gabbana, following stints with other big names in Italy over 12 years after the couple moved there from Cameroon. "We decided it would be nice to come here and have our own manufacturing business," said Kouembi, who has also spent his life around clothes and fashion, working in fabric manufacturing himself as a student and being the son of a seamstress. The couple started small, working out of a room in their Calgary home, taking on all kinds of alterations and custom sewing jobs before deciding to take their dream to the next level. They did so with help from organizations like the Francophone Economic Development Council for Alberta and Futurpreneur Canada, a non-profit that provides financing and mentoring for entrepreneurs.',
        img: "/imgs/stories/imgs/img9.jpg",
        banner: "/imgs/stories/banners/banner9.jpg",
        logo: "/imgs/stories/logos/logo5.png"
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
          <img className="story-banner" src={this.state.stories[id].banner} alt="banner" />
          <img src={this.state.stories[id].logo} className="story-partner" alt="logo" />
          <div className="story-title1">
            <h1>{this.state.stories[id].title}</h1>
          </div>
        </div>
        <div className="story-images">
          <img src={this.state.stories[id].img} className="story-img" alt="img" />
        </div>
        <p className="story-text">
          {this.state.stories[id].text}
        </p>
      </div>
    );
  }
}
