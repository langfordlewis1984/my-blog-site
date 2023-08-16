import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 p-4 md:p-6 flex justify-between items-center md:mx-auto max-w-screen-xl">
      <h1 className="text-5xl md:text-6xl font-serif text-white animate-bounce md:hover:text-green-500 transition-colors duration-300">
        blog<span className="text-red-500">ZILLA</span>
      </h1>
      <nav className="hidden md:flex space-x-4 items-center">
        <ul className="flex space-x-6">
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Posts
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </ul>
      </nav>
      <button className="md:hidden bg-red-500 border-2 border-red-700 p-2 rounded-lg">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </header>
  );
}
