import { gql } from 'apollo-boost';

const getApartments = gql`
{
    apartments {
        id
        title
        price
        sqm
        bedrooms
        bathrooms
        image
        location {
                lat
                lng
            }
    }
}
`;

const getApartmentQuery = gql`
    query getApartment($id: ID) {
        apartment(id: $id) {
            id
            title
            price
            sqm
            bedrooms
            bathrooms
            image
            location {
                lat
                lng
            }
        }
    }
`;

const getFilteredQuery = gql`
    query getFiltered($price1: Int, $price2: Int, $sqm1: Int, $sqm2: Int, $bedrooms: Int) {
        apartmentsFilter(price1: $price1, price2: $price2, sqm1: $sqm1, sqm2: $sqm2, bedrooms: $bedrooms) {
            id
            title
            price
            sqm
            bedrooms
            bathrooms
            image
            location {
                lat
                lng
            }
        }
    }
`;

const addApartmentMutation = gql`
    mutation AddApartment($title: String, $price: Int, $sqm: Int, $bedrooms: Int, $bathrooms: Int,
        $image: String, $lat: Float, $lng: Float) {
        addApartment(title: $title, price: $price, sqm: $sqm, bedrooms: $bedrooms, 
        bathrooms: $bathrooms, image: $image, lat: $lat, lng: $lng) {
            title
            price
            sqm
            bedrooms
            bathrooms
            image
        }
    }
`;

export { getApartments, getApartmentQuery, getFilteredQuery, addApartmentMutation };