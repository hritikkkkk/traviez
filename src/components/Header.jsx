import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img
          src="https://www.traviez.com/logo.svg"
          alt="Traviez Logo"
          width={150}
          height={50}
          className="h-10 w-auto"
        />
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-xl">
        <Link
          to="/"
          className="text-[#FF5733] border-b-2 border-[#FF5733] pb-1 font-medium"
        >
          Home
        </Link>
        <Link
          to="/local"
          className="text-gray-600 hover:text-[#FF5733] font-medium"
        >
          Local
        </Link>
        <Link
          to="/articles"
          className="text-gray-600 hover:text-[#FF5733] font-medium"
        >
          Articles
        </Link>
        <Link
          to="/about"
          className="text-gray-600 hover:text-[#FF5733] font-medium"
        >
          About
        </Link>
        <Link
          to="/download"
          className="bg-green-600 text-white px-4 py-2 rounded-md   font-bold  "
        >
          Download the app
        </Link>
      </nav>
    </header>
  );
}
