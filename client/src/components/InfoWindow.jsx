import React from 'react';

const InfoWindow = ({ show }) => {
    return (
      <div>
        { show ? (<div style={{width: 100, height: 100}}>Info window</div>) : null }
      </div>
    );
  };

  export default InfoWindow;