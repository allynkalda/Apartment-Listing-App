import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getApartments } from '../queries/query'

export default function Landing() {

    const { loading, error, data } = useQuery(getApartments);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div className="main-container">
            {
            data.apartments.map(item => {
                console.log(item.image)
            return (
                <div className="container">
                    <div className="image-container">
                    <img src={item.image} alt="apartment" className="image"></img>
                        <div className="price-box">
                        <p className="text-space">{item.price} €</p>
                        </div>
                    </div>
                    <div className="text-box">
                        <h3 className="text-space">{item.title}</h3>
                    </div>
                    <div className="info-box">
                        <div className="icon-box">
                            <img src="./images/check.png"></img>
                            {item.sqm} m2
                        </div>
                        <div className="icon-box">
                            <img src="./images/bedroom.png"></img>
                            {item.bedrooms}
                        </div>
                        <div className="icon-box">
                            <img src="./images/bathroom.png"></img>
                            {item.bathrooms}
                        </div>
                    </div>
                </div>
            )
        })
            }
        </div>
    )
}
