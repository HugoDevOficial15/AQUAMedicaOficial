import {
    FaCalendarAlt,
    FaIndustry,
    FaUsers,
    FaGlobeAmericas
} from "react-icons/fa";

export default function HeroStats() {

    const stats = [
        {
            icon: <FaCalendarAlt />,
            number: "25+",
            title: "Años de experiencia",
            text: "Comprometidos con la salud y el bienestar."
        },
        {
            icon: <FaIndustry />,
            number: "4",
            title: "Plantas de producción",
            text: "Tecnología de vanguardia y procesos certificados."
        },
        {
            icon: <FaUsers />,
            number: "200+",
            title: "Colaboradores",
            text: "Talento comprometido con la calidad."
        },
        {
            icon: <FaGlobeAmericas />,
            number: "Presencia",
            title: "Internacional",
            text: "Exportamos a diversos países."
        }
    ];

    return (
        <section className="hero-stats">

            {stats.map((item, index) => (
                <div
                    className="hero-stat"
                    key={index}
                >
                    <div className="hero-stat-icon">
                        {item.icon}
                    </div>

                    <div className="hero-stat-content">

                        <h3>{item.number}</h3>

                        <h4>{item.title}</h4>

                        <p>{item.text}</p>

                    </div>

                </div>
            ))}

        </section>
    );
}