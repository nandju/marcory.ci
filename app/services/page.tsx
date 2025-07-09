import HeroSection from "@/components/services-page/hero/hero-section";
import ServicesFAQ from "@/components/services-page/services-faq/services-faq";
import Services from "@/components/services/services";



export default function ServicesPage(){
    return(
        <div>
            <HeroSection />
            <Services />
            <ServicesFAQ />
        </div>
    );
}