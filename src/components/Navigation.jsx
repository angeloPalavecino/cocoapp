import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="nav main-menu">
            <ul className="navigation">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about-us">Quiénes Somos</Link></li>
                <li className="dropdown">
                    <Link to="#">Consultoria</Link>
                    <ul>
                        <li><Link to="/service-details">Copilot (IA)</Link></li>
                        <li><Link to="/service-details">Power Platform (BI, Apps, Automate)</Link></li>
                        <li><Link to="/service-details">SharePoint Online / On-Premise</Link></li>
                        <li><Link to="/service-details">Microsoft 365 (Teams, Outlook, Onedrive, Planner, Project, otros...)</Link></li>                      
                    </ul>
                </li> 
                <li className="dropdown">
                    <Link to="#">Servicios</Link>
                    <ul>
                        <li><Link to="/services">Licencias Microsoft</Link></li>
                        <li><Link to="/services">Workshops</Link></li>
                        <li><Link to="/services">Outsourcing de TI</Link></li>
                        <li><Link to="/services">Capacitaciones M365</Link></li>
                        <li><Link to="/services">Capacitaciones Copilot</Link></li>
                        <li><Link to="/services">Digitalización Documental </Link></li>
                        <li><Link to="/services">modern Work</Link></li>
                    </ul>
                </li>

                <li><Link to="/contact-pages">Contacto</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
