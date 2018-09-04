import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';


export default class Map extends Component {
    state = {
        center: {
            lat: 31.95,
            lng: 35.99
        },
        zoom: 1
    };

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }} className="map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAxYHlwX3Vu7-ygTF2wiB3sjSyFU7mAMJE" }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                </GoogleMapReact>
            </div>
        )
    }
}
