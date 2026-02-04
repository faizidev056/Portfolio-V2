import { Link } from 'react-router-dom'

import { servicesData } from '../data/services'

const Services = () => {

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
            <span className="text-blue-700 text-sm font-semibold">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our
            <span className="text-blue-600"> Services</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your digital needs, backed by a skilled team to deliver excellence.          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <Link
              to={`/service/${service.title}`}
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 group relative block"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                {/* Subtle Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Title with Arrow */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="text-sm sm:text-xl font-bold text-white drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6 bg-white group-hover:bg-white transition-colors duration-300">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-800 transition-colors">
                  {service.description}
                </p>

                {/* Learn More Link - appears on hover */}
                <div className="mt-3 sm:mt-4 flex items-center text-blue-600 font-semibold text-xs sm:text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore service</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Animated Bottom Bar */}
              <div className="h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
