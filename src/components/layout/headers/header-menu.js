import { Link } from 'react-router-dom';
import React from 'react';
import logo from "../../assets/img/Logo-meskini-design.png";


const MainMenu = () => {
    return (
        <>
            <ul>
                <li className='menu-item'><Link to='/'>Accueil</Link>
                    <ul className='sub-menu'>
                        <li><Link to='/'>Home 01</Link></li>
                        <li><Link to='/home-two'>Home 02</Link></li>
                        <li><Link to='/home-three'>Home 03</Link></li>
                        <li><Link to='/home-four'>Home 04</Link></li>
                    </ul>
                </li>  
                <li className='menu-item'><Link to='/about-us'>Qui sommes-nous ?</Link>
                </li>
                <li className='menu-item'><Link to='/portfolio/3-columns'>Nos inspirations</Link>
                </li>
                <li className='menu-item'><Link to='/homes/home-4'>
                            <div className="header__area-menubar-left-logo">
                                <Link to='/'><img className='one' src={logo} alt='logo'/></Link>
                            </div>
                        </Link>
                </li>
                <li className='menu-item-has-children'><Link to='/blog'>Types cuisines</Link>
                    <ul className='sub-menu'>
                        <li><Link to='/blog'>Implentation</Link></li>
                        <li><Link to='/blog-standard'>Modèles</Link></li>
                        {/*<li><Link to='/blog/key-steps-to-ensure-a-smooth-building-process'>Blog Details</Link></li>*/}
                    </ul>
                </li>
                <li className='menu-item-has-children'><Link to='/blog'>Équipements</Link>
                    <ul className='sub-menu'>
                        <li><Link to='/blog'>Boiserie</Link></li>
                        <li><Link to='/blog-standard'>Plan de Travail</Link></li>
                        <li><Link to='/blog-standard'>Accesoires</Link></li>
                        <li><Link to='/blog-standard'>Poignées</Link></li>
                        <li><Link to='/blog-standard'>Quincailleries</Link></li>
                        <li><Link to='/blog-standard'>Éclairage intégré</Link></li>
                        {/*<li><Link to='/blog/key-steps-to-ensure-a-smooth-building-process'>Blog Details</Link></li>*/}
                    </ul>
                </li>
                <li><Link to='/contact-us'>Témoignages</Link></li>  

                <li className='menu-item-has-children'><Link to='/blog'>Blog</Link>
                    <ul className='sub-menu'>
                        <li><Link to="/equipment/bois">Bois</Link></li>
                        <li><Link to="/equipment/planTravail">plan de travail</Link></li>
                        <li><Link to="/equipment/poignee">POIGNÉES</Link></li>
                        <li><Link to="/equipment/accessoire">ACCESOIRES</Link></li>
                        <li><Link to="/equipment/quincaillerie">QUINCAILLERIE </Link></li>
                        <li><Link to='/blog'>Blog Grid</Link></li>
                        <li><Link to='/blog-standard'>Blog Standard</Link></li>
                        <li><Link to='/blog/key-steps-to-ensure-a-smooth-building-process'>Blog Details</Link></li>
                    </ul>
                </li>
                <li><Link to='/contact-us'>Contact Us</Link></li>      

            </ul>  
        </>
    );
};

export default MainMenu;