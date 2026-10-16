import "./ContactSection.css";

import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock
} from "react-icons/fa";

export default function ContactSection() {

    return (

        <section className="contact">

            <div className="contact-container">

                <div className="contact-header">

                    <span className="section-tag">

                        CONTACTO

                    </span>

                    <h2>

                        ¿Necesitas más información?

                    </h2>

                    <p>

                        Estamos listos para atenderte y responder cualquier duda
                        sobre nuestros productos y servicios.

                    </p>

                </div>

                <div className="contact-grid">

                    <aside className="contact-info">

                        <div className="contact-item">
                            <FaMapMarkerAlt />
                            <div>
                                <h3>Dirección</h3>
                                <p>Carretera Federal México-Cuautla km 65.8 No. 8 Col Teltelcingo, 62757 Cuautla, Morelos, México</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <FaPhoneAlt />
                            <div>
                                <h3>Teléfono</h3>
                                <p>+52 (735) 301 45 65</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <FaEnvelope />
                            <div>
                                <h3>Correo</h3>
                                <p>aqua@aquamedica.com.mx</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <FaClock />
                            <div>
                                <h3>Horario</h3>
                                <p>Lunes a Viernes<br />08:00 - 17:30 hrs</p>
                            </div>
                        </div>

                    </aside>

                    <div className="contact-form">

                        <input type="text" placeholder="Nombre" />

                        <input type="text" placeholder="Empresa" />

                        <input type="email" placeholder="Correo electrónico" />

                        <input type="tel" placeholder="Teléfono" />

                        <textarea
                            rows="6"
                            placeholder="Escribe tu mensaje..."
                        />

                        <button>

                            Enviar mensaje

                        </button>

                    </div>

                </div>

                <div className="contact-map">

                    <iframe

                        title="AQUA Médica"

                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30202.291828066467!2d-98.9200384!3d18.874367999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce6954ddfd5899%3A0xa4a6be56b5c64b95!2sAQUA%20M%C3%A9dica%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses!2smx!4v1782486717837!5m2!1ses!2smx"

                        loading="lazy"

                        referrerPolicy="strict-origin-when-cross-origin"

                        allowFullScreen

                    />

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30045.820395795992!2d-99.23796404395668!3d19.724220323551773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d220247669dddb%3A0x87655b8b1ef289eb!2zVGVwb3R6b3Rsw6FuLCBNw6l4Lg!5e0!3m2!1ses!2smx!4v1788019622177!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}

                    <a

                        className="contact-map-button"

                        href="https://maps.google.com/?q=AQUA+Médica+S.A.+de+C.V."

                        target="_blank"

                        rel="noreferrer"

                    >

                        Cómo llegar

                    </a>

                </div>

            </div>

        </section>

    );

}