import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const About = () => {
    return (
        <div className="about">
            <Header />
            <div>
                <h1 className="about-one">Sobre nosotros</h1><br />
            </div>
            <div>
                <h1 className="about-title">Misión:</h1><br />
            </div>
            <div class="list-group">
            <a  class="list-group-item list-group-item-action">
    <p class="about-text">"Somos una empresa nueva emergente encargada de la distribución de componentes electrónicos en todo el Pais."</p>
  </a><br />
  <div>
     <h1 className="about-title">Visión:</h1><br />
  </div>
  <a class="list-group-item list-group-item-action">
    <p class="about-text">"Tenemos previsto comenzar a exportar productos a diferentes paises en Latinoamérica en el 2022, una vez funcionemos en el continente, comenzaremos a la distribución a nivel mundial "</p>
  </a><br />
  <div>
      <h1 className="about-title">Politica de calidad:</h1><br />
  </div>
  <a class="list-group-item list-group-item-action">
    <p class="about-text">"Nuestros Clientes recibirán servicios a sus particulares y justos requerimientos.
    Nos comprometemos a que la cadena del servicio en el área de Exportaciones de la
Empresa, esté formada por "eslabones" con:</p>
<p class="about-text">1. Gran capacidad técnica;</p>
<p class="about-text">2. Elevado compromiso en ofrecer un servicio oportuno;</p>
<p class="about-text">3. La más completa comunicación al cliente interno y externo."</p>
</a><br />
</div>
            <Footer />
        </div>

    );
}

export default About;