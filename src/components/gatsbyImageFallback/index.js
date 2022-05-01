import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const GatsbyImageFallback = ({ image }) => {
    if (image?.gatsbyImageData){
        return (
            <GatsbyImage image={image.gatsbyImageData} alt={image.altText} />
        );
    }else{
        return (
            <img src={image.src} alt={image.altText} />
        );
    }
}

export default GatsbyImageFallback;