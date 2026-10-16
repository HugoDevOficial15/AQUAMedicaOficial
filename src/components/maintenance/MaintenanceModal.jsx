import "./MaintenanceModal.css";

import logoAqua from "../../assets/images/logo/logo.png";
import "./MaintenanceModal.css";

export default function MaintenanceModal() {
    const redirectUrl = "https://aquamedica.net/web/";

    const handleRedirect = () => {
        window.location.href = redirectUrl;
    };

    return (
        <div className="maintenance-overlay">
            <div className="maintenance-modal">

                {/* Decoraciones */}
                <div className="maintenance-glow maintenance-glow-1"></div>
                <div className="maintenance-glow maintenance-glow-2"></div>

                {/* Contenido */}
                <div className="maintenance-content">
                    <img
                        src={logoAqua}
                        alt="AQUA Médica"
                        className="maintenance-logo"
                    />

                    {/* Icono */}
                    <div className="maintenance-icon">
                        <span>⚙</span>
                    </div>

                    {/* Título */}
                    <div className="maintenance-label">
                        SITIO WEB EN MANTENIMIENTO
                    </div>

                    <h1>
                        Estamos mejorando
                        <br />
                        <span>nuestro sitio</span>
                    </h1>

                    <p className="maintenance-description">
                        Estamos realizando algunas mejoras para ofrecerte
                        una experiencia más rápida, moderna y segura.
                    </p>

                    <p className="maintenance-message">
                        Nuestro sitio estará disponible nuevamente muy pronto.
                    </p>

                    {/* Línea decorativa */}
                    <div className="maintenance-divider">
                        <span></span>
                        <i></i>
                        <span></span>
                    </div>

                    {/* Botón */}
                    <button
                        className="maintenance-button"
                        onClick={handleRedirect}
                    >
                        <img
                            src={logoAqua}
                            alt=""
                            className="maintenance-button-logo"
                        />

                        <span>
                            Ir al sitio de AQUA Médica
                        </span>

                        <span className="maintenance-arrow">
                            →
                        </span>
                    </button>

                    {/* Footer */}
                    <div className="maintenance-footer">
                        <span></span>
                        <p>
                            AQUA Médica
                        </p>
                        <span></span>
                    </div>

                </div>
            </div>
        </div>
    );
}