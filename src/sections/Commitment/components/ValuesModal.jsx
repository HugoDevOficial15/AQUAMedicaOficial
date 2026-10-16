import Modal from "./Modal";

import ValuesContent from "./modal/ValuesContent";
import PrinciplesContent from "./modal/PrinciplesContent";

export default function ValuesModal({ close }) {

    return (

        <Modal

            title="Valores y Principios"

            subtitle="La cultura organizacional que guía nuestras decisiones, fortalece nuestro equipo y refleja el compromiso de AQUA Médica."

            close={close}

        >

            <ValuesContent />

            <PrinciplesContent />

        </Modal>

    );

}