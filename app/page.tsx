import Hero from "@/components/home/hero/hero";
import Presentation from "@/components/home/presentation/presentation";
import Event from "@/components/home/event/event";
import Service from "@/components/home/service/service";
import About from "@/components/home/about/about";
import News from "@/components/home/news/news";



export default function Home() {
  return (
    <div>
      <Hero/>
      <Presentation/>
      <Event/>
      <Service/>
      <About/>
      <News/>
    </div>
  );
}

