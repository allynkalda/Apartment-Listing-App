import React from 'react';

export default function List({ loading, error, array }) {

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div className="main-container">
            {
            array.map(item => {
            return (
                <div className="container" key={item.id}>
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
                            <img src="./images/check.png" alt="check"></img>
                            {item.sqm} m2
                        </div>
                        <div className="icon-box">
                            <img src="./images/bedroom.png" alt="bedroom"></img>
                            {item.bedrooms}
                        </div>
                        <div className="icon-box">
                            <img src="./images/bathroom.png" alt="bathroom"></img>
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
