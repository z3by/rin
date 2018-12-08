import React, { Component } from "react";
import PropTypes from "prop-types";
import { mapApi } from "../../../config/map.config";
import options from "./optionsDark";

import shouldPureComponentUpdate from "react-pure-render/function";

import GoogleMap from "google-map-react";
import MyGreatPlace from "./my_great_place.jsx";

export default class Map extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
    this.state = {
      center: { lng: 32.2, lat: 33.5 },
      dots: [{ lat: 59.955413, lng: 30.337844 }]
    };
  }

  onMapClicked = props => {
    const { lng, lat } = props;
    this.setState(
      { dots: [...this.state.dots, { lng: lng, lat, lat }] },
      () => {
        this.props.setLocations(this.state.dots);
      }
    );
  };

  onMarkerClicked = index => {
    const dots = [...this.state.dots];
    dots.splice(index, 1);
    this.setState(
      {
        dots: dots
      },
      () => {
        this.props.setLocations(this.state.dots);
      }
    );
  };

  render() {
    return (
      <GoogleMap
        // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
        center={this.props.center}
        zoom={this.props.zoom}
        options={options}
        bootstrapURLKeys={{ key: mapApi }}
        center={this.state.center}
        zoom={1}
        onClick={this.onMapClicked}
        onChildClick={this.onMarkerClicked}
      >
        {this.state.dots.map(dot => {
          return <MyGreatPlace lng={dot.lng} lat={dot.lat} />;
        })}
      </GoogleMap>
    );
  }
}
