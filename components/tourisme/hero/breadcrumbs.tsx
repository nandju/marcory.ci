import Link from "next/link";

export default function BreadcrumbNav() {
  return (
    <nav className="text-white font-extralight text-lg">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <span>{">"}</span>
        <li>
          <Link href="/tourisme" className="text-white hover:underline">
            Tourisme
          </Link>
        </li>
        <span>{">"}</span>
        <li>
          <Link href="#" className="text-white">
            Sites touristiques
          </Link>
        </li>
      </ul>
    </nav>
  );
}
