import React from "react";
import { ImageGalleryWrapper } from "./styles";
import { ImageThumbnail } from "./imageThumbnail";
import GatsbyImageFallback from "../gatsbyImageFallback";

export const ImageGallery = ({ images }) => {
    const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(images[0]);

    const handleClick = (image) => {
        setActiveImageThumbnail(image);
    }

    return(
        <ImageGalleryWrapper>
            <div>
                <GatsbyImageFallback
                    image={activeImageThumbnail?.image}
                />
            </div>
            <div>
                {
                    images.map((image) => (
                        <ImageThumbnail 
                            key={image.id}
                            isActive={activeImageThumbnail.id === image.id }
                            image={image}
                            onClick={handleClick}
                        />
                    ))
                } 
            </div>
        </ImageGalleryWrapper>
    );
}