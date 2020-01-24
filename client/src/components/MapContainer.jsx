import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'

const MapContainer = ({ array, isAdding }) => {

  const [ selected, setSelected ] = useState({});
  const [ currentPosition, setCurrentPosition ] = useState({});

  const markerRef = useRef(null);

  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }

  const onSelect = item => {
    setSelected(item);
  }

  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude
    }
    setCurrentPosition(currentPosition);
  }

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng})
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })

     return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey='AIzaSyB6xHfPLxTArJQQzUVAs2EV6CZG6UT9HCU'
      >
        <GoogleMap
          id='example-map'
          mapContainerStyle={{
            marginTop: "-20px",
            height: "100vh",
            width: "100%"
          }}
          draggable={true}
          zoom={13}
          center={currentPosition.lat ? currentPosition : defaultCenter}
        >
          {
            array ?
            array.map(item => {
              return (
              <Marker 
              key={item.id}
              position={item.location}
              onClick={() => onSelect(item)}
              />
              )
            }) : null
          }
          {
            isAdding ? 
            <Marker
            position={currentPosition}
            ref={() => markerRef}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true} /> :
            null
          }
          {
            selected.location ?
            (
              <InfoWindow
              position={selected.location}
              onCloseClick={() => setSelected({})}
            >
              <div className="infowindow">
                <p>{selected.title}</p>
                <img src={selected.image} className="small-image" alt="rental"/>
                <p>price: {selected.price}</p>
                <p>sqm2: {selected.sqm}</p>
                <p>bedrooms: {selected.bedrooms}</p>
              </div>
            </InfoWindow>
            ) : null
          }
        </GoogleMap>
      </LoadScript>
     )
  }

export default MapContainer;