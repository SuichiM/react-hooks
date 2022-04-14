import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function LeafMap({ position }) {
  return (
    <MapContainer
      center={position}
      zoom={8}
      scrollWheelZoom={false}
      style={{ minHeight: '400px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Your package will arrive here soon.</Popup>
      </Marker>
    </MapContainer>
  );
}

export default LeafMap;
