import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, ChevronLeft, ChevronRight, Droplets, Shield, Wind, Sparkles, Wrench, Gift, PhoneCall, X, Image as ImageIcon } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

const TigerProtectionWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedService, setExpandedService] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  
  // Carousel images
  const carouselImages = [
    { url: '/gallery/carousel/1.jpg', alt: 'Water Damage Restoration - Emergency Response', caption: 'Water Damage Restoration' },
    { url: '/gallery/carousel/2.jpg', alt: 'Mold Remediation Services', caption: 'Professional Mold Remediation' },
    { url: '/gallery/carousel/3.jpg', alt: 'Shrink Wrap Protection', caption: 'Shrink Wrap Installation' },
    { url: '/gallery/carousel/4.jpg', alt: 'Pressure Washing Services', caption: 'High-Pressure Cleaning' }
  ];

  const services = [
    {
      title: 'Water Damage Restoration',
      description: 'Rapid response emergency services for water damage incidents. Our specialized team provides comprehensive dry-out solutions, emergency tarping, and storm damage mitigation to prevent structural deterioration, mold growth, and escalating repair costs.',
      icon: <Droplets className="w-8 h-8" />,
      features: ['Emergency Dry-Out', 'Tarp Installation', 'Storm Damage Response', '24/7 Availability'],
      gallery: [
        '/gallery/water-damage/1.jpg',
        '/gallery/water-damage/2.jpg',
        '/gallery/water-damage/3.jpg',
        '/gallery/water-damage/4.jpg',
        '/gallery/water-damage/5.jpg',
        '/gallery/water-damage/6.jpg'
      ]
    },
    {
      title: 'Mold Remediation',
      description: 'Specialized mold elimination and prevention services utilizing professional-grade antimicrobial treatments. Our certified technicians follow strict safety protocols to identify, remove, and thoroughly disinfect contaminated surfaces, restoring your space to safe and healthy conditions.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Mold Identification', 'Safe Removal', 'Deep Sanitization', 'Preventive Treatment'],
      gallery: [
        '/gallery/mold-remediation/1.jpg',
        '/gallery/mold-remediation/2.jpg',
        '/gallery/mold-remediation/3.jpg',
        '/gallery/mold-remediation/4.jpg',
        '/gallery/mold-remediation/5.jpg',
        '/gallery/mold-remediation/6.jpg'
      ]
    },
    {
      title: 'Shrink Wrap Protection',
      description: 'Industrial-strength temporary enclosure systems providing hermetic protection against water infiltration, environmental contamination, and further damage. High-resistance materials professionally installed on roofs, walls, and exposed structures during restoration processes.',
      icon: <Wind className="w-8 h-8" />,
      features: ['Weather Protection', 'Temporary Barriers', 'Structural Sealing', 'Durable Materials'],
      gallery: [
        '/gallery/shrink-wrap/1.jpg',
        '/gallery/shrink-wrap/2.jpg',
        '/gallery/shrink-wrap/3.jpg',
      ]
    },
    {
      title: 'Pressure Washing',
      description: 'High-pressure deep cleaning services utilizing advanced equipment to eliminate accumulated dirt, mold, fungi, grease, and persistent stains. Ideal for enhancing appearance, hygiene, and longevity of both residential and commercial surfaces.',
      icon: <Sparkles className="w-8 h-8" />,
      features: ['Deep Surface Cleaning', 'Mold & Mildew Removal', 'Facade Restoration', 'Commercial & Residential'],
      gallery: [
        
      ]
    },
    {
      title: 'Handyman Services',
      description: 'Comprehensive maintenance and repair solutions for residential and small commercial properties. Expert execution of plumbing repairs, light electrical work, painting, drywall, installations, and general maintenance to keep your property in optimal condition.',
      icon: <Wrench className="w-8 h-8" />,
      features: ['Basic Plumbing', 'Light Electrical', 'Painting & Drywall', 'General Repairs'],
      gallery: [
        
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const toggleGallery = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const openLightbox = (imageUrl) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white" style={{fontFamily: "'Inter', 'Segoe UI', sans-serif"}}>
      {/* Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <img 
                src="/logo.png" 
                alt="Tiger Protection Services Logo" 
                className="h-12 w-12 object-contain"
              />
              <div className="text-2xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>
                <span className="text-blue-400">TIGER</span>
                <span className="text-green-400"> PROTECTION</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8" style={{fontFamily: "'Inter', sans-serif", fontWeight: '500'}}>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#services" className="hover:text-green-400 transition">Services</a>
              <a href="#gallery" className="hover:text-blue-400 transition">Gallery</a>
              <a href="#contact" className="hover:text-green-400 transition">Contact</a>
            </div>
            <a href="tel:+17868212717" className="bg-gradient-to-r from-blue-500 to-green-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition flex items-center gap-2">
              <PhoneCall className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-green-900/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Tiger Protection Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional Property Protection & Restoration Services in Tampa, FL
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Free Inspection Button */}
              <a 
                href="#contact" 
                className="group relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-10 py-5 rounded-xl text-xl font-semibold transition transform hover:scale-105 shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 flex items-center gap-3"
              >
                <Gift className="w-7 h-7 animate-pulse" />
                <div className="text-left">
                  <div className="text-sm font-normal text-green-100">100% FREE</div>
                  <div>Inspection & Quote</div>
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                  FREE!
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="about" className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-8 rounded-2xl border border-blue-700/50 shadow-2xl">
              <h3 className="text-3xl font-bold mb-4 text-blue-400" style={{fontFamily: "'Playfair Display', serif"}}>Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To establish Tiger Protection Services as the leading trusted authority in professional cleaning, disinfection, and moisture extraction services. We are committed to providing Tampa residents with cleaner, safer, and healthier living environments through innovation and excellence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-8 rounded-2xl border border-green-700/50 shadow-2xl">
              <h3 className="text-3xl font-bold mb-4 text-green-400" style={{fontFamily: "'Playfair Display', serif"}}>Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver superior quality services with exceptional speed and efficiency, adhering to the highest industry standards. Utilizing specialized technology and certified personnel, we minimize losses, safeguard public health, and restore affected spaces with reliability and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section id="gallery" className="py-16 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Our Professional Services
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Delivering excellence in property protection and restoration
          </p>
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-contain bg-gray-800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold text-white mb-2" style={{fontFamily: "'Playfair Display', serif"}}>
                    {image.caption}
                  </h3>
                </div>
              </div>
            ))}
            
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Gallery */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Specialized Services
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Comprehensive property protection and restoration solutions with certified expertise
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col">
                <div
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 group flex-grow"
                >
                  <div className="text-blue-400 mb-4 group-hover:text-green-400 transition">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white" style={{fontFamily: "'Playfair Display', serif"}}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="border-t border-gray-700 pt-4 mt-4 mb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Gallery Toggle Button */}
                  <button
                    onClick={() => toggleGallery(index)}
                    className="w-full mt-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 hover:from-blue-500/30 hover:to-green-500/30 border border-blue-500/50 px-4 py-3 rounded-lg text-sm font-semibold transition flex items-center justify-center gap-2"
                  >
                    <ImageIcon className="w-4 h-4" />
                    {expandedService === index ? 'Ocultar Galería' : 'Ver Trabajos Realizados'}
                  </button>
                </div>

                {/* Expandable Gallery */}
                {expandedService === index && (
                  <div className="mt-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 animate-in slide-in-from-top duration-300">
                    <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                      <ImageIcon className="w-5 h-5 text-blue-400" />
                      Galería de Trabajos
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {service.gallery.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                          onClick={() => openLightbox(image)}
                        >
                          <img
                            src={image}
                            alt={`${service.title} - Trabajo ${imgIndex + 1}`}
                            className="w-full h-full object-cover transition transform group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                            <ImageIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => toggleGallery(index)}
                      className="w-full mt-4 text-gray-400 hover:text-white text-sm transition"
                    >
                      Cerrar Galería
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Available 24/7 for emergency services
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Emergency Line</h3>
                  <a href="tel:+17868212717" className="text-gray-400 hover:text-blue-400 transition text-lg">
                    +1 (786) 821-2717
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a href="mailto:tigerprotectionservices21@gmail.com" className="text-gray-400 hover:text-green-400 transition break-all text-sm">
                    tigerprotectionservices21@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Service Area</h3>
                  <p className="text-gray-400">
                    Tampa, FL<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                FREE INSPECTION
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4" style={{fontFamily: "'Playfair Display', serif"}}>
                Get Your Free Quote Today!
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our certified team is available 24/7 to respond to your emergency. Contact us now for rapid response, professional service, and guaranteed results.
              </p>
              <a
                href="tel:+17868212717"
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-center py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition transform hover:scale-105 mb-4 flex items-center justify-center gap-2"
              >
                <Gift className="w-5 h-5" />
                Get Free Inspection Now
              </a>
              <p className="text-sm text-center text-gray-500">
                Free consultation • Licensed & Insured • Fast response
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>
                <span className="text-blue-400">TIGER</span>
                <span className="text-green-400"> PROTECTION</span>
                <span className="text-gray-400"> SERVICES</span>
              </div>
              <p className="text-gray-500 text-sm">Professional Property Protection in Tampa, FL</p>
            </div>
            
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/p/Tiger-Protection-Services-LLC-61558436032854/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/tiger_protection_llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Tiger Protection Services LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
};

export default TigerProtectionWebsite;