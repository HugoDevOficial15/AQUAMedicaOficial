
const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");

const SMTP_USER = defineSecret("SMTP_USER");
const SMTP_PASS = defineSecret("SMTP_PASS");

setGlobalOptions({
    maxInstances: 5,
    region: "us-central1",
});

const EMAIL_DESTINO = "sistemas@aquamedica.com.mx";

const ORIGENES_PERMITIDOS = [
    "https://aquamedica.com.mx",
    "https://www.aquamedica.com.mx",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
];

const escaparHTML = (valor = "") => {
    return String(valor)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

exports.enviarContacto = onRequest(
    {
        secrets: [SMTP_USER, SMTP_PASS],
        cors: ORIGENES_PERMITIDOS,
        maxInstances: 5,
    },
    async (req, res) => {
        if (req.method !== "POST") {
            return res.status(405).json({
                success: false,
                message: "Método no permitido.",
            });
        }

        try {
            const {
                nombre,
                empresa,
                correo,
                telefono,
                mensaje,
            } = req.body || {};

            const datos = {
                nombre: String(nombre || "").trim(),
                empresa: String(empresa || "").trim(),
                correo: String(correo || "").trim(),
                telefono: String(telefono || "").trim(),
                mensaje: String(mensaje || "").trim(),
            };

            if (
                !datos.nombre ||
                !datos.correo ||
                !datos.mensaje
            ) {
                return res.status(400).json({
                    success: false,
                    message: "Completa los campos obligatorios.",
                });
            }

            if (
                datos.nombre.length > 120 ||
                datos.empresa.length > 150 ||
                datos.correo.length > 254 ||
                datos.telefono.length > 30 ||
                datos.mensaje.length > 5000
            ) {
                return res.status(400).json({
                    success: false,
                    message: "Uno o más campos exceden el límite permitido.",
                });
            }

            const emailValido =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo);

            if (!emailValido) {
                return res.status(400).json({
                    success: false,
                    message: "El correo electrónico no es válido.",
                });
            }

            const transporter = nodemailer.createTransport({
                host: "mailc75.carrierzone.com",
                port: 587,
                secure: false,
                requireTLS: true,
                auth: {
                    user: SMTP_USER.value(),
                    pass: SMTP_PASS.value(),
                },
                connectionTimeout: 20000,
                greetingTimeout: 20000,
                socketTimeout: 30000,
            });

            await transporter.sendMail({
                from: {
                    name: "AQUA Médica - Sitio Web",
                    address: SMTP_USER.value(),
                },

                to: EMAIL_DESTINO,

                replyTo: datos.correo,

                subject: `Nuevo contacto desde la página web: ${datos.nombre}`,

                text: `
Nuevo mensaje desde el sitio web AQUA Médica.

Nombre: ${datos.nombre}
Empresa: ${datos.empresa || "No especificada"}
Correo: ${datos.correo}
Teléfono: ${datos.telefono || "No especificado"}

Mensaje:
${datos.mensaje}
                `,

                html: `
                    <div style="font-family:Arial,sans-serif;color:#333;">
                        <h2>Nuevo mensaje de contacto</h2>

                        <p><strong>Nombre:
                        </strong> ${escaparHTML(datos.nombre)}</p>
                        <p><strong>Empresa:
                        </strong> 
                        ${escaparHTML(datos.empresa || "No especificada")}</p>
                        <p><strong>Correo:
                        </strong> ${escaparHTML(datos.correo)}</p>
                        <p><strong>Teléfono:</strong> 
                        ${escaparHTML(datos.telefono || "No especificado")}</p>

                        <hr/>

                        <h3>Mensaje:</h3>

                        <p style="white-space:pre-wrap;">
                            ${escaparHTML(datos.mensaje)}
                        </p>

                        <hr/>

                        <p style="color:#888;font-size:12px;">
                            Mensaje enviado desde el sitio web 
                            oficial de AQUA Médica.
                        </p>
                    </div>
                `,
            });

            logger.info("Correo de contacto enviado correctamente.");

            return res.status(200).json({
                success: true,
                message: "Tu mensaje fue enviado correctamente.",
            });
        } catch (error) {
            logger.error("Error al enviar correo de contacto:", error);
            return res.status(500).json({
                success: false,
                message:
                    "No fue posible enviar tu mensaje. Intenta nuevamente.",
            });
        }
    },
);
