import latinAmerica from "../../assets/images/maps/latin-america.png";

export default function CoverageMap({ activeCountry }) {
    return (
        <div className="coverage-map">

            <div className="coverage-map-wrapper">

                <img
                    src={latinAmerica}
                    alt="Mapa de Latinoamérica"
                    className="coverage-map-image"
                />

                <svg
                    className="coverage-map-overlay"
                    viewBox="0 0 1200 1600"
                    preserveAspectRatio="xMidYMid meet"
                >


                    {/* MÉXICO */}
                    <circle
                        className={`coverage-node coverage-node-main ${activeCountry === "MX" ? "active" : ""}`}
                        cx="400"
                        cy="450"
                        r="14"
                    />

                    {/* GUATEMALA */}
                    <circle
                        className={`coverage-node ${activeCountry === "GT" ? "active" : ""}`}
                        cx="430"
                        cy="500"
                        r="8"
                    />

                    <g className={`coverage-label ${activeCountry === "GT" ? "active" : ""}`}>

                        <rect
                            x="635"
                            y="582"
                            width="125"
                            height="36"
                            rx="18"
                        />

                        <text
                            x="697"
                            y="600"
                        >
                            Guatemala
                        </text>

                    </g>

                    {/* PANAMÁ */}
                    <circle
                        className={`coverage-node ${activeCountry === "PA" ? "active" : ""}`}
                        cx="500"
                        cy="500"
                        r="8"
                    />


                    <g className={`coverage-label ${activeCountry === "PA" ? "active" : ""}`}>
                        <rect
                            x="575"
                            y="642"
                            width="110"
                            height="36"
                            rx="18"
                        />
                        <text
                            x="630"
                            y="660"
                        >
                            Panamá
                        </text>
                    </g>

                    {/* VENEZUELA */}
                    <circle
                        className={`coverage-node ${activeCountry === "VE" ? "active" : ""}`}
                        cx="600"
                        cy="500"
                        r="8"
                    />


                    <g className={`coverage-label ${activeCountry === "VE" ? "active" : ""}`}>
                        <rect
                            x="815"
                            y="682"
                            width="135"
                            height="36"
                            rx="18"
                        />
                        <text
                            x="882"
                            y="700"
                        >
                            Venezuela
                        </text>
                    </g>




                    {/* MÉXICO → GUATEMALA */}
                    <path
                        className="coverage-route"
                        d="M400 450 C480 590 450 560 620 600"
                    />

                    {/* MÉXICO → PANAMÁ */}
                    <path
                        className="coverage-route"
                        d="M400 450 C500 520 610 600 700 660"
                    />

                    {/* MÉXICO → VENEZUELA */}
                    <path
                        className="coverage-route"
                        d="M400 450 C540 500 690 520 800 700"
                    />
                </svg>




            </div>

        </div>
    );
}