'use client';

import Link from 'next/link';
import { useState } from 'react';
import "./globals.css";

function Logo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Scissors */}
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <line x1="110" y1="40" x2="80" y2="80" />
        <line x1="110" y1="40" x2="140" y2="80" />
        <circle cx="80" cy="80" r="7" />
        <circle cx="140" cy="80" r="7" />
      </g>
      {/* TRIMZ text */}
      <text x="50%" y="120" textAnchor="middle" fontFamily="Playfair Display, serif" fontWeight="bold" fontSize="48" fill="currentColor">TRIMZ</text>
      {/* Arched Barber Shop */}
      <text x="50%" y="70" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="18" fill="currentColor" fontStyle="italic">BARBER SHOP</text>
      {/* Stay Trimmed */}
      <text x="50%" y="150" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="16" fill="currentColor">STAY TRIMMED</text>
    </svg>
  );
}

// Social Icons
function PhoneIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.34a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0122 16.92z" /></svg>
  );
}
function InstagramIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={2} /><circle cx="12" cy="12" r="5" strokeWidth={2} /><circle cx="17" cy="7" r="1.5" fill="currentColor" /></svg>
  );
}
function TwitterIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 4.01c-.77.35-1.6.59-2.47.7A4.15 4.15 0 0021.4 2.3a8.27 8.27 0 01-2.6 1A4.13 4.13 0 0012 7.03c0 .32.04.64.1.94C8.28 7.8 5.1 6.13 2.98 3.7c-.35.6-.55 1.3-.55 2.05 0 1.42.72 2.68 1.82 3.42-.67-.02-1.3-.2-1.85-.5v.05c0 1.98 1.41 3.63 3.28 4-.34.09-.7.14-1.07.14-.26 0-.5-.02-.74-.07.5 1.56 1.97 2.7 3.7 2.73A8.3 8.3 0 012 19.54c-.63 0-1.25-.04-1.86-.11A11.7 11.7 0 006.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0022 4.01z" /></svg>
  );
}
// Contact Icons
function LocationIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.418 0-8-5.373-8-10a8 8 0 1116 0c0 4.627-3.582 10-8 10z" /><circle cx="12" cy="11" r="3" /></svg>
  );
}
function MailIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={2} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 6 9-6" /></svg>
  );
}
function ClockIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /></svg>
  );
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes:wght@400&family=Alex+Brush&family=Allura&family=Berkshire+Swash&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-[#3f1d1d] font-sans min-h-screen flex flex-col">
        <header className="bg-[#d1cfcb] border-b border-[#d1cfcb] py-6 px-8 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center text-[#3f1d1d] hover:text-[#2a1010] transition duration-300">
              <Logo className="w-24 h-24 -my-6 min-w-[6rem] min-h-[6rem]" />
            </Link>
            <nav className="hidden md:flex space-x-8 text-xl font-medium" style={{fontFamily: "'Lobster', cursive"}}>
              <Link href="/" className="text-[#3f1d1d] hover:text-[#2a1010] transition duration-300 hover:scale-110 transform">Home</Link>
              <Link href="/about" className="text-[#3f1d1d] hover:text-[#2a1010] transition duration-300 hover:scale-110 transform">About</Link>
              <Link href="/services" className="text-[#3f1d1d] hover:text-[#2a1010] transition duration-300 hover:scale-110 transform">Services</Link>
              <Link href="/gallery" className="text-[#3f1d1d] hover:text-[#2a1010] transition duration-300 hover:scale-110 transform">Gallery</Link>
              <Link href="/contact" className="text-[#3f1d1d] hover:text-[#2a1010] transition duration-300 hover:scale-110 transform">Contact</Link>
            </nav>
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-[#3f1d1d] text-2xl p-2 hover:bg-[#3f1d1d] hover:text-white rounded-lg transition duration-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#d1cfcb] border-b border-[#3f1d1d] shadow-lg">
              <nav className="px-8 py-6 space-y-4" style={{fontFamily: "'Lobster', cursive"}}>
                <Link 
                  href="/" 
                  onClick={closeMobileMenu}
                  className="block text-[#3f1d1d] text-xl font-medium hover:text-[#2a1010] transition duration-300 py-2 border-b border-[#3f1d1d]/20"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  onClick={closeMobileMenu}
                  className="block text-[#3f1d1d] text-xl font-medium hover:text-[#2a1010] transition duration-300 py-2 border-b border-[#3f1d1d]/20"
                >
                  About
                </Link>
                <Link 
                  href="/services" 
                  onClick={closeMobileMenu}
                  className="block text-[#3f1d1d] text-xl font-medium hover:text-[#2a1010] transition duration-300 py-2 border-b border-[#3f1d1d]/20"
                >
                  Services
                </Link>
                <Link 
                  href="/gallery" 
                  onClick={closeMobileMenu}
                  className="block text-[#3f1d1d] text-xl font-medium hover:text-[#2a1010] transition duration-300 py-2 border-b border-[#3f1d1d]/20"
                >
                  Gallery
                </Link>
                <Link 
                  href="/contact" 
                  onClick={closeMobileMenu}
                  className="block text-[#3f1d1d] text-xl font-medium hover:text-[#2a1010] transition duration-300 py-2"
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="bg-[#3f1d1d] text-white py-12 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-serif italic mb-4">Trimz</h3>
                <p className="text-[#a1a19f] mb-4">Premium barbershop in Saudi Arabia, where style meets tradition.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#a1a19f] hover:text-white transition duration-300"><PhoneIcon className="w-6 h-6" /></a>
                  <a href="#" className="text-[#a1a19f] hover:text-white transition duration-300"><InstagramIcon className="w-6 h-6" /></a>
                  <a href="#" className="text-[#a1a19f] hover:text-white transition duration-300"><TwitterIcon className="w-6 h-6" /></a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-[#a1a19f]">
                  <li><a href="/services" className="hover:text-white transition duration-300">Haircuts</a></li>
                  <li><a href="/services" className="hover:text-white transition duration-300">Beard Trims</a></li>
                  <li><a href="/services" className="hover:text-white transition duration-300">Hot Towel Shaves</a></li>
                  <li><a href="/services" className="hover:text-white transition duration-300">Styling</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-[#a1a19f]">
                  <li><a href="/about" className="hover:text-white transition duration-300">About Us</a></li>
                  <li><a href="/gallery" className="hover:text-white transition duration-300">Gallery</a></li>
                  <li><a href="/contact" className="hover:text-white transition duration-300">Contact</a></li>
                  <li><a href="/contact" className="hover:text-white transition duration-300">Book Now</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-[#a1a19f]">
                  <li className="flex items-center gap-2"><LocationIcon className="w-5 h-5 inline" /> 123 King Fahd Road, Riyadh</li>
                  <li className="flex items-center gap-2"><PhoneIcon className="w-5 h-5 inline" /> +966 50 123 4567</li>
                  <li className="flex items-center gap-2"><MailIcon className="w-5 h-5 inline" /> info@trimz.com</li>
                  <li className="flex items-center gap-2"><ClockIcon className="w-5 h-5 inline" /> Sat-Thu: 10AM-10PM</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#a1a19f] pt-8 text-center text-[#a1a19f]">
              <p>&copy; {new Date().getFullYear()} Trimz Barbershop. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
