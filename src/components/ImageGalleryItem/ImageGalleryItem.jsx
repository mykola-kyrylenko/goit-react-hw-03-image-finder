import React from 'react';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ onClickImage, webformatURL,largeImageURL, id}) {


    return (
        <div>
            <li
                className={s.ImageGalleryItem}
                onClick={() => { onClickImage(largeImageURL) }}
                id={id}
             >
                <img src={webformatURL} alt="" className={s.ImageGalleryItem_image} />
            </li>
        </div>
    );
};
