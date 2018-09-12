import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";

const Dot = () => <div className="dot" />;
export default class Map extends Component {
  state = {
    position: {
      lat: 31.95,
      lng: 35.99
    },
    zoom: 5
  };

  componentWillMount() {
    this.getUserLocation();
  }

  // get the user location;
  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
  };

  // mouse hover handler for the spectrum;
  handleMouseHover = (e) => {
    const index = e.target.dataset.index;
    
  }

  render() {
    return (
      <div
        style={{ height: "100vh", width: "100%" }}
        className="map fadeInFast"
      >
      <div className="filter-spectrum">
      <ul className="spectrum">
        <li className="spectrum-item" data-index={0} onMouseEnter={this.handleMouseHover}></li>
        <li className="spectrum-item" data-index={1} onMouseEnter={this.handleMouseHover}></li>
        <li className="spectrum-item" data-index={2} onMouseEnter={this.handleMouseHover}></li>
        <li className="spectrum-item" data-index={3} onMouseEnter={this.handleMouseHover}></li>
        <li className="spectrum-item" data-index={4} onMouseEnter={this.handleMouseHover}></li>
        <li className="spectrum-item" data-index={5} onMouseEnter={this.handleMouseHover}></li>
        <li className="spectrum-item" data-index={6} onMouseEnter={this.handleMouseHover}></li>
      </ul>
      </div>
        <GoogleMapReact
          options={options}
          bootstrapURLKeys={{ key: "AIzaSyAxYHlwX3Vu7-ygTF2wiB3sjSyFU7mAMJE" }}
          defaultCenter={this.state.position}
          defaultZoom={this.state.zoom}
        >
          <Dot
            lat={this.state.position.lat + 5}
            lng={this.state.position.lng + 5}
          />
          <Dot
            lat={this.state.position.lat + 3}
            lng={this.state.position.lng + 8}
          />
          <Dot
            lat={this.state.position.lat + 10}
            lng={this.state.position.lng + 6}
          />
          <Dot
            lat={this.state.position.lat + 6}
            lng={this.state.position.lng + 4}
          />
          <Dot
            lat={this.state.position.lat + 7}
            lng={this.state.position.lng + 12}
          />
          <Dot
            lat={this.state.position.lat - 5}
            lng={this.state.position.lng + 22}
          />
          <Dot
            lat={this.state.position.lat - 9}
            lng={this.state.position.lng - 20}
          />
          <Dot
            lat={this.state.position.lat - 39}
            lng={this.state.position.lng + 38}
          />
          <Dot
            lat={this.state.position.lat + 35}
            lng={this.state.position.lng - 8}
          />
          <Dot
            lat={this.state.position.lat + 19}
            lng={this.state.position.lng - 28}
          />
          <Dot
            lat={this.state.position.lat + 16}
            lng={this.state.position.lng - 16}
          />
          <Dot
            lat={this.state.position.lat - 9}
            lng={this.state.position.lng - 8}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

const options = {
  styles: [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#1d2c4d"
        }
      ]
    },
    {
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8ec3b9"
        }
      ]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1a3646"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#999"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#64779e"
        }
      ]
    },
    {
      featureType: "administrative.neighborhood",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878"
        }
      ]
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#334e87"
        }
      ]
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#007991"
        }
      ]
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#283d6a"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6f9ba5"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#023e58"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3C7680"
        }
      ]
    },
    {
      featureType: "road",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#304a7d"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#2c6675"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#255763"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#b0d5ce"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#023e58"
        }
      ]
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#283d6a"
        }
      ]
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#3a4762"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#160c16"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#4e6d70"
        }
      ]
    }
  ]
};
