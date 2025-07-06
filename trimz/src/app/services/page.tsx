import React from 'react';
import { ScissorsIcon, BeardIcon, RazorIcon, ShowerIcon, CombIcon, UserIcon, ColorIcon, ScalpIcon, FacialIcon, BeardDyeIcon } from '../components/BarberIcons';

export default function Services() {
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
          <h1 className="text-6xl md:text-7xl font-lobster mb-6 tracking-tight animate-fade-in-down">Our Services</h1>
          <p className="text-2xl md:text-3xl text-[#a1a19f] font-light mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Professional grooming tailored to your style
          </p>
          <p className="text-lg md:text-xl text-[#d1cfcb] max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Discover our full range of premium barbershop services, delivered by expert barbers in a modern, welcoming space.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 relative overflow-hidden">
        {/* Patterned/animated background */}
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
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="space-y-8">
            <ServiceItem 
              title="Classic Haircut"
              price="SAR 80"
              duration="45-60 min"
              description="Professional haircut with consultation, washing, cutting, and styling. Includes a complimentary beverage."
              features={[
                "Professional consultation",
                "Hair washing & conditioning",
                "Precision cutting",
                "Styling & finishing",
                "Complimentary beverage"
              ]}
              popular={true}
              icon={<ScissorsIcon className="w-12 h-12" />}
            />
            
            <ServiceItem 
              title="Beard Trim & Shape"
              price="SAR 50"
              duration="30-45 min"
              description="Expert beard trimming and shaping to maintain your desired look and style."
              features={[
                "Beard consultation",
                "Precision trimming",
                "Shape & line definition",
                "Hot towel treatment",
                "Beard oil application"
              ]}
              icon={<BeardIcon className="w-12 h-12" />}
            />
            
            <ServiceItem 
              title="Hot Towel Shave"
              price="SAR 70"
              duration="45-60 min"
              description="Traditional straight razor shave with hot towel treatment for the ultimate grooming experience."
              features={[
                "Hot towel preparation",
                "Straight razor shave",
                "Multiple passes",
                "Aftershave treatment",
                "Moisturizing finish"
              ]}
              icon={<RazorIcon className="w-12 h-12" />}
            />
            
            <ServiceItem 
              title="Haircut & Beard Combo"
              price="SAR 120"
              duration="75-90 min"
              description="Complete grooming package including haircut and beard trim for the ultimate transformation."
              features={[
                "Full haircut service",
                "Beard trim & shape",
                "Extended consultation",
                "Premium styling",
                "Complimentary beverage"
              ]}
              popular={true}
              icon={<ScissorsIcon className="w-12 h-12" />}
            />
            
            <ServiceItem 
              title="Kids Haircut (Under 12)"
              price="SAR 60"
              duration="30-45 min"
              description="Specialized haircuts for children in a comfortable and friendly environment."
              features={[
                "Child-friendly consultation",
                "Gentle cutting technique",
                "Fun styling options",
                "Parent consultation",
                "Small treat included"
              ]}
              icon={<UserIcon className="w-14 h-14" />}
            />
            
            <ServiceItem 
              title="Hair Wash & Style"
              price="SAR 40"
              duration="20-30 min"
              description="Professional hair washing and styling for special occasions or daily maintenance."
              features={[
                "Professional washing",
                "Conditioning treatment",
                "Blow drying",
                "Styling & finishing",
                "Product recommendations"
              ]}
              icon={<ShowerIcon className="w-14 h-14" />}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 relative overflow-hidden">
        {/* Clean background matching icon background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ecebe9] to-[#d1cfcb] opacity-90 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-lobster mb-6 tracking-tight">Additional Services</h2>
            <p className="text-xl text-[#a1a19f] max-w-3xl mx-auto leading-relaxed">
              Enhance your grooming experience with our premium add-ons and specialized treatments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AddonService 
              title="Hair Color"
              price="SAR 150"
              description="Professional hair coloring for a fresh, modern look with premium products"
              icon={<ColorIcon className="w-14 h-14" />}
            />
            <AddonService 
              title="Scalp Treatment"
              price="SAR 80"
              description="Therapeutic scalp treatment for healthy hair growth and relaxation"
              icon={<ScalpIcon className="w-14 h-14" />}
            />
            <AddonService 
              title="Facial Treatment"
              price="SAR 100"
              description="Rejuvenating facial treatment for healthy, glowing skin"
              icon={<FacialIcon className="w-14 h-14" />}
            />
            <AddonService 
              title="Hair Styling"
              price="SAR 60"
              description="Special occasion styling for events and celebrations"
              icon={<CombIcon className="w-14 h-14" />}
            />
            <AddonService 
              title="Beard Dye"
              price="SAR 40"
              description="Professional beard coloring for a polished, uniform appearance"
              icon={<BeardDyeIcon className="w-14 h-14" />}
            />
            <AddonService 
              title="Consultation"
              price="SAR 30"
              description="Personalized style consultation and recommendations"
              icon={<UserIcon className="w-14 h-14" />}
            />
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-lobster mb-6 tracking-tight">Booking Information</h2>
            <p className="text-xl text-[#a1a19f] max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about booking your appointment
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-lobster mb-6 text-[#3f1d1d]">Appointments</h3>
                <ul className="space-y-4 text-[#a1a19f] text-lg">
                  <li className="flex items-center md:justify-start justify-center">
                    <svg className="w-6 h-6 text-[#3f1d1d] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Walk-ins welcome (subject to availability)
                  </li>
                  <li className="flex items-center md:justify-start justify-center">
                    <svg className="w-6 h-6 text-[#3f1d1d] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Online booking available
                  </li>
                  <li className="flex items-center md:justify-start justify-center">
                    <svg className="w-6 h-6 text-[#3f1d1d] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Phone reservations accepted
                  </li>
                  <li className="flex items-center md:justify-start justify-center">
                    <svg className="w-6 h-6 text-[#3f1d1d] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24-hour cancellation policy
                  </li>
                  <li className="flex items-center md:justify-start justify-center">
                    <svg className="w-6 h-6 text-[#3f1d1d] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Group bookings available
                  </li>
                </ul>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-lobster mb-6 text-[#3f1d1d]">Payment</h3>
                <ul className="space-y-4 text-[#a1a19f] text-lg">
                  <li className="flex items-center md:justify-start justify-center">
                    <svg className="w-6 h-6 text-[#3f1d1d] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cash and card accepted
                  </li>
                  <li className="flex items-center md:justify-start justify-center">
                    <svg className="w-6 h-6 text-[#3f1d1d] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mobile payment available
                  </li>
                  <li className="flex items-center md:justify-start justify-center">
                    <svg className="w-6 h-6 text-[#3f1d1d] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gift cards available
                  </li>
                  <li className="flex items-center md:justify-start justify-center">
                    <svg className="w-6 h-6 text-[#3f1d1d] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Loyalty program
                  </li>
                  <li className="flex items-center md:justify-start justify-center">
                    <svg className="w-6 h-6 text-[#3f1d1d] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Corporate accounts welcome
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3f1d1d] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl md:text-6xl font-lobster mb-6 tracking-tight">Ready to Book?</h2>
          <p className="text-xl text-[#a1a19f] mb-8 max-w-2xl mx-auto">
            Choose your service and book your appointment today. Walk out looking and feeling your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-white text-[#3f1d1d] font-semibold text-lg rounded-full hover:bg-[#d1cfcb] transition duration-300">
              Book Appointment
            </a>
            <a href="tel:+966501234567" className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-[#3f1d1d] transition duration-300">
              Call to Book
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceItem({ title, price, duration, description, features, popular = false, icon }: { 
  title: string, 
  price: string, 
  duration: string, 
  description: string, 
  features: string[], 
  popular?: boolean,
  icon?: React.ReactNode
}) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 p-10 flex flex-col gap-6 ${popular ? 'ring-2 ring-[#3f1d1d]' : ''}`}> 
      <div className="flex items-center gap-4 mb-2">
        {icon && <div className="bg-[#ecebe9] rounded-full p-4 flex items-center justify-center text-[#3f1d1d]">{icon}</div>}
        <h3 className="text-2xl font-lobster text-[#3f1d1d] flex-1">{title}</h3>
        {popular && <span className="bg-[#3f1d1d] text-white px-3 py-1 rounded-full text-xs font-medium ml-2">Most Popular</span>}
      </div>
      <div className="flex items-center gap-3">
        <span className="bg-[#d1cfcb] text-[#3f1d1d] px-4 py-1 rounded-full text-lg font-bold">{price}</span>
        <span className="bg-[#f8f8f7] text-[#a1a19f] px-3 py-1 rounded-full text-sm ml-1">{duration}</span>
      </div>
      <p className="text-[#a1a19f] text-base mt-2">{description}</p>
      <div className="pt-4">
        <h4 className="font-semibold text-[#3f1d1d] mb-2">What&apos;s Included:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-[#a1a19f]">
              <svg className="w-5 h-5 text-[#3f1d1d] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              {feature}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

function AddonService({ title, price, description, icon }: { title: string, price: string, description: string, icon?: React.ReactNode }) {
  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 flex flex-col gap-6 items-center text-center relative overflow-hidden">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3f1d1d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon with enhanced styling */}
      {icon && (
        <div className="relative z-10">
          <div className="bg-gradient-to-br from-[#ecebe9] to-[#d1cfcb] rounded-full p-5 flex items-center justify-center text-[#3f1d1d] group-hover:bg-gradient-to-br group-hover:from-[#3f1d1d] group-hover:to-[#2a1010] group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-lg">
            {icon}
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 flex-1">
        <h3 className="text-2xl font-lobster text-[#3f1d1d] group-hover:text-[#3f1d1d] transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex items-center justify-center gap-3">
          <span className="bg-gradient-to-r from-[#3f1d1d] to-[#2a1010] text-white px-6 py-2 rounded-full text-lg font-bold shadow-md group-hover:shadow-lg transition-all duration-300">
            {price}
          </span>
        </div>
        
        <p className="text-[#a1a19f] text-base leading-relaxed group-hover:text-[#3f1d1d] transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3f1d1d]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
} 