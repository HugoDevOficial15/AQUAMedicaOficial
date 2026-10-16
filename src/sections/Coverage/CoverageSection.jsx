import "./CoverageSection.css";

import CoverageContent from "./CoverageContent";
import CoverageMap from "./CoverageMap";
import CoverageStats from "./CoverageStats";
import CoverageFeatures from "./CoverageFeatures";

import CountryCards from "./components/CountryCards";


import { useState } from "react";


export default function CoverageSection() {

    const [activeCountry, setActiveCountry] = useState(null);


    return (
        <section className="coverage">

            <div className="coverage-container">

                <div className="coverage-grid">

                    <CoverageContent />

                    {/* <CoverageMap /> */}

                    <CoverageMap activeCountry={activeCountry} />
                </div>
                <CountryCards
                    activeCountry={activeCountry}
                    setActiveCountry={setActiveCountry}
                />
                {/* <CoverageStats /> */}

                <CoverageFeatures />

            </div>

        </section>
    );
}