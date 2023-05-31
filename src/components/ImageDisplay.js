import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Stack } from 'react-bootstrap';
import '../styles/ImageDisplay.css';

const ImageSet = ({ images }) => (
  <Carousel variant="dark" >
    {images.map((image, index) => (
      <Carousel.Item key={index}>
        <img
          src={image.src}
          alt={image.alt}
          style={{ width: 'auto', height: '600px' }}
        />
        <Carousel.Caption>
          <h3>{image.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

const ImageDisplay = ({ imageSets }) => (
  <Stack gap={500}>
    {imageSets.map((images, index) => (
      <div className="image-set" key={index} style={{ padding: 50 }}>
        <ImageSet images={images} />
      </div>
    ))}
  </Stack>
);

export default ImageDisplay;