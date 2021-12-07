import React, {useState} from 'react';
import "./PhotoViewer.css";
import {PhotoCarousel} from "./PhotoCarousel";
import {Photo} from "./Photo";
import "./PhotoViewer.css";

const getListOfPhotos = (num) =>
    Array.from({length: num}, () => `https://picsum.photos/id/${Math.floor(100 + Math.random() * 20)}/500`)

export function PhotoViewer() {
    const [selected, setSelected] = useState(-1);
    const [listOfPhotos] = useState(getListOfPhotos(20));

    return (
        <div className={"container"}>
            <div className={"photoContainer"}>
                {
                    selected >= 0
                        ? <Photo onClick={null} imgSrc={listOfPhotos[selected]} isSelected={false}/>
                        : <p>Select a photo from below</p>
                }
            </div>
            <PhotoCarousel listOfPhotos={listOfPhotos} onPhotoClick={setSelected} selectedIdx={selected}/>
        </div>
    );
}
