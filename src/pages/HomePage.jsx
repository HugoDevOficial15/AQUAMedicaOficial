import HeroSection from "../sections/Hero/HeroSection";

import ProductsSection from "../components/home/ProductsSection";

import WhyChooseSection from "../sections/WhyChoose/WhyChooseSection";

import CertificationsSection from "../sections/Certifications/CertificationsSection";

import CoverageSection from "../sections/Coverage/CoverageSection";

import AboutSection from "../sections/About/AboutSection";

import CommitmentSection from "../sections/Commitment/CommitmentSection";

import ContactSection from "../sections/Contact/ContactSection";

import Footer from "../sections/Footer/Footer";

import MaintenanceModal from "../components/maintenance/MaintenanceModal";


export default function HomePage() {

    return (
        <>
            <HeroSection />

            <ProductsSection />

            <WhyChooseSection />

            <CertificationsSection />

            <CoverageSection />

            <AboutSection />

            <CommitmentSection />

            <ContactSection />

            <Footer />

            {/* Modal de mantenimiento */}
            <MaintenanceModal />
        </>
    );
}