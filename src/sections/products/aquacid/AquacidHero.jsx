
import "./AquacidHero.css";

import aquacidProducts from "../../../assets/images/products/product.png";

const presentations = [
    {
        name: "AQUACID",
        number: "100",
        potassium: "2-K"
    },
    {
        name: "AQUACID",
        number: "120",
        potassium: "2-K"
    },
    {
        name: "AQUACID",
        number: "200",
        potassium: "0-K"
    },
    {
        name: "AQUACID",
        number: "220",
        potassium: "0-K"
    }
];

export default function AquacidHero() {
    return (
        <section className="aquacid-hero">

            <div className="aquacid-hero-background">
                <span className="aquacid-shape shape-one"></span>
                <span className="aquacid-shape shape-two"></span>
                <span className="aquacid-shape shape-three"></span>
            </div>

            <div className="aquacid-hero-container">

                {/* CONTENIDO PRINCIPAL */}
                <div className="aquacid-hero-content">

                    <div className="aquacid-hero-label">
                        <span></span>
                        LÍNEA DE PRODUCTOS · AQUA MÉDICA
                    </div>

                    <h1>
                        AQUACID<span>®</span>
                    </h1>

                    <div className="aquacid-hero-line"></div>

                    <h2>
                        Concentrados Ácidos
                        <br />
                        para Hemodiálisis
                    </h2>

                    <p className="aquacid-hero-description">
                        Es la marca comercial registrada de los
                        <strong> Concentrados Ácidos para Hemodiálisis </strong>
                        que fabrica AQUA Médica. Son productos libres de
                        pirógenos, lo que los hace ideales para usarse en
                        los tratamientos de Hemodiálisis de alto flujo.
                    </p>

                    <div className="aquacid-hero-actions">

                        <a href="#aquacid-formulations">
                            Conocer presentaciones
                            <span>→</span>
                        </a>

                        <span className="aquacid-hero-note">
                            Calidad y confianza para la salud
                        </span>

                    </div>

                </div>

                {/* IMAGEN DE PRODUCTOS */}
                <div className="aquacid-hero-visual">

                    <div className="aquacid-product-glow"></div>

                    <div className="aquacid-product-image">

                        <img
                            src={aquacidProducts}
                            alt="Envases de concentrados ácidos AQUACID"
                        />

                    </div>

                    <div className="aquacid-product-caption">
                        <span>PRODUCTOS</span>
                        <strong>4 presentaciones</strong>
                    </div>

                </div>

            </div>

            {/* FRANJA DE PRESENTACIONES */}
            <div className="aquacid-hero-bottom">

                <div className="aquacid-bottom-container">

                    <div className="aquacid-bottom-title">
                        <span>CONOCE NUESTRA LÍNEA</span>
                        <strong>Cuatro formulaciones</strong>
                    </div>

                    <div className="aquacid-presentations">

                        {presentations.map((item) => (

                            <div
                                className="aquacid-presentation"
                                key={item.number}
                            >

                                <span className="aquacid-presentation-name">
                                    {item.name}
                                </span>

                                <strong>
                                    -{item.number}
                                </strong>

                                <span className="aquacid-potassium">
                                    {item.potassium}
                                </span>

                            </div>

                        ))}

                    </div>

                    <div className="aquacid-bottom-description">
                        Productos en 4 diferentes presentaciones
                    </div>

                </div>

            </div>

        </section>
    );
}
