import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 p-4 md:p-6 flex justify-between items-center md:mx-auto max-w-screen-xl">
      <h1 className="text-4xl md:text-5xl font-serif text-white md:hover:text-green-500 transition-colors duration-300">
        blog<span className="text-red-500">ZILLA</span>
      </h1>
      <nav className="flex space-x-4 md:space-x-6 items-center text-sm md:text-base landscape:text-lg">
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/blog/categories"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
