import ContactInfo from "@/components/contact/contact-info/contact-info";
import EmergencyNumbers from "@/components/contact/emergency-contacts/emergency-contacts";

import HeroSection from "@/components/contact/hero/hero-section";


export default function Contact(){
    return(
        <div>
            <HeroSection />
            <ContactInfo />
            <EmergencyNumbers />
        </div>
    );
}