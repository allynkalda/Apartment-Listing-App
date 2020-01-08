import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'

const MapContainer = ({ array, loading, error}) => {

  const [ selected, setSelected ] = useState({});

  const onSelect = item => {
    setSelected(item);
  }

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
          zoom={13}
          center={{
            lat: 41.3851, lng: 2.1734
          }}
        >
          {
            array ?
            array.map(item => {
              return (
              <Marker 
              position={item.location}
              onClick={() => onSelect(item)}
              />
              )
            }) : null
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