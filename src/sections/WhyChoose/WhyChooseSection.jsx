import "./WhyChooseSection.css";

import {
    FaAward,
    FaFlask,
    FaGlobeAmericas,
    FaIndustry
} from "react-icons/fa";

export default function WhyChooseSection() {

    const items = [
        {
            icon: <FaAward />,
            title: "Calidad Certificada",
            text: "Procesos alineados a estándares nacionales e internacionales."
        },
        {
            icon: <FaIndustry />,
            title: "Fabricación Propia",
            text: "Control total sobre nuestros procesos productivos."
        },
        {
            icon: <FaFlask />,
            title: "Alta Pureza",
            text: "Materias primas seleccionadas para máxima confiabilidad."
        },
        {
            icon: <FaGlobeAmericas />,
            title: "Presencia Internacional",
            text: "Exportamos nuestros productos a diversos países."
        }
    ];

    return (
        <section className="why">

            <div className="why-container">

                <div className="why-header">

                    <span>
                        AQUA MÉDICA
                    </span>

                    <h2>
                        Más de 25 años impulsando la calidad en hemodiálisis
                    </h2>

                </div>

                <div className="why-grid">

                    {items.map((item, index) => (

                        <article
                            key={index}
                            className="why-card"
                        >

                            <div className="why-icon">
                                {item.icon}
                            </div>

                            <h3>
                                {item.title}
                            </h3>

                            <p>
                                {item.text}
                            </p>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}