import {
    FaFlag,
    FaShippingFast,
    FaGlobeAmericas,
    FaCheckCircle,
    FaCertificate,
    FaIndustry,
    FaPlaneDeparture
} from "react-icons/fa";

const countries = [
    {
        icon: <FaFlag />,
        country: "México",
        code: "MX",
        description: "Planta principal y centro de distribución.",
        badge: "Principal",
        items: [
            "Producción",
            "Distribución",
            "Exportación"
        ]
    },
    {
        icon: <FaShippingFast />,
        country: "Guatemala",
        code: "GT",
        description: "Exportaciones constantes y logística segura.",
        badge: "Activo",
        items: [
            "Logística",
            "Importación",
            "Distribución"
        ]
    },
    {
        icon: <FaGlobeAmericas />,
        country: "Panamá",
        code: "PA",
        description: "Cobertura internacional para hemodiálisis.",
        badge: "Activo",
        items: [
            "Cobertura",
            "Operación",
            "Soporte"
        ]
    },
    {
        icon: <FaCheckCircle />,
        country: "Venezuela",
        code: "VE",
        description: "Distribución con presencia consolidada.",
        badge: "Activo",
        items: [
            "Distribución",
            "Calidad",
            "Servicio"
        ]
    }
];

export default function CountryCards({ activeCountry, setActiveCountry }) {
    return (

        <div className="country-cards">

            {countries.map((item) => (

                <article
                    key={item.country}
                    className="country-card"
                    onMouseEnter={() => setActiveCountry(item.code)}
                    onMouseLeave={() => setActiveCountry(null)}
                >
                    <div className="country-card-top">

                        <div className="country-card-icon">
                            {item.icon}
                        </div>

                        <span className="country-badge">
                            {item.badge}
                        </span>

                    </div>

                    <span className="country-card-code">
                        {item.code}
                    </span>

                    <h3>
                        {item.country}
                    </h3>

                    <p>
                        {item.description}
                    </p>

                    <div className="country-services">

                        <span>
                            <FaIndustry />
                            {item.items[0]}
                        </span>

                        <span>
                            <FaPlaneDeparture />
                            {item.items[1]}
                        </span>

                        <span>
                            <FaCertificate />
                            {item.items[2]}
                        </span>

                    </div>

                </article>

            ))}

        </div>

    );

}