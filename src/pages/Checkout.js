import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Carrito from '../Components/Carrito';
import product1 from '../img/product1.jpg';
function Checkout () {
    return (
        <div>
            <Header />
        <div className="home-row">
          <Carrito 
           id="12345"
           title="Carrito"
           price={1200000}
           image={product1}
          />
          
          <big> 
          <h1>Smart TV LG 42</h1>
                42 LED HD TV pantalla 720p HDMI calidad de imagen Doble entradas HDMI Slim Bisel diseño 2 x 10W 
                altavoces Montaje en pared Incluye LG 32LM500BPUA 32" 720p LED TV
                 y control remoto Garantía: 1 año partes.
          </big>
          </div>
          <Footer />
          </div>
    )
}

export default Checkout;