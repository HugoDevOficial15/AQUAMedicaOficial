import { FaCheckCircle } from "react-icons/fa";

const principles = [

    "Fabricar productos que ayuden a mejorar la calidad de vida de los pacientes que utilizan nuestros productos.",

    "Contar con personal capacitado y calificado, capaz de trabajar en equipo para lograr nuestra misión.",

    "Impulsar el desarrollo mediante el desempeño, el entrenamiento y la capacitación continua.",

    "Conducir nuestros negocios de manera honesta y legal, manteniendo la confidencialidad con clientes y colaboradores.",

    "Maximizar el crecimiento y la rentabilidad del capital invertido con responsabilidad.",

    "Actuar con responsabilidad social y compromiso con nuestro entorno."

];

export default function PrinciplesContent() {

    return (

        <section className="principles-section">

            <div className="principles-header">

                <span>

                    NUESTROS PRINCIPIOS

                </span>

                <h3>

                    Compromisos que orientan nuestras acciones

                </h3>

                <p>

                    Los principios de AQUA Médica representan la forma en que actuamos
                    todos los días para ofrecer productos de calidad, fortalecer nuestro
                    equipo humano y generar confianza en nuestros clientes.

                </p>

            </div>

            <div className="principles-list">

                {

                    principles.map((item) => (

                        <article

                            key={item}

                            className="principle-card"

                        >

                            <div className="principle-icon">

                                <FaCheckCircle />

                            </div>

                            <p>

                                {item}

                            </p>

                        </article>

                    ))

                }

            </div>

        </section>

    );

}