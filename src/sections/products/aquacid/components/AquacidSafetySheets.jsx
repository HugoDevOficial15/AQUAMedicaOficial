
import "./AquacidSafetySheets.css";

const safetySheets = [
    {
        id: 1,
        name: "AQUACID®-100",
        pdf: "/pdf/hojas-seguridad/HS100.pdf"
    },
    {
        id: 2,
        name: "AQUACID®-120",
        pdf: "/pdf/hojas-seguridad/HS120.pdf"
    },
    {
        id: 3,
        name: "AQUACID®-200",
        pdf: "/pdf/hojas-seguridad/HS200.pdf"
    },
    {
        id: 4,
        name: "AQUACID®-220",
        pdf: "/pdf/hojas-seguridad/HS220.pdf"
    }
];

export default function AquacidSafetySheets() {

    return (
        <section className="aquacid-safety-section" id="aquacid-safety">

            <div className="aquacid-safety-container">

                <div className="aquacid-safety-header">
                    <span>DOCUMENTACIÓN TÉCNICA</span>

                    <h2>HOJAS DE SEGURIDAD</h2>

                    <p>
                        Consulta las hojas de seguridad correspondientes
                        a cada formulación de nuestra línea AQUACID®.
                    </p>
                </div>

                <div className="aquacid-safety-grid">

                    {safetySheets.map((sheet) => (

                        <article
                            className="aquacid-safety-card"
                            key={sheet.id}
                        >

                            <div className="aquacid-safety-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                >
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <path d="M14 2v6h6" />
                                    <path d="M8 13h8M8 17h8" />
                                </svg>
                            </div>

                            <a
                                href={sheet.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aquacid-safety-button"
                                aria-label={`Abrir hoja de seguridad ${sheet.name}`}
                            >
                                ABRIR
                            </a>

                            <h3>{sheet.name}</h3>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}
