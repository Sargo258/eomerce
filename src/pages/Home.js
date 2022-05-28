import React from 'react';
import Product from '../Components/Product';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Carousel } from 'react-bootstrap';
import '../css/main.css';

import banner1 from '../img/banner1.jpg';
import banner2 from '../img/banner2.jpg';
import banner3 from '../img/banner3.jpg';
import product1 from '../img/product1.jpg';
import product2 from '../img/product2.jpg';
import product3 from '../img/product3.jpg';
import product4 from '../img/product4.png';
import product5 from '../img/product5.jpg';
import product6 from '../img/product6.jpg';
import product7 from '../img/product7.jpg';
import product8 from '../img/product8.jpg';
import product9 from '../img/product9.jpg';

function Home() {
     return( 
    <div>
      <Header />
    <div className="home">
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="carousel-img1"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="carousel-img2"
          src={banner2}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="carousel-img3"
          src={banner3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <div className="home-title">
          <h1>Productos Destacados</h1>
        </div>
        <div className="home-row">
          <Product 
           id="12345"
           title="Smart TV LG 42''"
           price={1200000}
           image={product1}
          />
           <Product 
           id="123456"
           title="Portatil Dell 14''"
           price={1700000}
           image={product2}
          />
          <Product 
           id="123456"
           title="iPad mini(5th generation)"
           price={1999000}
           image={product5}
          />
          </div> 
          <div className="home-row">
          <Product 
           id="123456"
           title="Xiaomi Mi 11"
           price={2500000}
           image={product3}
          />
           <Product 
           id="12345"
           title="Audifonos Logitech"
           price={300000}
           image={product4}
          />
          <Product 
           id="12345"
           title="iPhone 12 mini 128GB Azul"
           price={4000000}
           image={product7}
          />
          </div> 
          <div className="home-row">
          <Product 
           id="123456"
           title="Portatil Lenovo Yoga Slim 7"
           price={3499000}
           image={product6}
          />
           <Product 
           id="12345"
           title="Teclado Gamer Logitech G Pro Mecanico"
           price={1200000}
           image={product8}
          />
          <Product 
           id="12345"
           title="Smart TV Samsung 55"
           price={2000000}
           image={product9}
          />
          </div> 
         </div>
         <Footer />
        </div>
     );
    
 }

 export default Home;