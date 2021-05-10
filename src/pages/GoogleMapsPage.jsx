import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMapsPage extends Component {
  static defaultProps = {
    center: {
      lat: 39.9734675325957,
      lng: 32.8952696310105,
    },
    zoom: 6,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.GOOGLE_MAPS_API,
            language: "en",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapsPage;
