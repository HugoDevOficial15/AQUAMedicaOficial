export default function HeroContent() {
    return (
        <div className="hero-content">

            <span className="hero-badge">
                +25 años de experiencia
            </span>

            <div className="hero-family">
                <span>AQUACID®</span>
            </div>

            <h1 className="hero-title">
                Concentrados Acidos para
                <br />
                Hemodiálisis
            </h1>

            <p className="hero-description">
                Fabricamos concentrados ácidos
                para tratamientos de hemodiálisis con presencia
                nacional e internacional.
            </p>

            <div className="hero-actions">

                {/* <button href="#productos" className="hero-btn-primary"> */}
                <a href="#productos" className="hero-btn-primary">
                    Ver Productos
                </a>
                {/* </button> */}

                {/* <button className="hero-btn-secondary">
                    Certificaciones
                </button> */}

                <a href="#certificaciones" className="hero-btn-secondary">
                    Certificaciones
                </a>

            </div>

        </div>
    );
}