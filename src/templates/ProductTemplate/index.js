import React from 'react';
import {graphql} from 'gatsby';
import { Grid } from './styles';
import { ImageGallery } from '../../components/imageGallery';

const ProductTemplate = (props) => {
    console.log("product props", props);
    return (
        <Grid>
            <div>
                <h1>{props.data.shopifyProduct.title}</h1>
                <p>{props.data.shopifyProduct.description}</p>
            </div>
            <div>
                <ImageGallery images={props.data.shopifyProduct.media} />
            </div>
        </Grid>
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
            description
            media {
              ... on ShopifyMediaImage {
                id
                image {
                  gatsbyImageData
                  src
                  altText
                }
              }
            }
        }
    }
`;

export default ProductTemplate;