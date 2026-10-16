import "./ProductsSection.css";

import productAQUACID from "../../assets/images/products/aquacid.png";
import productAQUACETIC from "../../assets/images/products/aquacetic.png";
import productQUABIC from "../../assets/images/products/quabic.png";
import productCITRACID from "../../assets/images/products/citracid.png";
import productXTERIL from "../../assets/images/products/xTeril.png";
import productDRYCID from "../../assets/images/products/drycid.png";
import productXTERILGEL from "../../assets/images/products/xterilgil.png";

export default function ProductsSection() {

    const products = [
        {
            id: 1,
            category: "CATEGORIA DEL PRODUCTO",
            name: "QUABIC",
            description:
                "Es nuestra marca registrada de Polvos de Bicarbonato de Sodio Grado Hemodiálisis. Se envasa en bolsas de Polietileno contenido de 500 o 600 g y en cajas de cartón con 36 ó 28 bolsas respectivamente.",
            image: productQUABIC,

        },
        {
            id: 2,
            category: "CATEGORÍA DEL PRODUCTO",
            name: "AQUACID",
            description:
                "Es la marca comercial de los Concentrados Ácidos para la Hemodialisis que fabrica AQUA Médica, S.A. de C.V, son productos libres de pirógenos, lo que los hace ideales para usarse en los tratamientos de diálisis de alto flujo",
            image: productAQUACID,
            featured: true
        },
        {
            id: 3,
            category: "CATEGORIA DEL PRODUCTO",
            name: "AQUACETIC",
            description:
                "Es nuestra marca comercial registrada de Vinagre Industrial producto exclusivamente para la desinfección de las máquinas de Hemodiálisis.  Se fabrica al 30%",
            image: productAQUACETIC
        },
        {
            id: 4,
            category: "CATEGORIA DEL PRODUCTO",
            name: "CITRACID",
            description:
                "Desinfectante para máquinas de hemodiálisis hecho a base de Ácido Cítrico grado alimenticio al 50% y agua purificada por ósmosis inversa que cumple con las especificaciones. UNE-EN ISO 23500-3:2019",
            image: productCITRACID
        },
        {
            id: 5,
            category: "CATEGORIA DEL PRODUCTO",
            name: "X-TÉRIL",
            description:
                "El X-TÉRIL® 10 es un componente bactericida, fungicida, tuberculicida, virucida (inactíva el virus de la Hepatitis B), disolvente de sangre e inhibidor de la producción de pirógenos",
            image: productXTERIL
        },
        {
            id: 6,
            category: "CATEGORIA DEL PRODUCTO",
            name: "DRY-CID",
            description:
                "DRY-CID® es un Concentrado Ácido Seco que se usa para preparar, in situ, Concentrados Ácidos para Hemodiálisis, ocupando para esto un Equipo de Disolución",
            image: productDRYCID
        },
        {
            id: 7,
            category: "CATEGORIA DEL PRODUCTO",
            name: "X-TERILGEL",
            description:
                "X-TERIL® GEL es un antibacterial afectivo, idela para sanitizar las manos eliminando virus, bacterias y hongos que se pueden encontrar en lugares públicos o incluso pueden transmitirse con un simple saludo.",
            image: productXTERILGEL
        }
        
    ];

    return (
        <section
            className="products-section"
            id="productos"
        >

            <div className="products-container">

                <div className="products-header">

                    <span className="products-tag">
                        PRODUCTOS
                    </span>

                    <h2>
                        Soluciones para
                        <br />
                        Hemodiálisis
                    </h2>

                    <div className="products-divider"></div>

                    <p>
                        Fabricamos concentrados certificados con los más altos estándares de calidad para el sector salud.
                    </p>

                </div>

                <div className="products-grid">

                    {products.map((product) => (

                        <article
                            key={product.id}
                            className={`product-card ${product.featured ? "featured" : ""
                                }`}
                        >

                            {product.featured && (
                                <div className="product-badge">
                                    MÁS UTILIZADO
                                </div>
                            )}

                            <div className="product-image-wrapper">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                            </div>

                            <span className="product-category">
                                {product.category}
                            </span>

                            <h3>
                                {product.name}
                            </h3>

                            <p>
                                {product.description}
                            </p>

                            <button>
                                Ver ficha técnica
                            </button>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}