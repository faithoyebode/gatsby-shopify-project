import React from 'react';
import {graphql} from 'gatsby';

const ProductTemplate = (props) => {
    console.log("product props", props);
    return (
        <h1>Product</h1>
    );
}

//PAGE QUERY
//Anytime we export a query from a particular page, it is known as a page query
//We have access to page context properties in page queries

//Gatsby will inject the result of page queries into props.data
export const query = graphql`
    query ProductQuery($shopifyId: String){
        shopifyProduct(shopifyId: {eq: $shopifyId}) {
            title
        }
    }
`;

export default ProductTemplate;