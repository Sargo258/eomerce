import React from 'react';
import '../css/carrito.css';

function Product({ id, title, image, price, rating }){
    return(
        <div className="carrito">
            <div className="carrito-info">
            <p>{title}</p>
            </div>
            <img src={image} alt="" />
            <p className="carrito-price">
                <strong>${price}</strong>
            </p>
            <br></br>
            <button>Comprar</button>
            <p></p>
            <button>Eliminar</button>
        </div>
    )
}

export default Product;