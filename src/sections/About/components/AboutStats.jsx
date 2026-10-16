import {
    FaFlask,
    FaGlobeAmericas,
    FaHospital,
    FaAward
} from "react-icons/fa";

const stats = [

    {
        icon: <FaAward />,
        value: "25+",
        label: "Años de experiencia"
    },

    {
        icon: <FaHospital />,
        value: "500+",
        label: "Clientes atendidos"
    },

    {
        icon: <FaGlobeAmericas />,
        value: "4",
        label: "Países con presencia"
    },

    {
        icon: <FaFlask />,
        value: "100%",
        label: "Control de calidad"
    }

];

export default function AboutStats() {

    return (

        <div className="about-stats">

            {stats.map((item) => (

                <article
                    key={item.label}
                    className="about-stat"
                >

                    <div className="about-stat-icon">
                        {item.icon}
                    </div>

                    <h3>{item.value}</h3>

                    <p>{item.label}</p>

                </article>

            ))}

        </div>

    );

}