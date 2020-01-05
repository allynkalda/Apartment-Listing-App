import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { getFilteredQuery } from '../queries/query'

export default function Filter() {

  const [ state, setState ] = useState({
    price1: 0,
    price2: 10000,
    sqm1: 0,
    sqm2: 1000,
    bedrooms: 100
  })

  const [ getApartment, { data } ] = useLazyQuery(getFilteredQuery);

    console.log(data);

  const changeHandler = (evt) => {
    const value = evt.target.value;
    setState({
    ...state,
    [evt.target.name]: value
    })
  };

  return (
    <div className="filter-container">
        <h4>Precio</h4>
          <input type="number" name="price1" placeholder="" onChange={(event) => changeHandler(event)}/>
          <input type="number" name="price2" placeholder="" onChange={(event) => changeHandler(event)}/>
        <h4>Tamaño</h4>
          <input type="number" name="sqm1" placeholder="" onChange={(event) => changeHandler(event)}/>
          <input type="number" name="sqm2" placeholder="" onChange={(event) => changeHandler(event)}/>
        <h4>Habitaciones</h4>
          <input type="text" name="bedrooms" placeholder="" onChange={(event) => changeHandler(event)}/>
        <button onClick={() => getApartment({ variables: { price1: Number(state.price1), 
                  price2: Number(state.price2), sqm1: Number(state.sqm1), sqm2: Number(state.sqm2),
                  bedrooms: Number(state.bedrooms) }})}>
          Search
        </button>
    </div>
  )
}
