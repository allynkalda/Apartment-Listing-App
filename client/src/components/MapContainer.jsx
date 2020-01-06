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

import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapContainer = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 41.3851, lng: 2.1734 }}
  >
    <Marker position={{ lat: 41.3851, lng: 2.1734 }} />
  </GoogleMap>
))

export default MapContainer;