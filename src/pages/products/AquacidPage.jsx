
import Footer from "../../sections/Footer/Footer";

import AquacidHero from "../../sections/products/aquacid/AquacidHero";
import AquacidPackaging from "../../sections/products/aquacid/AquacidPackaging";
import AquacidFormulations from "../../sections/products/aquacid/AquacidFormulations";
import AquacidSafetySheets from "../../sections/products/aquacid/components/AquacidSafetySheets";

import "../../sections/products/aquacid/Aquacid.css";

export default function AquacidPage() {
    return (
        <main className="aquacid-page">

            <AquacidHero />

            <AquacidPackaging />

            <AquacidFormulations />

            <AquacidSafetySheets />

            <Footer />

        </main>
    );
}
