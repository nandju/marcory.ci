"use client"
import { Marquee } from "@/components/magicui/marquee"
import { Quote } from "lucide-react"
import Image from "next/image"
import { NumberTicker } from "@/components/magicui/number-ticker";

const temoignages = [
  {
    name: "Awa Koné",
    role: "Résidente de Marcory Anoumabo",
    body: "La mairie a vraiment modernisé les services. Aujourd’hui, je fais mes démarches en ligne sans me déplacer. C’est un vrai gain de temps pour nous.",
    img: "/assets/images/illustrations/page-accueil/awa.jpg",
  },
  {
    name: "Kouadio Jean-Baptiste",
    role: "Commerçant au Grand Marché",
    body: "Les rénovations autour du marché ont donné un nouveau souffle à notre activité. La mairie est à l’écoute des petits commerçants.",
    img: "/assets/images/illustrations/page-accueil/kouadio.jpg",
  },
  {
    name: "Mariam Traoré",
    role: "Mère de famille à Marcory Résidentiel",
    body: "Les écoles et les centres pour enfants sont bien encadrés. Je sens que mes enfants grandissent dans un bon environnement.",
    img: "/assets/images/illustrations/page-accueil/mariam.jpg",
  },
  {
    name: "Yao Stéphane",
    role: "Étudiant en informatique",
    body: "Avec la digitalisation de la mairie, on peut accéder aux documents rapidement. C’est un vrai pas vers la modernisation.",
    img: "/assets/images/illustrations/page-accueil/yao.jpg",
  },
  {
    name: "Fatou Bamba",
    role: "Cheffe de coopérative féminine",
    body: "La mairie nous soutient dans nos projets sociaux. Grâce à elle, notre coopérative a obtenu un local et une aide pour démarrer.",
    img: "/assets/images/illustrations/page-accueil/fatou.jpg",
  },
  {
    name: "Cissé Bakary",
    role: "Retraité",
    body: "Je participe souvent aux activités organisées pour les personnes âgées. On se sent vraiment inclus à Marcory.",
    img: "/assets/images/illustrations/page-accueil/cisse.jpg",
  },
//   {
//     name: "Adjé Prisca",
//     role: "Nouvelle habitante de Sicogi",
//     body: "Je viens d’emménager et j’ai tout de suite été bien orientée. Les agents municipaux sont disponibles et accueillants.",
//     img: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     name: "Zadi Hervé",
//     role: "Président d'une association de jeunesse",
//     body: "Grâce au soutien de la mairie, on organise des événements culturels et citoyens qui rassemblent la jeunesse de Marcory.",
//     img: "/placeholder.svg?height=80&width=80",
//   },
];


const premiereLigne = temoignages.slice(0, temoignages.length / 2)
const deuxiemeLigne = temoignages.slice(temoignages.length / 2)

const CarteTemoignage = ({
  img,
  name,
  role,
  body,
}: {
  img: string
  name: string
  role: string
  body: string
}) => {
  return (
    <div className="relative flex flex-col items-center text-center max-w-sm mx-8">
      {/* Image de Profil avec Bordure Verte */}
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-r from-[#009E60] to-[#009E60]">
          <Image
            src={img || "/placeholder.svg"}
            alt={name}
            width={80}
            height={80}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        {/* Icône Citation */}
        <div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#F77F00" }}
        >
          <Quote className="h-4 w-4 text-white fill-current" />
        </div>
      </div>

      {/* Texte du Témoignage */}
      <blockquote className="text-gray-300 text-sm leading-relaxed mb-4 px-4">{body}</blockquote>

      {/* Nom et Rôle */}
      <div className="text-center">
        <h4 className="text-white font-semibold text-lg">{name}</h4>
        <p className="text-[#F77F00] text-sm font-medium">{role}</p>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Image de Fond avec Superposition */}
      <div className="absolute inset-0">
        <Image src="/assets/images/illustrations/page-accueil/parade.png" alt="parade" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#009E60]/90"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10">
        {/* En-tête de Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ce que disent nos Citoyens</h2>
          <p className="text-gray-200 max-w-2xl mx-auto px-4">
            Découvrez les témoignages de nos habitants, commerçants et associations sur la qualité de nos services 
            municipaux et la vie de notre commune.
          </p>
        </div>

        {/* Défilement des Témoignages */}
        <div className="relative flex w-full flex-col items-center justify-center">
          {/* <Marquee pauseOnHover className="[--duration:30s] py-4">
            {premiereLigne.map((temoignage, index) => (
              <CarteTemoignage key={`first-${index}`} {...temoignage} />
            ))}
          </Marquee> */}
          <Marquee reverse pauseOnHover className="[--duration:30s] py-4">
            {deuxiemeLigne.map((temoignage, index) => (
              <CarteTemoignage key={`second-${index}`} {...temoignage} />
            ))}
          </Marquee>

          {/* Superpositions de Dégradé */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#009E60]/90"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#009E60]/90"></div>
        </div>

            {/* Section Statistiques */}
            {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-[#F77F00] mb-2">
                <NumberTicker value={98} className="text-[#F77F00]" />%
                </div>
                <div className="text-white text-sm">Satisfaction des citoyens</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-[#F77F00] mb-2">
                +<NumberTicker value={15000} className="text-[#F77F00]" />
                </div>
                <div className="text-white text-sm">Habitants satisfaits</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-[#F77F00] mb-2">
                +<NumberTicker value={250} className="text-[#F77F00]" />
                </div>
                <div className="text-white text-sm">Services municipaux</div>
            </div>
            </div> */}

      </div>
    </section>
  )
}