import Header from "@/components/header"
import Footer from "@/components/footer"
import MayorMessage from "@/components/mayor-message/mayor-message"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <MayorMessage />
      <Footer />
    </main>
  )
}
