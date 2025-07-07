import Header from "@/components/header"
import MayorMessage from "@/components/mayor-message/mayor-message"
import { Testimonials } from "@/components/testimonials/testimonials"
import Services from "@/components/services/services"
import News from "@/components/news/news"
import HeroSection from "@/components/hero/hero-section"


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* <Header /> */}
      <HeroSection />
      <MayorMessage />
      <Services />
      <News />
      <Testimonials />
    </main>
  )
}
