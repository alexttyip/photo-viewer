import React from 'react';
import "./Photo.css";

export function Photo({imgSrc, isSelected = false, onClick = null}) {
    if (!imgSrc) return <p>Cannot find image</p>

    return (
        <img
            className={isSelected && "selected"}
            src={imgSrc}
            alt="Random pic"
            onClick={onClick}
        />
    );
}
