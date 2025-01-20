import React from 'react';

function SingleMenu() {
    return (
        <ul className="navigation onepage-nav">
            <li className="current"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#testimonial">Testimonials</a></li>
              <li><a href="#news">Blog</a></li>
        </ul>
    );
}

export default SingleMenu;
