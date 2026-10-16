import { useState } from "react";

import "./CommitmentSection.css";

import CommitmentCards from "./components/CommitmentCards";

import MissionModal from "./components/MissionModal";
import ValuesModal from "./components/ValuesModal";
import PoliciesModal from "./components/PoliciesModal";

export default function CommitmentSection() {

    const [modal, setModal] = useState(null);

    return (

        <section className="commitment">

            <div className="commitment-container">

                <div className="commitment-header">

                    <span className="section-tag">

                        COMPROMISO AQUA MÉDICA

                    </span>

                    <h2>

                        Nuestra <span>filosofía</span> empresarial

                    </h2>

                    <p>

                        Conoce la misión, visión, valores, principios y
                        políticas que guían cada una de nuestras acciones.

                    </p>

                </div>

                <CommitmentCards

                    openModal={setModal}

                />

            </div>

            {modal === "mission" && (

                <MissionModal

                    close={() => setModal(null)}

                />

            )}

            {modal === "values" && (

                <ValuesModal

                    close={() => setModal(null)}

                />

            )}

            {modal === "policies" && (

                <PoliciesModal

                    close={() => setModal(null)}

                />

            )}

        </section>

    );

}