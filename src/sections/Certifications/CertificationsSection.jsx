import "./CertificationsSection.css";

import {
    // FaCertificate,
    // FaShieldAlt,
    FaGlobeAmericas,
    FaClipboardCheck
} from "react-icons/fa";


// IMGS
import iso13485 from "../../assets/images/certifications/aenor.jpg";
import cofepris from "../../assets/images/certifications/cofepris.png";
import elssa from "../../assets/images/certifications/elssa.png";
import infonavit from "../../assets/images/certifications/infonavit.png";
import iqnet from "../../assets/images/certifications/iqnet.png";
import fda from "../../assets/images/certifications/fda.png";
import stps from "../../assets/images/certifications/stps.webp";
import citpsi from "../../assets/images/certifications/citpsi.png";
import profepa from "../../assets/images/certifications/profepa.png";


// PDFS
import aenorPdf from "../../assets/pdf/aenor.pdf";
import cofeprisPdf from "../../assets/pdf/cofepris.pdf";
import elssaPdf from "../../assets/pdf/elssa.pdf";
import iqnetPdf from "../../assets/pdf/iqnet.pdf";
import infonavitPdf from "../../assets/pdf/infonavit.pdf";
import fdaPdf from "../../assets/pdf/fda.pdf";
import citpsiPdf from "../../assets/pdf/citpsi.pdf";
import stpsPdf from "../../assets/pdf/stps.pdf";
import profepaPdf from "../../assets/pdf/profepa.pdf";
// ...

export default function CertificationsSection() {

    // IMGS
    const certifications = [
        {
            image: iso13485,
            title: "AENOR",
            pdf: aenorPdf,
            text: "Sistema de gestión de calidad para dispositivos y procesos médicos.",
        },
        {
            image: cofepris,
            title: "COFEPRIS",
            pdf: cofeprisPdf,
            text: "Comisión Federal para la Protección contra Riesgos Sanitarios"
        },
        {
            image: elssa,
            title: "ELSSA",
            pdf: elssaPdf,
            text: "Entornos Laborables Seguros y Saludables"
        },
        {
            image: infonavit,
            title: "INFONAVIT",
            pdf: infonavitPdf,
            text: "Instituto del Fondo Nacional de la Vivienda para los Trabajadores"
        },
        {
            image: iqnet,
            title: "IQNET",
            pdf: iqnetPdf,
            text: "Red Internacional de Certificación"
        },
        {
            image: fda,
            title: "FDA",
            pdf: fdaPdf,
            text: "Administración de Alimentos y Medicamentos"
        },
        {
            image: stps,
            title: "STPS",
            pdf:stpsPdf,
            text: "Secretaría del Trabajo y Previsión Social"
        },
        {
            image: citpsi,
            title: "CITPSI",
            pdf: citpsiPdf,
            text: "Organización Psicosocialmente Proactiva"
        },
        {
            image: profepa,
            title: "PROFEPA",
            pdf:profepaPdf,
            text: "Procuraduría Federal de Proteccción al Ambiente"
        }
    ];

    // PDFS



    return (
        <section
            className="certifications-section"
            id="certificaciones"
        >

            <div className="certifications-container">

                <div className="certifications-header">

                    <span>
                        CERTIFICACIONES
                    </span>

                    <h2>
                        Calidad y cumplimiento
                        <br />
                        en cada proceso
                    </h2>

                    <p>
                        Nuestro compromiso con la seguridad y la calidad nos permite ofrecer productos confiables para tratamientos de hemodiálisis.
                    </p>

                </div>

                <div className="certifications-grid">

                    {certifications.map((item, index) => (



                        <a
                            key={index}
                            href={item.pdf || undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="certification-card"
                            onClick={(e) => {
                                if (!item.pdf) e.preventDefault();
                            }}
                        >

                            <div className="certification-icon">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="certification-image"
                                />

                            </div>

                            <h3>
                                {item.title}
                            </h3>

                            <p>
                                {item.text}
                            </p>

                        </a>

                    ))}

                </div>

            </div>

        </section>
    );
}