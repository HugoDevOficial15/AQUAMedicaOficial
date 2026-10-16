import "./Footer.css";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaArrowUp
} from "react-icons/fa";

import logo from "../../assets/images/logo/logo.png";

export default function Footer() {

    const scrollTop = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

    return (

        <footer className="footer">

            <div className="footer-divider">

                <svg

                    xmlns="http://www.w3.org/2000/svg"

                    viewBox="0 0 1440 120"

                    preserveAspectRatio="none"

                >

                    <path

                        fill="#051321"

                        d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"

                    />

                </svg>

            </div>

            <div className="footer-wave"></div>

            <div className="footer-glow"></div>

            <div className="footer-grid-pattern"></div>

            <div className="footer-container">

                <div className="footer-top">

                    <div className="footer-brand">

                        <img

                            src={logo}

                            alt="AQUA Médica"

                        />

                        <h2>

                            Productos de Clase Mundial

                        </h2>

                        <p>

                            Fabricamos soluciones para hemodiálisis con más de
                            25 años de experiencia, innovación y compromiso con
                            la salud de miles de pacientes.

                        </p>

                        <div className="footer-social">

                            <a href="#">

                                <FaFacebookF />

                            </a>

                            <a href="#">

                                <FaInstagram />

                            </a>

                            <a href="#">

                                <FaLinkedinIn />

                            </a>

                        </div>

                    </div>

                    <div className="footer-links">

                        <h3>

                            Empresa

                        </h3>

                        <a href="#hero">Inicio</a>

                        <a href="#products">Productos</a>

                        <a href="#about">Empresa</a>

                        <a href="#coverage">Cobertura</a>

                        <a href="#contact">Contacto</a>

                    </div>

                    <div className="footer-links">

                        <h3>

                            Certificaciones

                        </h3>

                        <span>Buenas Prácticas de Fabricación</span>

                        <span>ISO</span>

                        <span>COFEPRIS</span>

                        <span>Exportación Internacional</span>

                    </div>

                    <div className="footer-contact">

                        <h3>

                            Contacto

                        </h3>

                        <p>

                            <FaEnvelope />

                            aqua@aquamedica.com.mx

                        </p>

                        <p>

                            <FaPhoneAlt />

                            +52 (735) 301 4565

                        </p>

                        <p>

                            <FaMapMarkerAlt />

                            Tetelcingo, Morelos, México

                        </p>

                    </div>

                </div>

                <div className="footer-bottom">

                    <button

                        className="footer-top-button"

                        onClick={scrollTop}

                    >

                        <FaArrowUp />

                    </button>

                    <p>

                        © 2026 AQUA Médica S.A. de C.V.

                    </p>

                </div>

            </div>

        </footer>

    );

}