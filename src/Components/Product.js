import React from 'react';
import '../css/main.css';

function Product({ id, title, image, price, rating }){
    return(
        <div className="product">
            <div className="product-info">
            <p>{title}</p>
            </div>
            <img src={image} alt="" />
            <p className="product-price">
                <strong>${price}</strong>
            </p>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default Product;