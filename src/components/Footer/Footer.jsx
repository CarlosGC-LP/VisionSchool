import { useNavigate } from "react-router-dom"
import './Footer.css'

function Footer() {
    const navigate = useNavigate();

    const handleNavClick = (hash) => {
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                scrollToSection(hash);
            }, 100);
        } else {
            scrollToSection(hash);
        }
    };

    const scrollToSection = (hash) => {
        const element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
    };

    return (
        <div className='footer'>
            <div className='footer__contenido'>
                <div className='footer__contenido--marca'>
                    <h2>VisionSchool</h2>
                    <p>®2025</p>
                    <p>Privacy - Terms</p>
                </div>

                <div className='footer__contenido-link'>
                    <div className='footer__contenido--product'>
                        <h2>Product</h2>
                        <p>VisionSchool</p>
                    </div>

                    <div className='footer__contenido--links'>
                        <h2>Links</h2>
                        <ul className='footer__contenido--links--ul'>
                            <li className="header__nav-list"><a href="#inicio" onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}>Inicio</a></li>
                            <li className="header__nav-list"><a href="#planes" onClick={(e) => { e.preventDefault(); handleNavClick('planes')}}>Planes</a></li>
                            <li className="header__nav-list"><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about')}}>About</a></li>
                            <li className="header__nav-list"><a href="#testimonios" onClick={(e) => { e.preventDefault(); handleNavClick('testimonios')}}>Testimonios</a></li>
                        </ul>
                    </div>

                    <div className='footer__contenido--redes'>
                        <h2>Redes</h2>
                        <div className='footer__contenido--redes--iconos'>
                            <img src={require(`../../image/twitter.png`)} alt="twitter"/>
                            <img src={require(`../../image/youtube.png`)} alt="youtube"/>
                            <img src={require(`../../image/facebook.png`)} alt="facebook"/>
                            <img src={require(`../../image/github.png`)} alt="github"/>
                            <img src={require(`../../image/at.png`)} alt="at"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer