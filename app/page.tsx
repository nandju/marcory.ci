import Header from "@/components/header"
import Footer from "@/components/footer"
import MayorMessage from "@/components/mayor-message/mayor-message"
import { Testimonials } from "@/components/testimonials/testimonials"
import Services from "@/components/services/services"
import News from "@/components/news/news"


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <MayorMessage />
      <Services />
      <News />
      <Testimonials />
      <Footer />
    </main>
  )
}
