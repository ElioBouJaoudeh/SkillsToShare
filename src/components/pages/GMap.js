import React from 'react';
import '../../App.css';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

function Map(){
  return(
    <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 33.888630, lng: 35.495480}}
    />
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GMap() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBsZjREgW2kn_36Y9kVgfP5bjrT7JUIR2k`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}