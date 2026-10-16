import { FaStar } from "react-icons/fa";
import productImage from "../../assets/images/products/aquacid.png";

export default function HeroProduct() {
    return (
        <div className="hero-product">

            <div className="hero-product-glow" />

            <div className="hero-circle" />
            {/*             
            <div className="hero-platform">

                <div className="hero-platform-glow" />

                <div className="hero-platform-top" />

                <div className="hero-platform-side" />

            </div> */}

            <img
                src={productImage}
                alt="Familia AQUACID"
                className="hero-product-image"
            />

            <div className="hero-product-badge">

                <div className="hero-product-badge-icon">
                    <FaStar />
                </div>

                <div>
                    <small>PRODUCTO</small>
                    <strong>LÍDER</strong>
                </div>

            </div>

        </div>
    );
}