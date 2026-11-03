
import Footer from "../../sections/Footer/Footer";
import "./aquacid.css";

export default function AquacidPage() {
    return (
        <main className="aquacid-page">

            <section className="aquacid-hero">
                <div className="aquacid-hero-content">
                    <span className="aquacid-eyebrow">
                        LÍNEA DE PRODUCTOS · AQUA MÉDICA
                    </span>

                    <h1>
                        AQUACID<sup>®</sup>
                    </h1>

                    <div className="aquacid-line" />

                    <h2>
                        Concentrados Ácidos para Hemodiálisis
                    </h2>

                    <p>
                        Soluciones especializadas para tratamientos
                        de hemodiálisis de alto flujo.
                    </p>
                </div>
            </section>

            <section className="aquacid-intro">
                <span>CONOCE NUESTRA LÍNEA</span>
                <h2>Innovación y calidad en cada formulación</h2>
                <p>
                    AQUACID es la marca comercial de los concentrados
                    ácidos para hemodiálisis fabricados por
                    AQUA Médica, S.A. de C.V.
                </p>
            </section>

            <Footer />

        </main>
    );
}
