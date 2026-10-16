import {
    FaAward,
    FaShieldAlt,
    FaHandshake,
    FaTruck
} from "react-icons/fa";

const features = [
    {
        icon: <FaAward />,
        title: "Calidad Certificada",
        text: "Cumplimos con los más altos estándares internacionales."
    },
    {
        icon: <FaShieldAlt />,
        title: "Confianza",
        text: "Más de dos décadas siendo aliados estratégicos."
    },
    {
        icon: <FaHandshake />,
        title: "Compromiso",
        text: "Construimos relaciones de largo plazo con nuestros clientes."
    },
    {
        icon: <FaTruck />,
        title: "Logística Eficiente",
        text: "Exportaciones seguras y entregas puntuales."
    }
];

export default function CoverageFeatures() {
    return (
        <div className="coverage-features">

            {features.map((item, index) => (

                <div
                    className="coverage-feature"
                    key={index}
                >

                    <div className="coverage-feature-icon">
                        {item.icon}
                    </div>

                    <div>

                        <h4>{item.title}</h4>

                        <p>{item.text}</p>

                    </div>

                </div>

            ))}

        </div>
    );
}