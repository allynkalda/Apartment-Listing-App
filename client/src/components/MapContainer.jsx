// // import React, { useEffect, useRef, useState } from 'react'
// // import { useQuery } from '@apollo/react-hooks';
// // import { getApartments } from '../queries/query';
// // import GoogleMapReact from 'google-map-react';
// // import Marker from './Marker'
// // import InfoWindow from './InfoWindow'

// // const MapContainer = () => {

// //   const [center, setCenter] = useState({lat: 41.3851, lng: 2.1734});
// //   const [zoom, setZoom] = useState(13);
// //   const [selected, setSelected] = useState(false);

// //   const { loading, error, data } = useQuery(getApartments);
// //   console.log(data)
// //   console.log(selected)

// //   const clickHandler = (key, childProps) => {
// //     setSelected(!selected)
// //     console.log()
// //   }

// //   return (
// //     <div style={{ height: '100vh', width: '100%' }}>
// //     <GoogleMapReact
// //       bootstrapURLKeys={{ key: 'AIzaSyB6xHfPLxTArJQQzUVAs2EV6CZG6UT9HCU' }}
// //       defaultCenter={center}
// //       defaultZoom={zoom}
// //       _onChildClick={clickHandler}
    
// //     >
// //       {
// //         data && data.apartments ? data.apartments.map(item => {
// //           return (
// //             <Marker
// //             lat={item.location.lat}
// //             lng={item.location.lng}
// //             name="My Marker"
// //             color="blue"
// //             onClick={() => {setSelected(item); console.log(item)}}
// //             selected={selected}
// //             />
// //           )
// //         }) : null
// //       }

// //     </GoogleMapReact>
// //   </div>
// //   )
// // }

// // export default MapContainer;

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'

const MapContainer = ({ array, loading, error}) => {

  console.log(array);
  const [ selected, setSelected ] = useState({});

  const onSelect = item => {
    setSelected(item);
    console.log(item);
  }

     return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey='AIzaSyB6xHfPLxTArJQQzUVAs2EV6CZG6UT9HCU'
      >
        <GoogleMap
          id='example-map'
          mapContainerStyle={{
            height: "70vh",
            width: "100%"
          }}
          zoom={13}
          center={{
            lat: 41.3851, lng: 2.1734
          }}
        >
          {
            array && array.apartments ?
            array.apartments.map(item => {
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