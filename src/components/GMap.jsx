import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import env from '../env';

export default function Gmap({ position }) {
  const mapStyle = {
    height: '50vh',
    width: '100%',
  };
  return (
    <LoadScript googleMapsApiKey={env.googleApiKey}>
      <h3>too poor! :,(</h3>
      <GoogleMap mapContainerStyle={mapStyle} zoom={1} center={position}>
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
}
