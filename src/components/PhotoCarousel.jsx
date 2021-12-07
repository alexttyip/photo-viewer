import React from 'react';
import "./PhotoCarousel.css";
import {Photo} from "./Photo";

export function PhotoCarousel({listOfPhotos, onPhotoClick, selectedIdx}) {
    return (
        <div className={"carousel"}>
            {listOfPhotos.map((url, idx) =>
                <Photo
                    key={idx}
                    imgSrc={url}
                    onClick={() => onPhotoClick(idx)}
                    isSelected={selectedIdx === idx}
                />)}
        </div>
    );
}