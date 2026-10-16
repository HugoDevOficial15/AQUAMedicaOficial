import {
    FaGem,
    FaHeart,
    FaHandshake,
    FaShieldAlt,
    FaStar,
    FaUsers
} from "react-icons/fa";

const values = [

    "Disciplina",
    "Respeto",
    "Puntualidad",
    "Honestidad",
    "Gratitud",

    "Trabajo en equipo",
    "Compromiso",
    "Actitud",
    "Responsabilidad",
    "Confiabilidad",

    "Tolerancia",
    "Confianza",
    "Desafío",
    "Lealtad",
    "Empatía"

];

const icons = [

    <FaShieldAlt />,
    <FaHeart />,
    <FaStar />,
    <FaGem />,
    <FaHandshake />,
    <FaUsers />

];

export default function ValuesContent() {

    return (

        <section>

            <div className="values-header">

                <span>

                    NUESTRA CULTURA

                </span>

                <h3>

                    Valores que nos representan

                </h3>

                <p>

                    En AQUA Médica creemos que la excelencia comienza con las personas.
                    Estos valores guían nuestras decisiones, fortalecen nuestro trabajo en
                    equipo y reflejan el compromiso que mantenemos con nuestros clientes,
                    colaboradores y la sociedad.

                </p>

            </div>

            <div className="values-grid">

                {

                    values.map((value, index) => (

                        <article

                            key={value}

                            className="value-chip"

                        >

                            <div className="value-icon">

                                {

                                    icons[index % icons.length]

                                }

                            </div>

                            <span>

                                {value}

                            </span>

                        </article>

                    ))

                }

            </div>

        </section>

    );

}