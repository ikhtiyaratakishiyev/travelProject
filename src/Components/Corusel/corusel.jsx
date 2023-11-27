import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../Assets/Images/img1.jpg'
import img2 from '../../Assets/Images/img2.jpg'
import img3 from '../../Assets/Images/img3.jpg'
import img4 from '../../Assets/Images/img4.jpg'
import img5 from '../../Assets/Images/img5.jpg'
import img6 from '../../Assets/Images/img6.jpg'
import img7 from '../../Assets/Images/img7.jpg'
import img8 from '../../Assets/Images/img8.jpg'
import img9 from '../../Assets/Images/img9.jpg'
import img10 from '../../Assets/Images/img10.jpg'
import img11 from '../../Assets/Images/img11.jpg'
import img12 from '../../Assets/Images/img12.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';


const CarouselComponent = () => {
  return (
    <Carousel>
          <Carousel.Item>
    <img
          className="d-block w-100"
          src={img1}
          alt="first slide"
        />
      <Carousel.Caption>
        <h3>Bora Bora</h3>
        <p>Bora Bora is an island group in the Leeward Islands.</p>
      </Carousel.Caption>
    </Carousel.Item>
          <Carousel.Item>
    <img
          className="d-block w-100"
          src={img2}
          alt="first slide"
        />
      <Carousel.Caption>
        <h3>Machu Picchu</h3>
        <p>Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru.</p>
      </Carousel.Caption>
    </Carousel.Item>
          <Carousel.Item>
    <img
          className="d-block w-100"
          src={img3}
          alt="first slide"
        />
      <Carousel.Caption>
        <h3>Great Barrier Reef</h3>
        <p>The Great Barrier Reef is the world`s largest coral reef system,Australia.</p>
      </Carousel.Caption>
    </Carousel.Item>
          <Carousel.Item>
    <img
          className="d-block w-100"
          src={img4}
          alt="first slide"
        />
      <Carousel.Caption>
        <h3>Cappadokia</h3>
        <p>Cappadocia  is a historical region in Central Anatolia, Turkey.</p>
      </Carousel.Caption>
    </Carousel.Item>
          <Carousel.Item>
    <img
          className="d-block w-100"
          src={img5}
          alt="first slide"
        />
      <Carousel.Caption>
        <h3>Guanajuato</h3>
        <p>Guanajuato officially the Free and Sovereign State of Guanajuato,Mexico.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
          className="d-block w-100"
          src={img6}
          alt="first slide"
        />
      <Carousel.Caption>
        <h3>Cinque Terre</h3>
        <p>The Cinque Terre is a coastal area within Liguria, in the northwest of Italy.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <img
          className="d-block w-100"
          src={img7}
          alt="Second slide"
        />

      <Carousel.Caption>
        <h3>Angkor Wat</h3>
        <p>Angkor Wat is a temple complex in Cambodia, located on a site measuring 162.6 hectares,Cambodia.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
          className="d-block w-100"
          src={img8}
          alt="Third slide"
        />
      <Carousel.Caption>
        <h3>Taj Mahal</h3>
        <p>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna, India.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
          className="d-block w-100"
          src={img9}
          alt="Third slide"
        />
      <Carousel.Caption>
        <h3>Bali Island</h3>
        <p>Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
          className="d-block w-100"
          src={img10}
          alt="Third slide"
        />
      <Carousel.Caption>
        <h3>Baku</h3>
        <p>Baku is the capital and largest city of Azerbaijan.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
          className="d-block w-100"
          src={img11}
          alt="Third slide"
        />
      <Carousel.Caption>
        <h3>Moscow</h3>
        <p>Moscow is the capital and largest city of Russia.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
          className="d-block w-100"
          src={img12}
          alt="Third slide"
        />
      <Carousel.Caption>
        <h3>Tbilisi </h3>
        <p>Tbilisi in some languages still known by its pre-1936 name Tiflis is the capital and the largest city of Georgia.</p>
      </Carousel.Caption>
    </Carousel.Item>
   

  </Carousel>
  );
};

export default CarouselComponent;