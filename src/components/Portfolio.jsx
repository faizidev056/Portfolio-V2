const Portfolio = () => {
  const projects = [
    {
      title: 'FetchFive: Real-Time Multiplayer Gaming Platform',
      company: 'FetchFive',
      logo: 'FetchFive',
      category: 'Gaming',
      service: 'Full-Stack Development',
      description: 'Engineered a high-performance real-time multiplayer game leveraging **WebSockets** for instant communication and **REST APIs** for seamless data synchronization. Overcame latency challenges to ensure smooth gameplay across devices.',
      image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop',
    },
    {
      title: 'Ultimate Poker Host: Tournament Management System',
      company: 'Ultimate Poker Host',
      logo: 'UPH',
      category: 'Entertainment',
      service: 'Mobile & Backend Integration',
      description: 'Developed a comprehensive tournament platform featuring real-time chat, deep linking for user acquisition, and **RevenueCat** for subscription management. Architected scalable backend to handle concurrent tournaments.',
      image: 'https://images.unsplash.com/photo-1606167668584-87a0a5d10fd5?w=600&h=400&fit=crop',
    },
    {
      title: 'Yearly: Automated Birthday Reminder & Gift Platform',
      company: 'Yearly',
      logo: 'Yearly',
      category: 'Lifestyle',
      service: 'Cross-Platform App Development',
      description: 'Built an intelligent contact-fetching app with automated notifications and integrated gift-sending features. Implemented secure data handling and push notifications to enhance user engagement and retention.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
    },
    {
      title: 'BBFX: High-Security Currency Trading Platform',
      company: 'BBFX',
      logo: 'BBFX',
      category: 'Finance',
      service: 'Secure Mobile Trading App',
      description: 'Created a robust currency trading app with real-time bidding and deal confirmation. Prioritized security with encrypted transactions and implemented real-time data feeds for accurate market information.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    },
    {
      title: 'SeaServe: Multi-App Yacht Management Ecosystem',
      company: 'SeaServe',
      logo: 'SeaServe',
      category: 'Maritime',
      service: 'Enterprise App Suite',
      description: 'Architected a massive multi-app ecosystem for yacht management, featuring role-based UI and cross-app synchronization. Integrated complex workflows and ensured data consistency across multiple interconnected applications.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
    },
  ]

  const testimonials = [
    {
      quote: "tkxel shared our vision right from the get go, and helped us achieve the unthinkable. Their team was highly professional.",
      author: "Pam Chitwood",
      role: "Product Manager, ABB",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
    },
    {
      quote: "tkxel shared our vision right from the get go, and helped us achieve the unthinkable. Their team was highly professional.",
      author: "Nick Drogo",
      role: "Global Director IT, Knowles",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Key Projects: Technical Challenges Solved
          </h2>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#testimonials"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              All case studies
            </a>
            <div className="flex space-x-2">
              <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">"
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1">
                    <span className="text-sm font-semibold text-gray-700">View case study</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {project.service}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 rounded-lg px-4 py-2">
                      <span className="font-bold text-gray-900">{project.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center mt-12 lg:hidden">
          <a
            href="#testimonials"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            All case studies
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
