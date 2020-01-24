import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/react-hooks';
import { addApartmentMutation } from '../queries/query';

export default function InputDetails() {

    const [ addApartment, { data } ] = useMutation(addApartmentMutation);

    const [ state, setState ] = useState({
        title: '',
        price: 0,
        sqm: 0,
        bathrooms: 0,
        bedrooms: 100,
        image: ''
    });

    const changeHandler = (evt) => {
        const value = evt.target.value;
        setState({
        ...state,
        [evt.target.name]: value
        })
      };

    return (
        <div className="filter-container">
            <h4>Description</h4>
                <input type="text" name="description" placeholder="" onChange={(event) => changeHandler(event)}/>
            <h4>Price</h4>
                <input type="number" name="price" placeholder="" onChange={(event) => changeHandler(event)}/>
            <h4>Square meters</h4>
                <input type="number" name="sqm" placeholder="" onChange={(event) => changeHandler(event)}/>
            <h4>Number of bedrooms</h4>
                <input type="number" name="bedrooms" placeholder="" onChange={(event) => changeHandler(event)}/>
            <h4>Number of bathrooms</h4>
                <input type="number" name="bathrooms" placeholder="" onChange={(event) => changeHandler(event)}/>
            <h4>Image</h4>
                <input type="text" name="image" placeholder="" onChange={(event) => changeHandler(event)}/>
                <br />
            <Button variant="contained" color="secondary" onClick={() => { addApartment(
                {variables: { title: state.title, price: state.price, sqm: state.sqm,
                    bedrooms: state.bedrooms, bathrooms: state.bathrooms, image: state.image }}
                )}} >
            Add
            </Button>
        </div>
    )
}
