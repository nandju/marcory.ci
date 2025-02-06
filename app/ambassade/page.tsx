import Ambassadeur from "@/components/ambassade/ambassadeur/ambassadeur";
import Experience from "@/components/ambassade/experience/experience";
import Hero from "@/components/ambassade/hero/hero";
import Juridiction from "@/components/ambassade/juridiction/juridiction";
import Photo from "@/components/ambassade/photo/photo";
import Monument from "@/components/tourisme/monument/monument";
import President from "@/components/tourisme/president/president";
import Statistic from "@/components/tourisme/statistic/statistic";
import History from "@/components/tourisme/history/history";
import Geography from "@/components/tourisme/geography/geography";
import Cultural from "@/components/tourisme/cultural/cultural";

export default function Ambassade(){
    return(
        <div>
            <Hero/>
            <Ambassadeur/>
            <Experience/>
            <Photo/>
            <Juridiction/>
            <Monument/>
            <President/>
            <Statistic/>
            <History/>
            <Geography/>
            <Cultural/>
        </div>
    );
}