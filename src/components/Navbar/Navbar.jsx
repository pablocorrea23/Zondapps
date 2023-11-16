import React, { useState } from 'react';
import './Navbar.css';
import logo_nav from '../../assets/Capa 1.svg'
import instagram from '../../assets/instagram.svg'
import mail from '../../assets/mail.svg'
import facebook from '../../assets/facebook.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo_nav} alt="Logo Navbar" />
            </div>

            <div className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className='contenedor_menu_imagen'>
                <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <button>Nuestros servicios</button>
                    <button>Equipo</button>
                    <button>Contacto</button>
                </ul>
            </div>

            <div className='iconos_nav'>
                <div className='iconos_img'><img src={instagram} alt="instagram" /></div>
                <div className='iconos_img'><img src={mail} alt="mail" /></div>
                <div className='iconos_img'><img src={facebook} alt="facebook" /></div>
            </div>
        </nav>
    );
};

export default Navbar;