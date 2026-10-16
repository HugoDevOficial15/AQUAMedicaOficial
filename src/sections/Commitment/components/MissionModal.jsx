import {
    FaBullseye,
    FaEye
} from "react-icons/fa";

import Modal from "./Modal";

export default function MissionModal({ close }) {

    return (

        <Modal

            title="Misión y Visión"

            subtitle="Nuestro propósito y la dirección que guía el crecimiento de AQUA Médica."

            close={close}

        >

            <div className="mission-grid">

                <article className="mission-card">

                    <div className="mission-icon">

                        <FaBullseye />

                    </div>

                    <span className="mission-label">

                        MISIÓN

                    </span>

                    <p>

                        Estar comprometidos a proveer a nuestros Clientes
                        productos de Clase Mundial.

                    </p>

                </article>

                <article className="mission-card">

                    <div className="mission-icon">

                        <FaEye />

                    </div>

                    <span className="mission-label">

                        VISIÓN

                    </span>

                    <p>

                        Ser la compañía líder en la fabricación de Concentrados
                        Ácidos, Soluciones y Polvos de Bicarbonato para
                        Hemodiálisis, sin dejar de buscar nuevas oportunidades
                        de negocio.

                    </p>

                </article>

            </div>

        </Modal>

    );

}