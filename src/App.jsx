import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, ChevronLeft, ChevronRight, Droplets, Shield, Wind, Sparkles, Wrench, Gift, PhoneCall, X, Image as ImageIcon, Menu, CheckCircle, Clock, Award, Users } from 'lucide-react';

const TigerProtectionWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedService, setExpandedService] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
      gallery: []
    },
    {
      title: 'Handyman Services',
      description: 'Comprehensive maintenance and repair solutions for residential and small commercial properties. Expert execution of plumbing repairs, light electrical work, painting, drywall, installations, and general maintenance to keep your property in optimal condition.',
      icon: <Wrench className="w-8 h-8" />,
      features: ['Basic Plumbing', 'Light Electrical', 'Painting & Drywall', 'General Repairs'],
      gallery: []
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Emergency Response',
      description: 'Available around the clock for urgent situations'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Licensed & Insured',
      description: 'Fully certified professionals you can trust'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Experienced Team',
      description: 'Years of expertise in property protection'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Guaranteed',
      description: 'Satisfaction guaranteed on every project'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setMobileMenuOpen(false);
        }
      });
    });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Contact Form Submission - ${formData.service}`
        })
      });

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll contact you soon.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please call us directly at (786) 821-2717.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white" style={{fontFamily: "'Roboto', 'Segoe UI', sans-serif"}}>
      {/* Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@300;400;500;600;700&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
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
            aria-label="Close lightbox"
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

      {/* Navigation - Mejorada */}
      <nav className="fixed w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-md z-50 border-b border-blue-500/20 shadow-lg shadow-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Tiger Protection Services Logo" 
                  className="h-16 w-16 object-contain drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
                />
              </div>
              <div className="text-2xl font-bold tracking-tight" style={{fontFamily: "'Montserrat', sans-serif"}}>
                <span className="text-blue-400">TIGER</span>
                <span className="text-green-400"> PROTECTION SERVICES</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1" style={{fontFamily: "'Roboto', sans-serif", fontWeight: '600'}}>
              <a href="#about" className="px-4 py-2 rounded-lg hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 text-sm uppercase tracking-wide">About</a>
              <a href="#mission" className="px-4 py-2 rounded-lg hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 text-sm uppercase tracking-wide">Mission</a>
              <a href="#services" className="px-4 py-2 rounded-lg hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 text-sm uppercase tracking-wide">Services</a>
              <a href="#why-choose-us" className="px-4 py-2 rounded-lg hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 text-sm uppercase tracking-wide">Why Us</a>
              <a href="#contact" className="px-4 py-2 rounded-lg hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 text-sm uppercase tracking-wide">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-blue-400 transition p-2 rounded-lg hover:bg-blue-500/10"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Call Button - Desktop */}
            <a 
              href="https://wa.me/17868212717" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 items-center gap-2 font-semibold transform hover:scale-105"
            >
              <PhoneCall className="w-5 h-5" />
              <span className="uppercase tracking-wide text-sm">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 animate-in slide-in-from-top duration-300 border-t border-gray-700 mt-2 pt-4">
              <div className="flex flex-col space-y-2">
                <a href="#about" className="hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 py-3 px-4 rounded-lg uppercase tracking-wide text-sm font-semibold">About</a>
                <a href="#mission" className="hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 py-3 px-4 rounded-lg uppercase tracking-wide text-sm font-semibold">Mission</a>
                <a href="#services" className="hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 py-3 px-4 rounded-lg uppercase tracking-wide text-sm font-semibold">Services</a>
                <a href="#why-choose-us" className="hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 py-3 px-4 rounded-lg uppercase tracking-wide text-sm font-semibold">Why Us</a>
                <a href="#contact" className="hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 py-3 px-4 rounded-lg uppercase tracking-wide text-sm font-semibold">Contact</a>
                <a 
                  href="https://wa.me/17868212717" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 justify-center font-semibold uppercase tracking-wide text-sm mt-4"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Mejorado */}
      <section className="pt-40 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-green-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg5NiwxNjUsMjUwLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-6 py-2 rounded-full mb-8">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">24/7 Emergency Services Available</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" style={{fontFamily: "'Montserrat', sans-serif"}}>
              <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                PROFESSIONAL
              </span>
              <span className="block text-white mt-2">
                PROPERTY PROTECTION
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed font-light">
              Emergency Water Damage Restoration, Mold Remediation & Property Protection Services
            </p>
            
            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-blue-400 mb-12">
              <MapPin className="w-5 h-5" />
              <span className="text-lg font-semibold">Tampa, Florida</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://wa.me/17868212717" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 uppercase tracking-wide"
              >
                <PhoneCall className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Get Free Inspection Now
              </a>
              <a 
                href="#services" 
                className="group border-2 border-blue-400 hover:bg-blue-400/10 px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 flex items-center gap-3 uppercase tracking-wide hover:border-blue-300"
              >
                <Shield className="w-6 h-6 group-hover:scale-110 transition-transform" />
                View Our Services
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold">Experienced Team</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm font-semibold">Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section - Mejorado */}
      <section id="about" className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Montserrat', sans-serif"}}>
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                OUR WORK SPEAKS FOR ITSELF
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Trusted by homeowners and businesses across Tampa for professional property protection and restoration services
            </p>
          </div>
          
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
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
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white text-2xl font-bold drop-shadow-lg">{image.caption}</p>
                </div>
              </div>
            ))}
            
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - NUEVA */}
      <section id="mission" className="py-24 px-4 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Montserrat', sans-serif"}}>
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                OUR MISSION & VISION
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Committed to excellence in property protection and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <div className="group bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm p-10 rounded-2xl border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-500/20 p-4 rounded-full group-hover:bg-blue-500/30 transition-colors">
                  <Shield className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-white" style={{fontFamily: "'Montserrat', sans-serif"}}>
                  OUR MISSION
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed" style={{fontFamily: "'Roboto', sans-serif"}}>
                To deliver superior quality services with exceptional speed and efficiency, adhering to the highest industry standards. 
                Utilizing specialized technology and certified personnel, we provide rapid, professional, and reliable property protection 
                services that minimize losses, safeguard public health, and restore affected spaces with complete confidence. We are committed 
                to maintaining the highest standards of integrity and customer service in every project we undertake.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-sm p-10 rounded-2xl border-2 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-500/20 p-4 rounded-full group-hover:bg-green-500/30 transition-colors">
                  <Award className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-3xl font-bold text-white" style={{fontFamily: "'Montserrat', sans-serif"}}>
                  OUR VISION
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed" style={{fontFamily: "'Roboto', sans-serif"}}>
                To establish Tiger Protection Services as Tampa's leading trusted authority in professional cleaning, disinfection, 
                moisture extraction, and property restoration services. We envision providing every Tampa resident and business owner 
                with access to cleaner, safer, and healthier living and working environments through innovation, excellence, and 
                immediate expert assistance in their time of need, setting the industry standard for quality and reliability.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-10 text-white" style={{fontFamily: "'Montserrat', sans-serif"}}>
              OUR CORE VALUES
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
                <CheckCircle className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2 uppercase tracking-wide" style={{fontFamily: "'Montserrat', sans-serif"}}>Integrity</h4>
                <p className="text-sm text-gray-400" style={{fontFamily: "'Roboto', sans-serif"}}>Honest & transparent in all we do</p>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2 uppercase tracking-wide" style={{fontFamily: "'Montserrat', sans-serif"}}>Excellence</h4>
                <p className="text-sm text-gray-400" style={{fontFamily: "'Roboto', sans-serif"}}>Highest quality in every project</p>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2 uppercase tracking-wide" style={{fontFamily: "'Montserrat', sans-serif"}}>Reliability</h4>
                <p className="text-sm text-gray-400" style={{fontFamily: "'Roboto', sans-serif"}}>Always there when you need us</p>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2 uppercase tracking-wide" style={{fontFamily: "'Montserrat', sans-serif"}}>Safety</h4>
                <p className="text-sm text-gray-400" style={{fontFamily: "'Roboto', sans-serif"}}>Your protection is our priority</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Mejorada */}
      <section id="why-choose-us" className="py-24 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Montserrat', sans-serif"}}>
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                WHY CHOOSE TIGER PROTECTION?
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for emergency property protection and restoration services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Mejorada */}
      <section id="services" className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Montserrat', sans-serif"}}>
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                OUR SERVICES
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive property protection solutions for residential and commercial properties
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition transform hover:scale-[1.02]"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-blue-400 bg-blue-400/10 p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-green-400 mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Gallery Toggle Button */}
                  {service.gallery.length > 0 && (
                    <button
                      onClick={() => toggleGallery(index)}
                      className="w-full mt-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 hover:from-blue-500/30 hover:to-green-500/30 border border-blue-500/50 px-4 py-3 rounded-lg text-sm font-semibold transition flex items-center justify-center gap-2"
                    >
                      <ImageIcon className="w-4 h-4" />
                      {expandedService === index ? 'Hide Gallery' : 'View Our Work'}
                    </button>
                  )}
                </div>

                {/* Expandable Gallery */}
                {expandedService === index && service.gallery.length > 0 && (
                  <div className="mt-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 border-t border-gray-700 animate-in slide-in-from-top duration-300">
                    <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                      <ImageIcon className="w-5 h-5 text-blue-400" />
                      Project Gallery
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
                            alt={`${service.title} - Project ${imgIndex + 1}`}
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
                      Close Gallery
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Mejorada */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Montserrat', sans-serif"}}>
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                CONTACT US
              </span>
            </h2>
            <p className="text-gray-400 text-xl">
              Available 24/7 for emergency services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-6" style={{fontFamily: "'Montserrat', sans-serif"}}>
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Emergency Line</h4>
                      <a href="tel:+17868212717" className="text-gray-400 hover:text-blue-400 transition text-lg">
                        +1 (786) 821-2717
                      </a>
                      <p className="text-xs text-gray-500 mt-1">Available 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <a href="mailto:tigerprotectionservices21@gmail.com" className="text-gray-400 hover:text-green-400 transition break-all text-sm">
                        tigerprotectionservices21@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Service Area</h4>
                      <p className="text-gray-400">
                        Tampa, FL<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <a
                    href="https://wa.me/17868212717"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-center py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Gift className="w-5 h-5" />
                    Get Free Inspection via WhatsApp
                  </a>
                  <p className="text-sm text-center text-gray-500 mt-2">
                    Free consultation • Licensed & Insured • Fast response
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                FREE QUOTE
              </div>
              <h3 className="text-2xl font-bold mb-6 mt-4" style={{fontFamily: "'Montserrat', sans-serif"}}>
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="(786) 821-2717"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                  >
                    <option value="">Select a service</option>
                    <option value="Water Damage Restoration">Water Damage Restoration</option>
                    <option value="Mold Remediation">Mold Remediation</option>
                    <option value="Shrink Wrap Protection">Shrink Wrap Protection</option>
                    <option value="Pressure Washing">Pressure Washing</option>
                    <option value="Handyman Services">Handyman Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {formStatus.message && (
                  <div className={`p-4 rounded-lg ${
                    formStatus.type === 'success' 
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                      : 'bg-red-500/20 border border-red-500/50 text-red-400'
                  }`}>
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold mb-2" style={{fontFamily: "'Montserrat', sans-serif"}}>
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
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/tiger_protection_llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition"
                aria-label="Instagram"
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
    </div>
  );
};

export default TigerProtectionWebsite;