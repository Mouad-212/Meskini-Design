import { Link } from 'react-router-dom';
import React from 'react';

const Social = () => {
    return (
        <>
            <ul>
                <li><Link to="https://web.facebook.com/Meskinidesign" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link to="https://www.instagram.com/meskinidesign" target="_blank"><i className="fa-brands fa-instagram"></i></Link></li>
                <li><Link to="https://wa.me/212765693665" target="_blank"><i className="fab fa-whatsapp"></i></Link></li>
                <li><Link to="https://www.tiktok.com/@meskinidesign" target="_blank"><i className="fab fa-tiktok"></i></Link></li>
                <li><Link to="https://www.google.com/search?kgmid=/g/11t9w402sn&hl=en-MA&q=Meskini+Design&shndl=30&kgs=13c034fe3bcb1548#lrd=0xda76b28ff899313:0xdc2d23e05c723066,1,,,," target="_blank"><i className="fab fa-google"></i></Link></li>
            </ul>            
        </>
    );
};

export default Social;