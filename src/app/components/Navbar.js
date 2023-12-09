import React, { useState } from 'react'

const menuNavigasi = [
  { menu: 'Product', link: '/' },
  { menu: 'Services', link: '/' },
  { menu: 'About', link: '/about' },
  { menu: 'Blog', link: '/blog' },
]

export default function Navbar({ background }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className={`bg-${background} px-5 lg:px-0 text-black`}>
      <nav className="max-w-7xl mx-auto bg-transparent border-gray-200">
        <div className="flex flex-wrap items-center justify-between mx-auto py-6">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo-navbar.png" className="h-8" alt="Flowbite Logo" />
            <span
              className={`self-center text-4xl font-bold whitespace-nowrap ${
                background === 'white' ? 'text-[#0A2640]' : 'text-white'
              }`}
            >
              Boldo
            </span>
          </a>
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`hidden w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul
              className={`font-semibold text-base flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700 ${
                background === 'white' ? 'text-black' : 'text-white'
              }`}
            >
              {menuNavigasi.map(({ link, menu }) => (
                <li>
                  <a
                    href={link}
                    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    {menu}
                  </a>
                </li>
              ))}
              <li>
                <button
                  href="#"
                  className={`text-[#0A2640] font-bold rounded-full text-base px-10 py-2 text-center sm:hidden md:block hidden hover:text-white hover:bg-[#2d4b66] ${
                    background === 'white'
                      ? 'bg-transparent border-2 border-black'
                      : 'bg-white'
                  }`}
                >
                  Log In
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div
            className={`w-full md:hidden ${
              isMobileMenuOpen ? 'block' : 'hidden'
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50">
              {menuNavigasi.map(({ link, menu }) => (
                <li>
                  <a
                    href={link}
                    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
