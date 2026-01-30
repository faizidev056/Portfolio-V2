const Services = () => {
  const services = [
    {
      title: 'Full Stack App Development',
      description: 'Building cross-platform applications with Flutter, FlutterFlow, and React. Expert in state management using Bloc, Riverpod, Provider, and GetX.',
      icon: (
        <div className="w-full h-48 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-t-xl flex items-center justify-center">
          <div className="w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
        </div>
      ),
    },
    {
      title: 'Web Development',
      description: 'Modern web applications using React, Vue, Svelte, Next.js, and Tailwind CSS for responsive, high-performance user experiences.',
      icon: (
        <div className="w-full h-48 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-t-xl flex items-center justify-center relative overflow-hidden">
          <div className="w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"></div>
        </div>
      ),
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side solutions with Node.js, Express.js, and Nest.js. RESTful APIs and microservices architecture implementation.',
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
      title: 'Database Management',
      description: 'Expert database design and optimization using MongoDB, PostgreSQL, SQLite, Hive, Get_storage, and SharedPreferences.',
      icon: (
        <div className="w-full h-48 bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700 rounded-t-xl flex items-center justify-center relative">
          <div className="w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full"></div>
        </div>
      ),
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces with focus on user experience, accessibility, and modern design principles.',
      icon: (
        <div className="w-full h-48 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-t-xl flex items-center justify-center relative">
          <div className="w-20 h-20 bg-white/20 rounded-lg"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-lg"></div>
        </div>
      ),
    },
    {
      title: 'WordPress Development',
      description: 'Custom WordPress themes, plugins, and e-commerce solutions. Performance optimization and security implementation.',
      icon: (
        <div className="w-full h-48 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 rounded-t-xl flex items-center justify-center relative">
          <div className="w-16 h-16 bg-white/15 rounded-full"></div>
          <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/10 rounded-full"></div>
        </div>
      ),
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      </div>
    </section>
  )
}

export default Services
