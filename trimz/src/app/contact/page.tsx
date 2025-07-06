import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#3f1d1d] to-[#2a1010] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif italic mb-6">Contact Us</h1>
          <p className="text-xl text-[#a1a19f] max-w-2xl mx-auto">
            Get in touch to book your appointment or learn more about our services
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-serif italic mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <ContactItem 
                  icon="📍"
                  title="Address"
                  content="123 King Fahd Road, Al Olaya District, Riyadh, Saudi Arabia"
                  link="https://maps.google.com"
                />
                
                <ContactItem 
                  icon="📞"
                  title="Phone"
                  content="+966 50 123 4567"
                  link="tel:+966501234567"
                />
                
                <ContactItem 
                  icon="✉️"
                  title="Email"
                  content="info@trimz.com"
                  link="mailto:info@trimz.com"
                />
                
                <ContactItem 
                  icon="📱"
                  title="WhatsApp"
                  content="+966 50 123 4567"
                  link="https://wa.me/966501234567"
                />
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-4xl font-serif italic mb-8">Opening Hours</h2>
              
              <div className="space-y-4">
                <HoursItem day="Saturday - Thursday" hours="10:00 AM - 10:00 PM" />
                <HoursItem day="Friday" hours="2:00 PM - 10:00 PM" />
                <HoursItem day="Public Holidays" hours="10:00 AM - 8:00 PM" />
              </div>
              
              <div className="mt-8 p-6 bg-[#f8f8f7] rounded-lg">
                <h3 className="text-xl font-semibold text-[#3f1d1d] mb-4">Booking Information</h3>
                <ul className="space-y-2 text-[#a1a19f]">
                  <li>• Walk-ins welcome (subject to availability)</li>
                  <li>• Online booking available 24/7</li>
                  <li>• Phone reservations during business hours</li>
                  <li>• 24-hour cancellation policy</li>
                  <li>• Group bookings available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#f8f8f7]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif italic mb-4">Find Us</h2>
            <p className="text-lg text-[#a1a19f] max-w-2xl mx-auto">
              Located in the heart of Riyadh, easily accessible from all major areas
            </p>
          </div>
          
          <div className="bg-[#d1cfcb] rounded-lg shadow-lg aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-[#a1a19f] text-lg">Interactive Map</p>
              <p className="text-[#3f1d1d] text-sm mt-2">123 King Fahd Road, Riyadh</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[#3f1d1d] text-white font-semibold rounded-full hover:bg-[#2a1010] transition duration-300">
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif italic mb-4">Book Your Appointment</h2>
            <p className="text-lg text-[#a1a19f] max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you to confirm your appointment
            </p>
          </div>
          
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#3f1d1d] mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-[#d1cfcb] rounded-lg focus:ring-2 focus:ring-[#3f1d1d] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[#3f1d1d] mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-[#d1cfcb] rounded-lg focus:ring-2 focus:ring-[#3f1d1d] focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#3f1d1d] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-[#d1cfcb] rounded-lg focus:ring-2 focus:ring-[#3f1d1d] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#3f1d1d] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-[#d1cfcb] rounded-lg focus:ring-2 focus:ring-[#3f1d1d] focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#3f1d1d] mb-2">
                  Preferred Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-[#d1cfcb] rounded-lg focus:ring-2 focus:ring-[#3f1d1d] focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="classic-haircut">Classic Haircut</option>
                  <option value="beard-trim">Beard Trim & Shape</option>
                  <option value="hot-towel-shave">Hot Towel Shave</option>
                  <option value="haircut-beard-combo">Haircut & Beard Combo</option>
                  <option value="kids-haircut">Kids Haircut</option>
                  <option value="hair-wash-style">Hair Wash & Style</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-[#3f1d1d] mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full px-4 py-3 border border-[#d1cfcb] rounded-lg focus:ring-2 focus:ring-[#3f1d1d] focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#3f1d1d] mb-2">
                Additional Notes
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-[#d1cfcb] rounded-lg focus:ring-2 focus:ring-[#3f1d1d] focus:border-transparent"
                placeholder="Any special requests or preferences..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-[#3f1d1d] text-white font-semibold text-lg rounded-full hover:bg-[#2a1010] transition duration-300"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3f1d1d] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-serif italic mb-6">Can't Wait to See You</h2>
          <p className="text-xl text-[#a1a19f] mb-8 max-w-2xl mx-auto">
            Walk-ins are always welcome, or call us directly for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+966501234567" className="px-8 py-4 bg-white text-[#3f1d1d] font-semibold text-lg rounded-full hover:bg-[#d1cfcb] transition duration-300">
              Call Now
            </a>
            <a href="https://wa.me/966501234567" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-[#3f1d1d] transition duration-300">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon, title, content, link }: { icon: string, title: string, content: string, link: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-[#3f1d1d] mb-1">{title}</h3>
        <a href={link} className="text-[#a1a19f] hover:text-[#3f1d1d] transition duration-300">
          {content}
        </a>
      </div>
    </div>
  );
}

function HoursItem({ day, hours }: { day: string, hours: string }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-[#d1cfcb]">
      <span className="font-medium text-[#3f1d1d]">{day}</span>
      <span className="text-[#a1a19f]">{hours}</span>
    </div>
  );
} 