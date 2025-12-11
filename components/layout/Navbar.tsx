"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Beyond Border Logo"
            width={140}
            height={60}
            className="cursor-pointer"
          />
        </Link>

        {/* RIGHT SIDE: Menu Items + Search + Menu Icon */}
        <div className="hidden md:flex items-center gap-6">
          {/* Menu Items */}
          <ul className="flex items-center gap-6 text-gray-700 font-semibold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tours">Tours</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Search Icon */}
          <button>
            <Search size={22} className="text-gray-700 cursor-pointer" />
          </button>

          {/* Desktop Menu Icon */}
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu (Mobile + Desktop menu icon) */}
      {open && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/tours">Tours</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
