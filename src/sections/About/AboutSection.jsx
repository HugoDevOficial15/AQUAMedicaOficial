import "./AboutSection.css";

import AboutContent from "./AboutContent";
import AboutGallery from "./components/AboutGallery";
import AboutStats from "./components/AboutStats";

import "./AboutGallery.css";

export default function AboutSection() {

    return (

        <section className="about">

            <div className="about-container">

                <div className="about-grid">

                    <AboutContent />

                    {/* <AboutImage /> */}
                    <AboutGallery />

                </div>

                <AboutStats />

            </div>

        </section>

    );

}