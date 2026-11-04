
import "./AquacidPackaging.css";

const packagingData = [
    {
        label: "EMPAQUE",
        value: "Galones de 3.785 litros",
        description: "Envases de polietileno"
    },
    {
        label: "CAJAS CON",
        value: "4 galones",
        description: "3.785 litros cada uno"
    },
    {
        label: "TARIMA CON",
        value: "240 galones",
        description: "Producto por tarima"
    },
    {
        label: "PESO / TARIMA",
        value: "900 kg",
        description: "Peso por tarima"
    }
];

export default function AquacidPackaging() {
    return (
        <section className="aquacid-packaging">

            <div className="aquacid-packaging-container">

                <header className="aquacid-packaging-header">

                    <span className="aquacid-section-tag">
                        CONOCE AQUACID ®
                    </span>

                    <h2>
                        Calidad y presentación{" "}
                        <span>en cada envase</span>
                    </h2>

                    <p>
                        AQUACID ® es la marca comercial de los concentrados
                        ácidos para hemodiálisis fabricados por <strong> AQUA MÉDICA,
                            S.A. de C.V. </strong> Son productos libres de pirógenos,
                        ideales para tratamientos de diálisis de alto flujo.
                    </p>

                    <p>
                        Se envasa en galones de polietileno de 3.785 litros,
                        en cajas de cartón con cuatro galones y también
                        se suministra en tambores de polietileno de
                        55 galones (200 litros).
                    </p>

                    <p>
                        <strong>Se fabrican diferentes formulaciones de Concentrados Ácidos para Hemodiálisis:</strong>
                    </p>

                    <p>12 para diluciones 1:44 con 1ó 2 mEq/l de Potasio y 6 sin Potasio.</p>

                    <p>12 para diluciones 1:34 con 1ó 2 mEq/l de Potasio y 6 sin Potasio.</p>

                </header>

                <div className="aquacid-packaging-grid">

                    {packagingData.map((item, index) => (
                        <article
                            className="aquacid-packaging-card"
                            key={index}
                        >
                            <span>{item.label}</span>

                            <h3>{item.value}</h3>

                            <p>{item.description}</p>
                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}
