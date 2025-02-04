import Ambassadeur from "@/components/ambassade/ambassadeur/ambassadeur";
import Experience from "@/components/ambassade/experience/experience";
import Hero from "@/components/ambassade/hero/hero";
import Juridiction from "@/components/ambassade/juridiction/juridiction";
import Photo from "@/components/ambassade/photo/photo";


export default function Ambassade(){
    return(
        <div>
            <Hero/>
            <Ambassadeur/>
            <Experience/>
            <Photo/>
            <Juridiction/>
        </div>
    );
}