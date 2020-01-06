import React from 'react';
import InfoWindow from './InfoWindow';

const Marker = ({ color, name, selected}) => {
    return (
      <div>
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
      <InfoWindow show={selected} />
</div>
    );
  };

  export default Marker;