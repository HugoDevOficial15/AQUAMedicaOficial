// import sceneImage from "../../assets/images/hero/hero-scene.webp";
import HeroProduct from "./HeroProduct";

export default function HeroScene() {
    return (
        <div className="hero-scene">

            <img
                src={sceneImage}
                alt="Hero Scene"
                className="hero-scene-image"
            />

            <HeroProduct />

        </div>
    );
}