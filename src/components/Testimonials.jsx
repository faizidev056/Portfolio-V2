const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Thompson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Exceptional work on our Flutter application. The attention to detail and code quality exceeded our expectations. Delivered on time and was always responsive to feedback.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Product Manager, GameHub',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      content: 'The multiplayer game app was a complex project, but it was handled professionally from start to finish. Great understanding of real-time systems and excellent communication.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      role: 'Founder, SeaVentures',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Built multiple apps for our yacht management system. The scalable architecture and clean code made future updates seamless. Highly recommended for enterprise projects.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'CTO, FinTech Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Outstanding Flutter developer! Implemented complex financial features with security best practices. The app performance is excellent, and users love the smooth UI.',
      rating: 5
    },
    {
      name: 'James Miller',
      role: 'Marketing Director, AppLaunch',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      content: 'From concept to deployment, the entire process was smooth and professional. Great at translating business requirements into technical solutions. Will definitely work together again.',
      rating: 5
    },
    {
      name: 'Lisa Park',
      role: 'Product Owner, HealthTech',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      content: 'Delivered a beautiful and functional healthcare app. The Firebase integration was seamless, and the push notification system works flawlessly. Excellent communication throughout.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-indigo-100 rounded-full px-4 py-2 mb-4">
            <span className="text-indigo-700 text-sm font-semibold">Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Clients
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Say</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Building lasting relationships through exceptional work and consistent delivery. 
            Here's what my clients have to say about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-gray-100 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <svg key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-100"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-12 shadow-2xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Job Success Rate</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Completed Projects</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">5.0</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">40+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
