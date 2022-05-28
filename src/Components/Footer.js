import React from 'react';
import '../css/main.css';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from "react-router-dom";

function Footer (){
    return(
        <div className="footer">
            <div className="footer-top">
                <p>Copyright © 2021 </p>
            </div>
            <div className="footer-links">
            <div className="footer-about">
            <div><HomeIcon className="homeIcon" /></div>
                <span>Sobre nosotros</span>
                <p>Carrera 26 #44-14</p>
                <p className="footer-city">Neiva,Huila,Colombia</p>
            </div>
            <div className="footer-phone">
                <div><PhoneIcon className="phoneIcon" /></div>
                <span>Venta Telefónica</span>
                <p>(+57) 3023484258</p>
            </div>
            <div className="footer-email">
                <div><EmailIcon className="emailIcon"/></div>
                <span>Email</span>
                <p>ecommerce@gmail.com</p>
            </div>
            </div>
            <div className="footer-lower">
                <p>Síguenos en: 
                    <Link to="" className="link"> <FacebookIcon className="facebookIcon"/> </Link> <Link to="" className="link"> <InstagramIcon className="instagramIcon"/> </Link> <Link to="" className="link"><TwitterIcon className="twitterIcon"/> </Link>
                </p>
             </div>
        </div>
        );
}

export default Footer;