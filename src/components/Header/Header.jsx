
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/images/logo/logo.png";

export default function Header({ solid = false }) {

    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Detectar desplazamiento
    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    // Navegar a las secciones incluso desde páginas de productos
    useEffect(() => {

        if (!location.hash) return;

        const id = decodeURIComponent(
            location.hash.substring(1)
        );

        let attempts = 0;
        let frameId;

        const scrollToSection = () => {

            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                return;
            }

            // Esperar a que HomePage termine de renderizar
            if (attempts < 20) {
                attempts++;
                frameId = requestAnimationFrame(scrollToSection);
            }
        };

        frameId = requestAnimationFrame(scrollToSection);

        return () => {
            cancelAnimationFrame(frameId);
        };

    }, [location.pathname, location.hash]);

    return (
        <header
            className={`header ${(scrolled || solid) ? "scrolled" : ""
                }`}
        >

            <div className="container-custom header-container">

                <Link
                    to="/"
                    className="header-logo"
                >
                    <img
                        src={logo}
                        alt="AQUA MÉDICA"
                        className="header-logo-img"
                    />

                    <span>
                        AQUA Médica
                    </span>
                </Link>

                <nav className="header-nav">

                    <Link to="/#productos">
                        Productos
                    </Link>

                    <Link to="/#about-content">
                        Empresa
                    </Link>

                    <Link to="/#certificaciones">
                        Certificaciones
                    </Link>

                    <Link to="/#cobertura">
                        Cobertura
                    </Link>

                    <Link to="/#contacto">
                        Contacto
                    </Link>

                </nav>

                <button
                    type="button"
                    className="lang-btn"
                >
                    ES
                </button>

            </div>

        </header>
    );
}
