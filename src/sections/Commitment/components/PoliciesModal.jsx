import { useState } from "react";

import Modal from "./Modal";

export default function PoliciesModal({ close }) {

    const [tab, setTab] = useState("quality");

    return (

        <Modal

            title="Políticas"

            subtitle="Nuestro compromiso con la calidad, la seguridad y el bienestar de nuestros colaboradores."

            close={close}

        >

            <div className="policy-tabs">

                <button

                    className={tab === "quality" ? "active" : ""}

                    onClick={() => setTab("quality")}

                >

                    Calidad

                </button>

                <button

                    className={tab === "safety" ? "active" : ""}

                    onClick={() => setTab("safety")}

                >

                    Seguridad y Salud

                </button>

                <button

                    className={tab === "risk" ? "active" : ""}

                    onClick={() => setTab("risk")}

                >

                    Riesgos Psicosociales

                </button>

            </div>

            <div className="policy-content">

                {

                    tab === "quality" && (

                        <>

                            <h3>

                                Política de Calidad

                            </h3>

                            <p>

                                AQUA Médica es una empresa que cumple totalmente con los requisitos de sus clientes y los reglamentarios; estamos certificados en Buenas Prácticas de Fabricación para garantizar la calidad de nuestros productos, contribuyendo a mejorar la calidad de vida del usuario final.

                            </p>

                            <p>

                                Contamos con capital humano competente y un Sistema de Gestión de Calidad basado en la mejora continua, certificado bajo estándares internacionales, lo que nos permite ser una organización confiable, eficiente y rentable.

                            </p>

                            <p>

                                Aplicamos acciones permanentes para mejorar el ambiente laboral, reducir el impacto ambiental y fortalecer nuestro compromiso con la sociedad.

                            </p>

                        </>

                    )

                }

                {

                    tab === "safety" && (

                        <>

                            <h3>

                                Política de Seguridad y Salud

                            </h3>

                            <p>

                                AQUA Médica tiene el compromiso de prevenir los Factores de Riesgo Psicosocial buscando reducir cualquier
                                ameneza a la integridad física, mental y cosial de sus colaboradores en un ambiente laboral seguro y saludable para tarabajar.

                            </p>

                            <p>

                                Promovemos un Enterno Organizacional Favorable fomentando el trato con amabilidad, cortesía, igualdad y respeto entre los compañeros de cualquier
                                puesto de trabajo, visitantes, proveedores y clientes.

                            </p>

                            <p>

                                Favorecemos la estabilidad emocial de nuestro personal, dándole la confinza para cumplir con sus responsabilidades con base al conocimiento
                                y habiliad que le fueron enseñadas pra ejecutarlas y mejorarlas continuamente. Además con periocidad desarrollamos actividades culturales y deportivas
                                dentro o fuera de las instalaciones y buscamos el equilibrio en la relación trabajo-familia, respetando sus derechos como trabajadores.

                            </p>

                            <p>
                                Desarrollamos el sentido de pertenencia hacie nuestra Organización, con la vivencia permanente de nuestros valores y la difusión de los logros del negocio,
                                así como el reconocimiento de la participación activa de todo el personal.
                            </p>

                            <p>
                                Nos declaramos en contra de la violencia y el acoso laboral, de manera que analizamos, atendemos y sancionamos las actos relacionados. Todo el personal tiene
                                la plena libertad para denunciar actos de hostigamiento o malos tratos que puedan dañar su integridad y/o salud.
                            </p>

                            <p>Tenemos el compromiso de cultivar el desarrollo de nuevas y mejores hablidades en nuestros lideres, con el din de crear un entorno laboral libre de riesgos para todos nuestros colaboradores</p>

                        </>

                    )

                }

                {

                    tab === "risk" && (

                        <>

                            <h3>

                                Política de Prevención de Riesgos Psicosociales

                            </h3>

                            <p>AQUA Médica está comprometida con la Seguridad y Salud dando cumplimiento a la normatividad y a los requisitos</p>

                        </>

                    )

                }

            </div>

        </Modal>

    );

}