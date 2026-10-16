import {
    FaAward,
    FaIndustry,
    FaUsers,
    FaGlobeAmericas
} from "react-icons/fa";

const stats = [
    {
        icon: <FaAward />,
        number: "25+",
        text: "Años de experiencia"
    },
    {
        icon: <FaIndustry />,
        number: "4",
        text: "Plantas de producción"
    },
    {
        icon: <FaUsers />,
        number: "200+",
        text: "Colaboradores"
    },
    {
        icon: <FaGlobeAmericas />,
        number: "3",
        text: "Países exportados"
    }
];

export default function CoverageStats() {
    return (
        <div className="coverage-stats">

            {stats.map((item, index) => (

                <div
                    className="coverage-stat"
                    key={index}
                >

                    <div className="coverage-stat-icon">
                        {item.icon}
                    </div>

                    <h3>{item.number}</h3>

                    <p>{item.text}</p>

                </div>

            ))}

        </div>
    );
}