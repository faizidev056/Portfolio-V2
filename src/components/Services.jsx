const Services = () => {
  const services = [
    {
      title: 'Full Stack App Development',
      description: 'Building cross-platform applications with Flutter, FlutterFlow, and React. Expert in state management using Bloc, Riverpod, Provider, and GetX.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    },
    {
      title: 'Web Development',
      description: 'Modern web applications using React, Vue, Svelte, Next.js, and Tailwind CSS for responsive, high-performance user experiences.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side solutions with Node.js, Express.js, and Nest.js. RESTful APIs and microservices architecture implementation.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop',
    },
    {
      title: 'Database Management',
      description: 'Expert database design and optimization using MongoDB, PostgreSQL, SQLite, Hive, Get_storage, and SharedPreferences.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop',
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces with focus on user experience, accessibility, and modern design principles.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
    },
    {
      title: 'WordPress Development',
      description: 'Custom WordPress themes, plugins, and e-commerce solutions. Performance optimization and security implementation.',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop',
    },
  ]

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
            Comprehensive solutions to transform your ideas into powerful digital experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 group relative"
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
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
