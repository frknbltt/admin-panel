import "../global.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { Component } from "react";

const LeafletMapsPage = () => {
  const mapPositions = [39.9734675325957, 32.8952696310105];

  return (
    <MapContainer
      className="map"
      center={[mapPositions[0], mapPositions[1]]}
      zoom={6}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
    </MapContainer>
  );
};
export default LeafletMapsPage;
