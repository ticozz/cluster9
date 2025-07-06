import React from 'react';

export default function Gallery() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#3f1d1d] to-[#2a1010] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif italic mb-6">Gallery</h1>
          <p className="text-xl text-[#a1a19f] max-w-2xl mx-auto">
            See our work, meet our team, and explore our barbershop
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic mb-4">Our Work</h2>
            <p className="text-lg text-[#a1a19f] max-w-2xl mx-auto">
              Browse through our portfolio of cuts, styles, and transformations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <GalleryItem 
                key={i}
                title={`Style ${i + 1}`}
                category="Haircuts"
                image={`/gallery/haircut-${i + 1}.jpg`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="py-20 bg-[#f8f8f7]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic mb-4">Our Space</h2>
            <p className="text-lg text-[#a1a19f] max-w-2xl mx-auto">
              Take a tour of our modern, comfortable barbershop
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="aspect-video bg-[#d1cfcb] rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏪</div>
                  <p className="text-[#a1a19f]">Main Entrance</p>
                </div>
              </div>
              <div className="aspect-video bg-[#d1cfcb] rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">💺</div>
                  <p className="text-[#a1a19f]">Barber Chairs</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-video bg-[#d1cfcb] rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🪞</div>
                  <p className="text-[#a1a19f]">Styling Area</p>
                </div>
              </div>
              <div className="aspect-video bg-[#d1cfcb] rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">☕</div>
                  <p className="text-[#a1a19f]">Waiting Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic mb-4">Meet Our Team</h2>
            <p className="text-lg text-[#a1a19f] max-w-2xl mx-auto">
              Professional barbers dedicated to your style and satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TeamGalleryItem 
              name="Ahmed Al-Rashid"
              role="Master Barber"
              image="/team/ahmed.jpg"
            />
            <TeamGalleryItem 
              name="Omar Hassan"
              role="Senior Barber"
              image="/team/omar.jpg"
            />
            <TeamGalleryItem 
              name="Khalid Ibrahim"
              role="Barber"
              image="/team/khalid.jpg"
            />
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 bg-[#f8f8f7]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic mb-4">Transformations</h2>
            <p className="text-lg text-[#a1a19f] max-w-2xl mx-auto">
              See the amazing before and after results of our work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <TransformationItem 
              title="Classic Fade"
              beforeImage="/transformations/fade-before.jpg"
              afterImage="/transformations/fade-after.jpg"
            />
            <TransformationItem 
              title="Beard Styling"
              beforeImage="/transformations/beard-before.jpg"
              afterImage="/transformations/beard-after.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3f1d1d] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-serif italic mb-6">Ready for Your Transformation?</h2>
          <p className="text-xl text-[#a1a19f] mb-8 max-w-2xl mx-auto">
            Book your appointment today and let us create the perfect look for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-white text-[#3f1d1d] font-semibold text-lg rounded-full hover:bg-[#d1cfcb] transition duration-300">
              Book Appointment
            </a>
            <a href="/services" className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-[#3f1d1d] transition duration-300">
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function GalleryItem({ title, category, image }: { title: string, category: string, image: string }) {
  return (
    <div className="group relative aspect-square bg-[#d1cfcb] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl mb-2">✂️</div>
          <p className="text-sm text-[#a1a19f]">{title}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition duration-300">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-[#a1a19f] text-sm">{category}</p>
      </div>
    </div>
  );
}

function TeamGalleryItem({ name, role, image }: { name: string, role: string, image: string }) {
  return (
    <div className="text-center group">
      <div className="relative aspect-square bg-[#d1cfcb] rounded-lg shadow-lg mb-6 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-2">👨‍💼</div>
            <p className="text-[#a1a19f]">Team Member</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="font-semibold">{name}</p>
            <p className="text-sm">{role}</p>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-[#3f1d1d] mb-2">{name}</h3>
      <p className="text-[#a1a19f]">{role}</p>
    </div>
  );
}

function TransformationItem({ title, beforeImage, afterImage }: { title: string, beforeImage: string, afterImage: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-semibold text-[#3f1d1d] mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="aspect-square bg-[#d1cfcb] rounded-lg mb-3 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl mb-2">😐</div>
              <p className="text-sm text-[#a1a19f]">Before</p>
            </div>
          </div>
          <p className="text-sm font-medium text-[#3f1d1d]">Before</p>
        </div>
        <div className="text-center">
          <div className="aspect-square bg-[#d1cfcb] rounded-lg mb-3 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl mb-2">😎</div>
              <p className="text-sm text-[#a1a19f]">After</p>
            </div>
          </div>
          <p className="text-sm font-medium text-[#3f1d1d]">After</p>
        </div>
      </div>
    </div>
  );
} 