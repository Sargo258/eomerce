import React from 'react';
import tiendaonline from '../img/tiendaonline.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../css/main.css'
import { Link } from "react-router-dom";




function Header () {
    return(
        <nav className="header">
            <Link to="">
            <img className="header-logo" src={tiendaonline} alt="logo"/>
            </Link>
            <div className="search">
            <input placeholder="Bucar producto" type="text" className="searchInput" />
            <SearchIcon className="searchIcon" />
            </div>
            <div className="header-nav">
            <Link to="/login" className="link">
                <div className="option">
                    <span className="One">Inicia sesión</span>
                </div>
            </Link>
            <Link to="/products">
                <div className="option-product">
                    <span className="Two">Productos</span>
                </div>
            </Link>
            <Link to="/about">
                <div className="option-about">
                    <span className="Three">Acerca de nosotros</span>
                </div>
            </Link>
            <Link to="/checkout">
                <div className="optionCart">
                    <ShoppingCartIcon className="shoppingIcon" />
                    <span className="Two Cartcount">0</span>
                </div>
            </Link>
            </div>
        </nav>
     );
    }
export default Header;