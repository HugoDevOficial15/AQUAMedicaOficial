import { useEffect, useState } from "react";
import "./Header.css";

import logo from "../../assets/images/logo/logo.png";

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <header
            className={`header ${scrolled ? "scrolled" : ""}`}
        >

            <div className="container-custom header-container">

                {/* <div className="header-logo">
                    AQUA MÉDICA
                </div> */}


                <div className="header-logo">

                    <img
                        src={logo}
                        alt="AQUA MÉDICA"
                        className="header-logo-img"
                    />

                    <span>
                        AQUA Médica
                    </span>

                </div>

                <nav className="header-nav">

                    <a href="#productos">
                        Productos
                    </a>

                    <a href="#empresa">
                        Empresa
                    </a>

                    <a href="#certificaciones">
                        Certificaciones
                    </a>

                    <a href="#cobertura">
                        Cobertura
                    </a>

                    <a href="#contacto">
                        Contacto
                    </a>

                </nav>

                <button className="lang-btn">
                    ES
                </button>

            </div>

        </header>
    );
}