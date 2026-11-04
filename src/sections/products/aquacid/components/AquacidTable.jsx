
import "./AquacidTable.css";

const formulations = [
    {
        product: "AQUACID®-100",
        sodium: "100,00",
        acetate: "4,00",
        dextrose: "100,00",
        registry: "0639C99",
        potassium: [
            { value: "1,00", calcium: ["2,50", "3,00", "3,50"], chloride: ["104,25", "104,75", "105,25"] },
            { value: "2,00", calcium: ["2,50", "3,00", "3,50"], chloride: ["105,25", "105,75", "106,25"] }
        ],
        magnesium: "0,75"
    },
    {
        product: "AQUACID®-200",
        sodium: "100,00",
        acetate: "4,00",
        dextrose: "100,00",
        registry: "0638C99",
        potassium: [
            { value: "0,00", calcium: ["2,50", "3,00", "3,50"], chloride: ["103,25", "103,75", "104,25"] }
        ],
        magnesium: "0,75"
    },
    {
        product: "AQUACID®-120",
        sodium: "103,00",
        acetate: "3,00",
        dextrose: "100,00",
        registry: "01988C99",
        potassium: [
            { value: "1,00", calcium: ["2,50", "3,00", "3,50"], chloride: ["107,50", "108,00", "108,50"] },
            { value: "2,00", calcium: ["2,50", "3,00", "3,50"], chloride: ["108,50", "109,00", "109,50"] }
        ],
        magnesium: "1,00"
    },
    {
        product: "AQUACID®-220",
        sodium: "103,00",
        acetate: "3,00",
        dextrose: "100,00",
        registry: "01986C99",
        potassium: [
            { value: "0,00", calcium: ["2,50", "3,00", "3,50"], chloride: ["106,50", "107,00", "107,50"] }
        ],
        magnesium: "1,00"
    }
];

function FormulationRows({ item }) {
    const totalRows = item.potassium.length * 3;

    return (
        <>
            {item.potassium.map((potassium, groupIndex) => (
                potassium.calcium.map((calcium, index) => {
                    const firstRow = groupIndex === 0 && index === 0;

                    return (
                        <tr
                            key={`${item.product}-${groupIndex}-${index}`}
                            className={
                                groupIndex > 0 && index === 0
                                    ? "aquacid-table-group-divider"
                                    : ""
                            }
                        >
                            {firstRow && (
                                <>
                                    <td rowSpan={totalRows} className="aquacid-table-product">
                                        {item.product}
                                    </td>

                                    <td rowSpan={totalRows}>{item.sodium}</td>
                                </>
                            )}

                            {index === 0 && (
                                <td rowSpan={3}>{potassium.value}</td>
                            )}

                            <td>{calcium}</td>

                            {firstRow && (
                                <td rowSpan={totalRows}>{item.magnesium}</td>
                            )}

                            <td>{potassium.chloride[index]}</td>

                            {firstRow && (
                                <>
                                    <td rowSpan={totalRows}>{item.acetate}</td>
                                    <td rowSpan={totalRows}>{item.dextrose}</td>
                                    <td rowSpan={totalRows}>{item.registry}</td>
                                </>
                            )}
                        </tr>
                    );
                })
            ))}
        </>
    );
}

export default function AquacidTable() {
    return (
        <section className="aquacid-table-section">

            {/* <div className="aquacid-table-heading">
                <span>ESPECIFICACIONES TÉCNICAS</span>
                <h2>Formulaciones AQUACID®</h2>
                <p>
                    Concentraciones de los componentes por presentación
                    de concentrados ácidos para hemodiálisis.
                </p>
            </div> */}

            <div className="aquacid-table-wrapper">

                <table className="aquacid-table">

                    <thead>
                        <tr>
                            <th>PRODUCTO</th>
                            <th>Sodio<br />mEq/l</th>
                            <th>Potasio<br />mEq/l</th>
                            <th>Calcio<br />mEq/l</th>
                            <th>Magnesio<br />mEq/l</th>
                            <th>Cloruros<br />mEq/l</th>
                            <th>Acetato<br />mEq/l</th>
                            <th>Dextrosa<br />mg/dl</th>
                            <th>Registro<br />S.S.A.</th>
                        </tr>
                    </thead>

                    {formulations.map((item) => (
                        <tbody key={item.product}>
                            <FormulationRows item={item} />
                        </tbody>
                    ))}

                </table>

            </div>

        </section>
    );
}
