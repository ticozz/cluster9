import React from 'react';
import Image from 'next/image';
import { ScissorsIcon, BeardIcon, RazorIcon, CombIcon } from '../components/BarberIcons';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#3f1d1d] to-[#2a1010] text-white overflow-hidden">
        {/* Animated background overlays */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-slide-right" style={{animationDuration: '15s'}}></div>
        {/* Floating barbershop icons */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-20 w-32 h-32 text-white/25 animate-float-slow">
            <ScissorsIcon className="w-full h-full" />
          </div>
          <div className="absolute bottom-10 right-24 w-24 h-24 text-white/25 animate-float-slow" style={{animationDelay: '1s'}}>
            <CombIcon className="w-full h-full" />
          </div>
          <div className="absolute top-1/2 left-10 w-20 h-20 text-white/25 animate-float-slow" style={{animationDelay: '2s'}}>
            <RazorIcon className="w-full h-full" />
          </div>
          <div className="absolute top-1/3 right-10 w-28 h-28 text-white/25 animate-float-slow" style={{animationDelay: '0.5s'}}>
            <BeardIcon className="w-full h-full" />
          </div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-lobster mb-6 tracking-tight animate-fade-in-down">About Trimz</h1>
          <p className="text-2xl md:text-3xl text-[#a1a19f] font-light mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            More than just a barbershop
          </p>
          <p className="text-lg md:text-xl text-[#d1cfcb] max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            We&apos;re a destination for style, tradition, and excellence in Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f8f7] via-[#ecebe9] to-[#d1cfcb] opacity-90 pointer-events-none"></div>
        <div style={{
          backgroundImage: 'url(/barbershop-pattern.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '60px 60px',
          opacity: 0.1,
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }} />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-lobster mb-8 tracking-tight">Our Story</h2>
              <p className="text-xl text-[#a1a19f] mb-6 leading-relaxed">
                Trimz was born from a simple belief: every man deserves to look and feel his best. Founded in Saudi Arabia, we&apos;ve created a space where traditional barbering meets modern style.
              </p>
              <p className="text-xl text-[#a1a19f] mb-6 leading-relaxed">
                Our journey began with a passion for the craft and a commitment to excellence. We&apos;ve built a team of skilled barbers who understand that a great haircut is more than just cutting hair – it&apos;s about creating confidence and style.
              </p>
              <p className="text-xl text-[#a1a19f] leading-relaxed">
                Today, Trimz stands as a premier destination for men&apos;s grooming, combining time-honored techniques with contemporary trends to deliver exceptional results.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#ecebe9] to-[#d1cfcb] rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/barbershop-interior.jpg"
                  alt="Trimz Barbershop Interior"
                  fill
                  style={{objectFit: 'cover'}}
                  className="rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-lobster mb-6 tracking-tight">Our Values</h2>
            <p className="text-xl text-[#a1a19f] max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              title="Excellence"
              description="We never compromise on quality. Every cut, every shave, every service is delivered with precision and care."
              icon={<ExcellenceIcon className="w-16 h-16 text-[#3f1d1d] mx-auto" />} 
            />
            <ValueCard 
              title="Tradition"
              description="We honor the timeless art of barbering while embracing modern techniques and styles."
              icon={<TraditionIcon className="w-16 h-16 text-[#3f1d1d] mx-auto" />} 
            />
            <ValueCard 
              title="Community"
              description="We&apos;re more than a barbershop – we&apos;re a gathering place where men can connect and feel at home."
              icon={<CommunityIcon className="w-16 h-16 text-[#3f1d1d] mx-auto" />} 
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f8f7] via-[#ecebe9] to-[#d1cfcb] opacity-90 pointer-events-none"></div>
        <div style={{
          backgroundImage: 'url(/barbershop-pattern.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '60px 60px',
          opacity: 0.1,
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }} />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-lobster mb-6 tracking-tight">Meet Our Team</h2>
            <p className="text-xl text-[#a1a19f] max-w-3xl mx-auto leading-relaxed">
              Skilled professionals dedicated to making you look your best
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember 
              name="Ahmed Al-Rashid"
              role="Master Barber"
              experience="15+ years"
              specialty="Classic cuts & beard styling"
            />
            <TeamMember 
              name="Omar Hassan"
              role="Senior Barber"
              experience="10+ years"
              specialty="Modern fades & trends"
            />
            <TeamMember 
              name="Khalid Ibrahim"
              role="Barber"
              experience="8+ years"
              specialty="Hot towel shaves"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3f1d1d] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl md:text-6xl font-lobster mb-6 tracking-tight">Experience the Difference</h2>
          <p className="text-xl text-[#a1a19f] mb-8 max-w-2xl mx-auto">
            Come visit us and see why Trimz is the preferred choice for men&apos;s grooming in Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="px-8 py-4 bg-white text-[#3f1d1d] font-semibold text-lg rounded-full hover:bg-[#d1cfcb] transition duration-300">
              View Services
            </a>
            <a href="/contact" className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-[#3f1d1d] transition duration-300">
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ExcellenceIcon({ className = '' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
    </svg>
  );
}

function TraditionIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Crown */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 16L7 12L9 14L12 10L15 14L17 12L19 16L21 18V20H3V18L5 16Z" />
      {/* Crown jewels */}
      <circle cx="7" cy="14" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="17" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

function CommunityIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Multiple people */}
      <circle cx="8" cy="8" r="3" strokeWidth={2} />
      <path d="M2 20c0-3 3-4 6-4s6 1 6 4" strokeWidth={2} />
      <circle cx="16" cy="8" r="3" strokeWidth={2} />
      <path d="M22 20c0-3-3-4-6-4s-6 1-6 4" strokeWidth={2} />
      {/* Connection line */}
      <path d="M11 12L13 12" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

function UserIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" strokeWidth={2} />
      <path d="M4 20c0-4 8-4 8-4s8 0 8 4" strokeWidth={2} />
        </svg>
  );
}

function ValueCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 p-10 text-center relative overflow-hidden">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3f1d1d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon with enhanced styling */}
      <div className="relative z-10 mb-8">
        <div className="bg-gradient-to-br from-[#ecebe9] to-[#d1cfcb] rounded-full p-6 flex items-center justify-center text-[#3f1d1d] group-hover:bg-gradient-to-br group-hover:from-[#3f1d1d] group-hover:to-[#2a1010] group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-lg mx-auto w-24 h-24">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-3xl font-lobster mb-6 text-[#3f1d1d] group-hover:text-[#3f1d1d] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#a1a19f] text-lg leading-relaxed group-hover:text-[#3f1d1d] transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3f1d1d]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

function TeamMember({ name, role, experience, specialty }: { name: string, role: string, experience: string, specialty: string }) {
  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 text-center relative overflow-hidden">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3f1d1d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Profile image placeholder */}
      <div className="relative z-10 mb-6">
        <div className="w-32 h-32 bg-gradient-to-br from-[#ecebe9] to-[#d1cfcb] rounded-full mx-auto flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#3f1d1d] group-hover:to-[#2a1010] group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-xl">
          <UserIcon className="w-16 h-16 text-[#3f1d1d] group-hover:text-white transition-colors duration-500" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-lobster mb-3 text-[#3f1d1d] group-hover:text-[#3f1d1d] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-xl font-semibold text-[#a1a19f] mb-2 group-hover:text-[#3f1d1d] transition-colors duration-300">
          {role}
        </p>
        <div className="bg-gradient-to-r from-[#3f1d1d] to-[#2a1010] text-white px-4 py-1 rounded-full text-sm font-medium mb-3 inline-block">
          {experience} experience
        </div>
        <p className="text-lg text-[#3f1d1d] font-medium group-hover:text-[#3f1d1d] transition-colors duration-300">
          {specialty}
        </p>
      </div>
      
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3f1d1d]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
} 