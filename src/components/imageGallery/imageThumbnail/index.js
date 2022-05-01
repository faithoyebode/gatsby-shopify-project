import React from "react";
import { ImageThumbnailWrapper } from "./styles";
import GatsbyImageFallback from "../../gatsbyImageFallback";


export const ImageThumbnail = ({ isActive, onClick, image }) => {
    const handleClick = () => {
        onClick(image);
    }

    return(
        <ImageThumbnailWrapper onClick={handleClick} isActive={isActive}>
            <GatsbyImageFallback
                image={image.image}
            />
        </ImageThumbnailWrapper>
    );
}