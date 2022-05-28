import React from 'react';
import '../css/main.css';
import tiendaonline from '../img/tiendaonline.png';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
function Login() {
    return(
        <div>
            <Header />
        <div className="login">
            <Link to="/">
                <img className="login-logo" src={tiendaonline}/>
            </Link>
            <div className="login-container">
                <h1>Iniciar sesión</h1>
                    <form>
                        <h5>Correo electrónico</h5>
                        <input className="login-email" type="email" />
                        <h5>Contraseña</h5>
                        <input className="login-password" type="password" />
                        <button type="submit" className="login-signinbutton">Iniciar sesión</button>
                    </form>
                    <p>Al iniciar sesión, acepta los Términos y Condiciones</p>
                    <button className="login-registerbutton">Crear una cuenta</button>
            </div>
        </div>
        <Footer />
        </div>
    )
    
}

export default Login;