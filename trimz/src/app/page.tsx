import Image from 'next/image';
import { ScissorsIcon, BeardIcon, RazorIcon, CombIcon } from './components/BarberIcons';

function CalendarIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function BarbershopIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Barber pole stripes */}
      <rect x="8" y="4" width="8" height="16" stroke="currentColor" strokeWidth={2} fill="none" />
      <line x1="8" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth={2} />
      <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth={2} />
      <line x1="8" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth={2} />
      <line x1="8" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth={2} />
      {/* Barber pole top and bottom */}
      <circle cx="12" cy="2" r="2" stroke="currentColor" strokeWidth={2} fill="none" />
      <circle cx="12" cy="22" r="2" stroke="currentColor" strokeWidth={2} fill="none" />
    </svg>
  );
}

function HairDryerIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Hair dryer body */}
      <ellipse cx="12" cy="12" rx="8" ry="4" stroke="currentColor" strokeWidth={2} fill="none" />
      {/* Hair dryer handle */}
      <rect x="16" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth={2} fill="none" />
      {/* Air flow lines */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 10L2 8M4 12L2 14M4 14L2 16" />
    </svg>
  );
}

function MirrorIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Mirror frame */}
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth={2} fill="none" />
      {/* Mirror reflection */}
      <ellipse cx="12" cy="12" rx="6" ry="6" stroke="currentColor" strokeWidth={1} fill="none" />
      {/* Mirror stand */}
      <rect x="11" y="20" width="2" height="4" stroke="currentColor" strokeWidth={2} fill="none" />
    </svg>
  );
}

function TowelIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Towel */}
      <rect x="4" y="6" width="16" height="12" rx="1" stroke="currentColor" strokeWidth={2} fill="none" />
      {/* Towel texture */}
      <line x1="6" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth={1} />
      <line x1="6" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth={1} />
      <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth={1} />
      <line x1="6" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth={1} />
      <line x1="6" y1="16" x2="18" y2="16" stroke="currentColor" strokeWidth={1} />
    </svg>
  );
}

function ClipperIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Clipper body */}
      <rect x="6" y="8" width="12" height="8" rx="1" stroke="currentColor" strokeWidth={2} fill="none" />
      {/* Clipper blade */}
      <rect x="8" y="6" width="8" height="2" stroke="currentColor" strokeWidth={2} fill="none" />
      {/* Clipper handle */}
      <rect x="10" y="16" width="4" height="6" rx="1" stroke="currentColor" strokeWidth={2} fill="none" />
      {/* Clipper button */}
      <circle cx="12" cy="19" r="1" stroke="currentColor" strokeWidth={1} fill="none" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Barbershop interior image background */}
        <Image
          src="/barbershop-interior-wide.jpeg"
          alt="Trimz Barbershop Interior"
          fill
          style={{objectFit: 'cover'}}
          className="absolute inset-0 w-full h-full object-cover z-0"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-[#3f1d1d]/80 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-7xl md:text-9xl font-lobster mb-6 tracking-tight animate-fade-in-down">
            Trimz
          </h1>
          <p className="text-2xl md:text-3xl font-lobster mb-6 tracking-wider animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Premium Barbershop
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Where style meets tradition. Experience the finest cuts and grooming services in Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a href="/services" className="group px-10 py-5 bg-white text-[#3f1d1d] font-semibold text-lg rounded-full hover:bg-[#d1cfcb] transition duration-300 transform hover:scale-105">
              <span className="flex items-center justify-center space-x-2">
                <ScissorsIcon className="w-6 h-6" />
                <span>View Services</span>
              </span>
            </a>
            <a href="/contact" className="group px-10 py-5 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-[#3f1d1d] transition duration-300 transform hover:scale-105">
              <span className="flex items-center justify-center space-x-2">
                <CalendarIcon className="w-6 h-6" />
                <span>Book Appointment</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f8f7] via-[#ecebe9] to-[#d1cfcb] opacity-90 pointer-events-none"></div>
        <div style={{
          backgroundImage: 'url(/barbershop-pattern.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '80px 80px',
          opacity: 0.2,
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }} />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-lobster mb-4">Our Services</h2>
            <p className="text-lg text-[#a1a19f] max-w-2xl mx-auto">
              From classic cuts to modern styles, we offer a range of premium grooming services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Classic Haircut"
              price="SAR 80"
              description="Professional haircut with consultation and styling"
              icon={<ScissorsIcon className="w-12 h-12" />}
            />
            <ServiceCard 
              title="Beard Trim"
              price="SAR 50"
              description="Precise beard shaping and grooming"
              icon={<BeardIcon className="w-12 h-12" />}
            />
            <ServiceCard 
              title="Hot Towel Shave"
              price="SAR 70"
              description="Traditional hot towel straight razor shave"
              icon={<RazorIcon className="w-12 h-12" />}
            />
          </div>
          
          <div className="text-center mt-12">
            <a href="/services" className="inline-block px-8 py-3 bg-[#3f1d1d] text-white font-semibold rounded-full hover:bg-[#2a1010] transition duration-300">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#f8f8f7]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-lobster mb-6">About Trimz</h2>
              <p className="text-lg text-[#a1a19f] mb-6">
                Founded with a passion for excellence, Trimz brings the finest barbering traditions to modern Saudi Arabia. Our skilled barbers combine time-honored techniques with contemporary style to deliver exceptional results.
              </p>
              <p className="text-lg text-[#a1a19f] mb-8">
                We believe every client deserves more than just a haircut – they deserve an experience. From the moment you walk in, you'll feel the difference that quality, attention to detail, and genuine care make.
              </p>
              <a href="/about" className="inline-block px-8 py-3 border-2 border-[#3f1d1d] text-[#3f1d1d] font-semibold rounded-full hover:bg-[#3f1d1d] hover:text-white transition duration-300">
                Learn More
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[#d1cfcb] rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/barbershop-interior.jpg"
                  alt="Barbershop Interior"
                  fill
                  style={{objectFit: 'cover'}}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-lobster mb-4">Our Work</h2>
            <p className="text-lg text-[#a1a19f] max-w-2xl mx-auto">
              See the quality of our work and the transformations we create
            </p>
          </div>
          
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-[#d1cfcb] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative">
              <Image src="/gallery1.jpg" alt="Modern Fade Haircut" fill style={{objectFit: 'cover'}} className="rounded-lg" />
            </div>
            <div className="aspect-square bg-[#d1cfcb] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative">
              <Image src="/gallery2.jpg" alt="Beard Trim" fill style={{objectFit: 'cover'}} className="rounded-lg" />
            </div>
            <div className="aspect-square bg-[#d1cfcb] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative">
              <Image src="/gallery3.jpg" alt="Hot Towel Shave" fill style={{objectFit: 'cover'}} className="rounded-lg" />
            </div>
            <div className="aspect-square bg-[#d1cfcb] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative">
              <Image src="/gallery4.jpg" alt="Barber in Action" fill style={{objectFit: 'cover'}} className="rounded-lg" />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/gallery" className="inline-block px-8 py-3 bg-[#3f1d1d] text-white font-semibold rounded-full hover:bg-[#2a1010] transition duration-300">
              View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3f1d1d] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-lobster mb-6">Ready for a Fresh Look?</h2>
          <p className="text-xl text-[#a1a19f] mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the Trimz difference. Walk out looking and feeling your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-white text-[#3f1d1d] font-semibold text-lg rounded-full hover:bg-[#d1cfcb] transition duration-300">
              Book Now
            </a>
            <a href="tel:+966501234567" className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-[#3f1d1d] transition duration-300">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Logo({ className = '' }) {
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

function ServiceCard({ title, price, description, icon }: { title: string, price: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="p-8 bg-[#f8f8f7] rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="text-[#3f1d1d]">{icon}</div>
        <span className="text-lg font-bold text-[#3f1d1d] bg-[#ecebe9] px-4 py-1 rounded-full shadow-sm ml-4">{price}</span>
    </div>
      <h3 className="text-2xl font-lobster text-left mb-2">{title}</h3>
      <p className="text-[#a1a19f] text-left mb-2 flex-1">{description}</p>
    </div>
  );
}
