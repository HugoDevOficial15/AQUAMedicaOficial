import {
    FaBullseye,
    FaGem,
    FaShieldAlt,
    FaArrowRight
} from "react-icons/fa";

const cards = [

    {
        id: "mission",
        icon: <FaBullseye />,
        title: "Misión y Visión",
        description:
            "Conoce el propósito que impulsa a AQUA Médica y la visión que guía nuestro crecimiento.",
        button: "Ver información"
    },

    {
        id: "values",
        icon: <FaGem />,
        title: "Valores y Principios",
        description:
            "Descubre los valores que vivimos todos los días y los principios que rigen nuestras decisiones.",
        button: "Ver información"
    },

    {
        id: "policies",
        icon: <FaShieldAlt />,
        title: "Políticas",
        description:
            "Consulta nuestras políticas de calidad, seguridad y prevención que respaldan nuestro compromiso.",
        button: "Ver información"
    }

];

export default function CommitmentCards({ openModal }) {

    return (

        <div className="commitment-grid">

            {cards.map(card => (

                <article
                    key={card.id}
                    className="commitment-card"
                >

                    <div className="commitment-icon">

                        {card.icon}

                    </div>

                    <h3>

                        {card.title}

                    </h3>

                    <p>

                        {card.description}

                    </p>

                    <button
                        className="commitment-button"
                        onClick={() => openModal(card.id)}
                    >

                        {card.button}

                        <FaArrowRight />

                    </button>

                </article>

            ))}

        </div>

    );

}