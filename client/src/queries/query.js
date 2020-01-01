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
        }
    }
`;

export { getApartments, getApartmentQuery };