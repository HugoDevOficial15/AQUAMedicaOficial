import "./HeroSection.css";

import HeroContent from "./HeroContent";
import HeroProduct from "./HeroProduct";
import HeroStats from "./HeroStats";

export default function HeroSection() {
    return (
        <section className="hero">

            <div className="container-custom">

                <div className="hero-grid">

                    <HeroContent />

                    <HeroProduct />

                </div>

            </div>

            {/* <HeroStats /> */}

            <div className="hero-wave">

                <svg
                    viewBox="0 0 1440 220"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#ffffff"
                        d="
            M0,120
            C250,220
            500,0
            720,60
            C980,130
            1180,220
            1440,100
            L1440,220
            L0,220
            Z"
                    />
                </svg>

            </div>


            <HeroStats />

        </section>
    );
}