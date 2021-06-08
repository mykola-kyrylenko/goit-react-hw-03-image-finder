import React from 'react';
// import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({images, onClickImage}) => {
    return (
 <ul className={s.ImageGallery} >
        {images.length > 0 &&
          images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              // key={index}
            webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClick={onClickImage}
          />
        ))}
    </ul>
    );
};

export default ImageGallery;

