import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="nav main-menu">
            <ul className="navigation">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about-us">Quiénes Somos</Link></li>
                <li className="dropdown">
                    <Link to="#">Servicios</Link>
                    <ul>
                        <li><Link to="/services">Copilot</Link></li>
                        <li><Link to="/service-details">Power Platform</Link></li>
                        <li><Link to="/services">SharePoint Online / On-Premise</Link></li>
                        <li><Link to="/services">Microsoft 365</Link></li>
                        <li><Link to="/service-details">Onedrive</Link></li>
                        <li><Link to="/services">Microsoft Planner</Link></li>
                        <li><Link to="/services">Microsoft Teams</Link></li>
                        <li><Link to="/service-details">Azure</Link></li>
                        <li><Link to="/services">Microsoft Project</Link></li>

                    </ul>
                </li>

                <li><Link to="/contact-pages">Contacto</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
