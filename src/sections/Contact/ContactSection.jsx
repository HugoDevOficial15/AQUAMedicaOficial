// import "./ContactSection.css";

// import {
//     FaMapMarkerAlt,
//     FaPhoneAlt,
//     FaEnvelope,
//     FaClock
// } from "react-icons/fa";

// export default function ContactSection() {

//     return (

//         <section className="contact" id="contacto">

//             <div className="contact-container">

//                 <div className="contact-header">

//                     <span className="section-tag">

//                         CONTACTO

//                     </span>

//                     <h2>

//                         ¿Necesitas más información?

//                     </h2>

//                     <p>

//                         Estamos listos para atenderte y responder cualquier duda
//                         sobre nuestros productos y servicios.

//                     </p>

//                 </div>

//                 <div className="contact-grid">

//                     <aside className="contact-info">

//                         <div className="contact-item">
//                             <FaMapMarkerAlt />
//                             <div>
//                                 <h3>Dirección</h3>
//                                 <p>Carretera Federal México-Cuautla km 65.8 No. 8 Col Teltelcingo, 62757 Cuautla, Morelos, México</p>
//                             </div>
//                         </div>

//                         <div className="contact-item">
//                             <FaPhoneAlt />
//                             <div>
//                                 <h3>Teléfono</h3>
//                                 <p>+52 (735) 301 45 65</p>
//                             </div>
//                         </div>

//                         <div className="contact-item">
//                             <FaEnvelope />
//                             <div>
//                                 <h3>Correo</h3>
//                                 <p>aqua@aquamedica.com.mx</p>
//                             </div>
//                         </div>

//                         <div className="contact-item">
//                             <FaClock />
//                             <div>
//                                 <h3>Horario</h3>
//                                 <p>Lunes a Viernes<br />08:00 - 17:30 hrs</p>
//                             </div>
//                         </div>

//                     </aside>

//                     <div className="contact-form">

//                         <input type="text" placeholder="Nombre" />

//                         <input type="text" placeholder="Empresa" />

//                         <input type="email" placeholder="Correo electrónico" />

//                         <input type="tel" placeholder="Teléfono" />

//                         <textarea
//                             rows="6"
//                             placeholder="Escribe tu mensaje..."
//                         />

//                         <button>

//                             Enviar mensaje

//                         </button>

//                     </div>

//                 </div>

//                 <div className="contact-map">

//                     <iframe

//                         title="AQUA Médica"

//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30202.291828066467!2d-98.9200384!3d18.874367999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce6954ddfd5899%3A0xa4a6be56b5c64b95!2sAQUA%20M%C3%A9dica%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses!2smx!4v1782486717837!5m2!1ses!2smx"

//                         loading="lazy"

//                         referrerPolicy="strict-origin-when-cross-origin"

//                         allowFullScreen

//                     />

//                     {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30045.820395795992!2d-99.23796404395668!3d19.724220323551773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d220247669dddb%3A0x87655b8b1ef289eb!2zVGVwb3R6b3Rsw6FuLCBNw6l4Lg!5e0!3m2!1ses!2smx!4v1788019622177!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}

//                     <a

//                         className="contact-map-button"

//                         href="https://maps.google.com/?q=AQUA+Médica+S.A.+de+C.V."

//                         target="_blank"

//                         rel="noreferrer"

//                     >

//                         Cómo llegar

//                     </a>

//                 </div>

//             </div>

//         </section>

//     );


// }




import { useState } from "react";
import "./ContactSection.css";

import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock
} from "react-icons/fa";

const CONTACT_API =
    "https://us-central1-aquamedica-web.cloudfunctions.net/enviarContacto";

export default function ContactSection() {

    const [loading, setLoading] = useState(false);
    const [mensajeEstado, setMensajeEstado] = useState("");
    const [tipoMensaje, setTipoMensaje] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        const form = e.currentTarget;

        setLoading(true);
        setMensajeEstado("");
        setTipoMensaje("");

        try {
            const datos = Object.fromEntries(
                new FormData(form).entries()
            );

            const response = await fetch(CONTACT_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datos)
            });

            const resultado = await response.json();

            if (!response.ok || !resultado.success) {
                throw new Error(
                    resultado.message ||
                    "No fue posible enviar tu mensaje."
                );
            }

            form.reset();

            setTipoMensaje("success");
            setMensajeEstado(
                "¡Mensaje enviado correctamente! " +
                "Gracias por contactar a AQUA Médica."
            );

        } catch (error) {

            console.error(
                "Error al enviar formulario de contacto:",
                error
            );

            setTipoMensaje("error");
            setMensajeEstado(
                error.message ||
                "No fue posible enviar tu mensaje. Intenta nuevamente."
            );

        } finally {
            setLoading(false);
        }
    };

    return (

        <section className="contact" id="contacto">

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
                                <p>
                                    Carretera Federal México-Cuautla km 65.8
                                    No. 8 Col Teltelcingo, 62757 Cuautla,
                                    Morelos, México
                                </p>
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
                                <p>
                                    Lunes a Viernes
                                    <br />
                                    08:00 - 17:30 hrs
                                </p>
                            </div>
                        </div>

                    </aside>

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            maxLength={120}
                            autoComplete="name"
                            required
                        />

                        <input
                            type="text"
                            name="empresa"
                            placeholder="Empresa"
                            maxLength={150}
                            autoComplete="organization"
                        />

                        <input
                            type="email"
                            name="correo"
                            placeholder="Correo electrónico"
                            maxLength={254}
                            autoComplete="email"
                            required
                        />

                        <input
                            type="tel"
                            name="telefono"
                            placeholder="Teléfono"
                            maxLength={30}
                            autoComplete="tel"
                        />

                        <textarea
                            rows="6"
                            name="mensaje"
                            placeholder="Escribe tu mensaje..."
                            maxLength={5000}
                            required
                        />

                        {mensajeEstado && (
                            <p
                                className={`contact-feedback ${tipoMensaje}`}
                                role="status"
                                aria-live="polite"
                            >
                                {mensajeEstado}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                        >
                            {loading
                                ? "Enviando..."
                                : "Enviar mensaje"
                            }
                        </button>

                    </form>

                </div>

                <div className="contact-map">

                    <iframe
                        title="AQUA Médica"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30202.291828066467!2d-98.9200384!3d18.874367999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce6954ddfd5899%3A0xa4a6be56b5c64b95!2sAQUA%20M%C3%A9dica%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses!2smx!4v1782486717837!5m2!1ses!2smx"
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />

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
