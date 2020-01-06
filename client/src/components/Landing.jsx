import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getApartments } from '../queries/query';
import List from './List';
import Filter from './Filter';
import Navbar from './Navbar';

export default function Landing() {

  const [ showLanding, setShowLanding ] = useState(true);
  
  const { loading, error, data } = useQuery(getApartments);

  const clickHandler = () => {
    setShowLanding(!showLanding);
  };

  return (
    <div>
      <Navbar clickHandler={clickHandler} />
      { 
        showLanding && data ? <List array={data.apartments} loading={loading} error={error} /> : 
        <Filter />
      } 
    </div>
  )
}
