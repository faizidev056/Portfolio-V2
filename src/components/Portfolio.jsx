import { useState, useEffect } from 'react'

const Portfolio = () => {
  // State for testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Exceptional work on our Flutter application. The attention to detail and code quality exceeded our expectations. Delivered on time and was always responsive to feedback.",
      author: "Michael Thompson",
      role: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    },
    {
      quote: "The multiplayer game app was a complex project, but it was handled professionally from start to finish. Great understanding of real-time systems and excellent communication.",
      author: "Sarah Chen",
      role: "Product Manager, GameHub",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
    },
    {
      quote: "Built multiple apps for our yacht management system. The scalable architecture and clean code made future updates seamless. Highly recommended for enterprise projects.",
      author: "David Rodriguez",
      role: "Founder, SeaVentures",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const projects = [
    {
      title: 'FetchFive: Real-Time Multiplayer Gaming Platform',
      company: 'FetchFive',
      logo: 'FetchFive',
      category: 'Gaming',
      service: 'Full-Stack Development',
      description: 'Engineered a high-performance real-time multiplayer game leveraging **WebSockets** for instant communication and **REST APIs** for seamless data synchronization. Overcame latency challenges to ensure smooth gameplay across devices.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop',
      gradient: 'from-blue-600 to-cyan-600',
      accent: 'text-blue-600',
      bgAccent: 'bg-blue-100',
    },
    {
      title: 'Ultimate Poker Host: Tournament Management System',
      company: 'Ultimate Poker Host',
      logo: 'UPH',
      category: 'Entertainment',
      service: 'Mobile & Backend Integration',
      description: 'Developed a comprehensive tournament platform featuring real-time chat, deep linking for user acquisition, and **RevenueCat** for subscription management. Architected scalable backend to handle concurrent tournaments.',
      image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=600&h=400&fit=crop',
      gradient: 'from-blue-600 to-cyan-600',
      accent: 'text-blue-600',
      bgAccent: 'bg-blue-100',
    },
    {
      title: 'Yearly: Automated Birthday Reminder & Gift Platform',
      company: 'Yearly',
      logo: 'Yearly',
      category: 'Lifestyle',
      service: 'Cross-Platform App Development',
      description: 'Built an intelligent contact-fetching app with automated notifications and integrated gift-sending features. Implemented secure data handling and push notifications to enhance user engagement and retention.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop',
      gradient: 'from-blue-600 to-cyan-600',
      accent: 'text-blue-600',
      bgAccent: 'bg-blue-100',
    },
    {
      title: 'BBFX: High-Security Currency Trading Platform',
      company: 'BBFX',
      logo: 'BBFX',
      category: 'Finance',
      service: 'Secure Mobile Trading App',
      description: 'Created a robust currency trading app with real-time bidding and deal confirmation. Prioritized security with encrypted transactions and implemented real-time data feeds for accurate market information.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop',
      gradient: 'from-blue-600 to-cyan-600',
      accent: 'text-blue-600',
      bgAccent: 'bg-blue-100',
    },
    {
      title: 'SeaServe: Multi-App Yacht Management Ecosystem',
      company: 'SeaServe',
      logo: 'SeaServe',
      category: 'Maritime',
      service: 'Enterprise App Suite',
      description: 'Architected a massive multi-app ecosystem for yacht management, featuring role-based UI and cross-app synchronization. Integrated complex workflows and ensured data consistency across multiple interconnected applications.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
      gradient: 'from-teal-600 to-cyan-600',
      accent: 'text-teal-600',
      bgAccent: 'bg-teal-100',
    },
  ]

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg">
              Portfolio Showcase
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Key Projects:
                    </h2>
          
          {/* Navigation Controls - Desktop */}
          <div className="hidden lg:flex justify-center mt-8 space-x-4">
            <a
              href="#portfolio"
              className="group bg-white text-gray-700 px-8 py-3 rounded-xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md font-medium"
            >
              Explore Projects
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
            
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 lg:mb-24">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-gray-100">
                {/* Image Section */}
                <div className="relative aspect-[16/10] sm:aspect-video bg-gradient-to-br overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className={`${project.bgAccent} ${project.accent} px-4 py-2 rounded-full text-sm font-semibold shadow-sm`}>
                      {project.category}
                    </span>
                    <span className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                      {project.service}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                    {project.description.replace(/\*\*(.*?)\*\*/g, '$1')}
                  </p>
                  
                  {/* Company Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`bg-gradient-to-r ${project.gradient} text-white rounded-xl px-6 py-3 shadow-lg`}>
                      <span className="font-bold text-sm sm:text-base">{project.company}</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What Clients Say Carousel */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 shadow-xl border border-gray-100 mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              What Clients
              <span className="block sm:inline bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Say</span>
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Building lasting relationships through exceptional work and consistent delivery. Here's what my clients have to say about working together.
            </p>
          </div>
          
          <div className="relative max-w-sm sm:max-w-4xl lg:max-w-6xl mx-auto">
            {/* Carousel Content */}
            <div className="overflow-hidden rounded-xl sm:rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4 lg:px-6">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-100 shadow-lg max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-6 sm:mb-8">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12">
                          <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white transform rotate-12" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zM22 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Rating Stars */}
                      <div className="flex justify-center mb-6 sm:mb-8">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-yellow-400 fill-current mx-0.5 sm:mx-1" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed italic mb-8 sm:mb-10 text-center font-medium max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      {/* Author Info */}
                      <div className="flex items-center justify-center space-x-4 sm:space-x-6">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full object-cover ring-4 ring-white shadow-xl"
                          />
                          <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 sm:border-4 border-white shadow-lg"></div>
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1">{testimonial.author}</h4>
                          <p className="text-gray-600 text-sm sm:text-base">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center mt-8 sm:mt-12 space-x-4 sm:space-x-6 lg:space-x-8">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}
                className="group w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-blue-500 hover:text-blue-600 hover:shadow-2xl transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2 sm:space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`relative transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'w-3 h-3 sm:w-4 sm:h-4' 
                        : 'w-2.5 h-2.5 sm:w-3 sm:h-3 hover:scale-125'
                    }`}
                  >
                    {/* Outer ring for active state */}
                    {index === currentTestimonial && (
                      <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 -top-0.5 sm:-top-1 -left-0.5 sm:-left-1 border-2 border-blue-400 rounded-full animate-pulse"></div>
                    )}
                    
                    {/* Main dot */}
                    <div className={`w-full h-full rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-blue-600 shadow-lg shadow-blue-300' 
                        : 'bg-gray-300 hover:bg-blue-200'
                    }`}>
                      {/* Inner highlight for active state */}
                      {index === currentTestimonial && (
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full absolute top-0.5 left-0.5 opacity-80"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1)}
                className="group w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-blue-500 hover:text-blue-600 hover:shadow-2xl transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-full h-2 sm:h-3 mt-6 sm:mt-8 overflow-hidden shadow-inner relative mx-4 sm:mx-0">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full opacity-50"></div>
              
              {/* Main progress bar */}
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-700 ease-out shadow-lg relative overflow-hidden"
                style={{ width: `${((currentTestimonial + 1) / testimonials.length) * 100}%` }}
              >
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 -skew-x-12 animate-shimmer"></div>
                
                {/* Inner highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full opacity-60"></div>
              </div>
              
              {/* End cap glow */}
              <div 
                className="absolute top-0 h-full w-3 sm:w-4 bg-blue-400 rounded-full opacity-60 blur-sm transition-all duration-700 ease-out"
                style={{ left: `${((currentTestimonial + 1) / testimonials.length) * 100 - 2}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  )
}

export default Portfolio
