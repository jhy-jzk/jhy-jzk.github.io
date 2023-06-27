import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Stack, Col, Row } from 'react-bootstrap';
import '../styles/ImageDisplay.css';

const ImageSet = ({ images }) => (
  <Carousel variant="dark" >
    {images.map((image, index) => (
      <Carousel.Item key={index}>
        <img
          src={image}
        // style={{ width: 'auto', height: 'auto', objectFit: "cover" }}
        />
        {/* <Carousel.Caption>
          <h3>{image.title}</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
    ))}
  </Carousel>
);

const ImageDisplay = ({ travels }) => (
  <Stack gap={500}>
    {travels.map((travel, index) => (
      <div className="image-set" key={index} style={{ padding: 50 }}>
        <Col>
          <h1>{getDateString(travel.startTime)}</h1>
          {(travel.images != null && travel.images != []) && <ImageSet images={travel.images} />}
          <h1>{travel.title}</h1>
          <h2>{travel.description}</h2>
        </Col>

      </div>
    ))}
  </Stack>
);

export default ImageDisplay;

function getDateString(startTime) {

  const dateObj = new Date(startTime);

  const year = dateObj.getFullYear();
  // getMonth() returns 0-11, we add 1 to get 1-12
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();

  // Ensure month and date are two-digits
  const formattedMonth = month.toString().padStart(2, '0');
  const formattedDate = date.toString().padStart(2, '0');

  const formattedDateStr = `${year}/${formattedMonth}/${formattedDate}`;
  return formattedDateStr;

}