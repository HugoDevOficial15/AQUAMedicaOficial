
import "./AquacidFormulations.css";

import product100200 from "../../../assets/images/products/AQUACID-01.png";
import product120220 from "../../../assets/images/products/AQUACID-02.png";

import AquacidTable from "./components/AquacidTable";

const formulations = [
    {
        id: 1,
        name: "AQUACID ®-100/200",
        image: product100200,
        description: (
            <>
                Los <strong className="aquacid-red">AQUACID ®-100/200</strong>
                {" "}junto con el{" "}
                <strong className="aquacid-blue">QUABIC ®-100</strong>,
                en presentación de 650 g, o{" "}
                <strong className="aquacid-blue">QUABIC ®-300</strong>,
                se usan en máquinas de dilución 1:44, como las de Gambro,
                BBraun y Fresenius.
            </>
        )
    },
    {
        id: 2,
        name: "AQUACID ®-120/220",
        image: product120220,
        description: (
            <>
                Los <strong className="aquacid-red">AQUACID ®-120/220</strong>
                {" "}junto con el{" "}
                <strong className="aquacid-blue">QUABIC ®-100</strong>,
                en presentación de 500 g o{" "}
                <strong className="aquacid-blue">QUABIC ®-300</strong>,
                se usan en máquinas de dilución 1:34, como las de NIPRO.
            </>
        )
    }
];

export default function AquacidFormulations() {
    return (
        <section className="aquacid-formulations" id="aquacid-formulations">

            <div className="aquacid-formulations-container">

                <header className="aquacid-formulations-header">

                    <span className="aquacid-formulations-tag">
                        NUESTRAS PRESENTACIONES
                    </span>

                    <h2>
                        Formulaciones <span>AQUACID ®</span>
                    </h2>

                    <p>
                        Se fabrican diferentes formulaciones de concentrados
                        ácidos para hemodiálisis, diseñadas para distintos
                        equipos y relaciones de dilución.
                    </p>

                </header>

                <div className="aquacid-formulations-grid">

                    {formulations.map((item) => (
                        <article
                            className="aquacid-formulation-card"
                            key={item.id}
                        >

                            <div className="aquacid-formulation-image">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                />

                            </div>

                            <div className="aquacid-formulation-description">
                                <p>{item.description}</p>
                            </div>

                        </article>
                    ))}

                </div>

            </div>


            {/* TABLA TÉCNICA */}
            <AquacidTable />

        </section>
    );
}
