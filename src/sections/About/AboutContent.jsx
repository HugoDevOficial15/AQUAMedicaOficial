import { FaArrowRight } from "react-icons/fa";

export default function AboutContent() {

    return (

        <div className="about-content">

            <span className="about-tag">
                SOBRE AQUA MÉDICA
            </span>

            <h2 className="about-title">
                Más de <span>25 años</span> desarrollando soluciones para la salud.
            </h2>

            <div className="about-line"></div>

            <p className="about-description">

                <strong>AQUA Médica S.A. de C.V.</strong>  es una Empresa dedicada, desde hace más de 27años,
                principalmente a la fabricación de Concentrados Ácidos para Hemodiálisis y el Acondicionamiento de polvo
                de Bicarbonato de Sodio, grado Hemodiálisis. Cuenta con Certificado vigente de Buenas Prácticas de Fabricación, 
                emitido por la COFEPRIS (Comisión Federal para la Protección contra Riesgos Sanitarios, dependiente de la Secretaría de Salud del Gobierno Mexicano).
                Además estamos certificados en un Sistema de de Calidad de acuerdo a <strong>UNE EN ISO 13485</strong>  para dispositivos Médicos. 


            </p>

            <div className="about-highlights">

                <div className="about-item">
                    ✔ Manufactura nacional certificada
                </div>

                <div className="about-item">
                    ✔ Cobertura en Latinoamérica
                </div>

                <div className="about-item">
                    ✔ Innovación y desarrollo continuo
                </div>

                <div className="about-item">
                    ✔ Más de 25 años de experiencia
                </div>

            </div>

            <button className="about-button">

                Conoce más

                <FaArrowRight />

            </button>

        </div>

    );

}