import Link from "next/link";
import Image from "next/image";
import {Button} from "@nextui-org/react";
;
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen bg-gray-50">
      <Image
        src="/assets/images/logo_2.png" 
        alt="Page non trouvée"
        width={100}
        height={100}
        className="mb-6"
      />
      <p className="mt-4 text-xl font-semibold text-center text-black">Oops ! Nous rencontrons un problème avec la page</p>
      <p className="mt-2 text-center text-gray-600">
      Nous vous suggérons de revenir en arrière et d&apos;essayer un autre lien
      </p>

      <Link href="/" passHref>
        <Button
          as="a"
          className="mt-6"
          color="primary"
          size="lg"
        >
          Retour à l&apos;accueil
        </Button>
      </Link>
    </div>
  );
}
