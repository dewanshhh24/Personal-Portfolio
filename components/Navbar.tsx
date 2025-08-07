'use client'

import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Floating center navbar for desktop */}
      <nav
        className={`
          z-50 left-1/2 -translate-x-1/2
          w-fit px-8 py-3 rounded-full border shadow-lg
          fixed ${scrolled ? 'top-2 scale-95 bg-[#00202f]/90 border-[#3a86ff] backdrop-blur-md' : 'top-6 bg-[#00202f] border-[#3a86ff]'}
          transition-all duration-500 ease-in-out
          hidden md:flex items-center space-x-6
        `}
      >
        {/* Show name only when not scrolled */}
        {!scrolled && (
          <span className="text-[#ffe6c7] font-semibold mr-6">Dewansh Warjurkar</span>
        )}

        <ul className="flex space-x-8 text-[#ffe6c7]">
          {links.map(({ href, label }) => (
            <li key={href} className="relative group cursor-pointer">
              <a href={href} className="transition-colors duration-300">
                {label}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ffe6c7] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile top bar */}
      <div
        className={`
          z-50 left-4 right-4 px-6 py-3 rounded-xl border shadow-lg
          fixed ${scrolled ? 'top-2 scale-95 bg-[#00202f]/90 border-[#3a86ff] backdrop-blur-md' : 'top-6 bg-[#00202f] border-[#3a86ff]'}
          transition-all duration-500 ease-in-out
          flex justify-between items-center md:hidden
        `}
      >
        <span className="text-[#ffe6c7] text-xl font-bold">Dewansh Warjurkar</span>
        <button onClick={() => setMenuOpen(true)} className="text-[#ffe6c7] text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Sliding right drawer */}
      <div
        className={`fixed top-0 right-0 h-auto w-64 bg-[#00202f]/80 backdrop-blur-lg text-[#ffe6c7] shadow-lg transform transition-transform duration-300 z-50 rounded-bl-xl
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#3a86ff]">
          <h2 className="text-xl font-bold">DW24</h2>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col space-y-6 mt-8 px-6 pb-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-[#3a86ff] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}
    </>
  )
}
