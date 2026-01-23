const Services = () => {
  const services = [
    {
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps built with Flutter for optimal performance and user experience.',
      icon: (
        <div className="w-full h-48 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-t-xl flex items-center justify-center">
          <div className="w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
        </div>
      ),
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with REST APIs, Firebase, and third-party services for complete functionality.',
      icon: (
        <div className="w-full h-48 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-t-xl flex items-center justify-center relative overflow-hidden">
          <div className="w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"></div>
        </div>
      ),
    },
    {
      title: 'State Management',
      description: 'Expert implementation of GetX and other state management solutions for scalable architecture.',
      icon: (
        <div className="w-full h-48 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-t-xl flex items-center justify-center relative">
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
        </div>
      ),
    },
    {
      title: 'Digital Strategy Consulting',
      description: 'Strategic guidance on mobile app architecture, technology choices, and development roadmaps.',
      icon: (
        <div className="w-full h-48 bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700 rounded-t-xl flex items-center justify-center relative">
          <div className="w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full"></div>
        </div>
      ),
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our services
          </h2>
          <a 
            href="#contact" 
            className="hidden lg:block border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            View all services
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group hover:scale-105 hover:-translate-y-2"
            >
              {/* Icon/Visual */}
              {service.icon}
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center mt-12 lg:hidden">
          <a 
            href="#contact" 
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-md hover:scale-105 hover:shadow-md"
          >
            View all services
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
