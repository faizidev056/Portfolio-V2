const About = () => {
  const skills = [
    { name: 'FlutterFlow', level: 95 },
    { name: 'Flutter (Dart)', level: 92 },
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 88 },
    { name: 'Prisma', level: 85 },
    { name: 'Firebase', level: 93 },
  ]

  const highlights = [
    {
      number: '5+',
      label: 'Years of Experience',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '10+',
      label: 'Production Apps Deployed',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: 'BS',
      label: 'Software Engineering',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-white mb-6">
                    <h3 className="text-2xl font-bold mb-2">Faizan Saeed</h3>
                    <p className="text-white/80 leading-relaxed">
                      I'm a Senior FlutterFlow & Full-Stack Developer with a BS in Software Engineering (2020–2024).
                      With over 5 years of experience, I excel in building complex, high-performance mobile and web ecosystems,
                      seamlessly integrating low-code solutions with custom backend architectures.
                    </p>
                  </div>

                  {/* Tech Icons */}
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/20 rounded-xl p-3">
                      <div className="text-2xl">📱</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3">
                      <div className="text-2xl">🔥</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3">
                      <div className="text-2xl">⚡</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3">
                      <div className="text-2xl">🎯</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Experience Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Top Rated</div>
                    <div className="text-gray-500">Upwork Freelancer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-5 hover:bg-indigo-50 transition-all duration-300 group hover:scale-105 hover:-translate-y-2 hover:shadow-lg">"
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-indigo-600 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{item.number}</span>
                  </div>
                  <span className="text-gray-600 text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Skills</h3>
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-indigo-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Table */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Comprehensive Tech Stack</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-md font-semibold text-indigo-600 mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**FlutterFlow**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**Flutter**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Responsive UI/UX</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Animations</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-indigo-600 mb-3">Backend & API</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**Node.js**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**Express.js**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">RESTful APIs</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">WebSockets</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-indigo-600 mb-3">DevOps & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**Docker**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**GitHub**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**Postman**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">App Store/Play Store Deployment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Experience Timeline</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V8a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-gray-900">Flutter Developer at Fortex Solutions</h4>
                    <p className="text-gray-600 text-sm mb-2">Current Position</p>
                    <p className="text-gray-700">Leading mobile app development initiatives, architecting end-to-end product deliveries for enterprise clients using **Flutter** and **FlutterFlow**.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-gray-900">Lead Freelance Developer</h4>
                    <p className="text-gray-600 text-sm mb-2">5+ Years</p>
                    <p className="text-gray-700">Transitioned from building individual apps to orchestrating complex ecosystems, delivering scalable solutions for startups and enterprises worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Team Section */}
        <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-indigo-100 rounded-full px-4 py-2 mb-4">
              <span className="text-indigo-700 text-sm font-semibold">Our Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Expert Team</span>
            </h2>
          </div>

          {/* Team Members Full-Width Carousel */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-6">
              <div className="flex space-x-6 px-4">
                {/* Team Member 1 */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 w-80 flex-shrink-0 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-indigo-400">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                      alt="Faizan Saeed"
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-100"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Faizan Saeed</h3>
                    <span className="text-indigo-600 font-semibold text-sm mb-3">Full Stack App Developer</span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      5+ years of experience in Flutter, FlutterFlow, Node.js, and full-stack development. Expert in building scalable mobile and web applications.
                    </p>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 w-80 flex-shrink-0 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-indigo-400">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
                      alt="Sarah Ahmed"
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-100"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Ahmed</h3>
                    <span className="text-indigo-600 font-semibold text-sm mb-3">UI/UX Designer</span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      4 years of experience crafting intuitive and beautiful user interfaces. Specialized in mobile-first design and user research.
                    </p>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 w-80 flex-shrink-0 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-indigo-400">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
                      alt="Ali Hassan"
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-100"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Ali Hassan</h3>
                    <span className="text-indigo-600 font-semibold text-sm mb-3">Backend Developer</span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      3+ years specializing in Node.js, Express.js, and database architecture. Expert in building robust APIs and microservices.
                    </p>
                  </div>
                </div>

                {/* Team Member 4 */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 w-80 flex-shrink-0 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-indigo-400">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                      alt="Ayesha Khan"
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-100"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Ayesha Khan</h3>
                    <span className="text-indigo-600 font-semibold text-sm mb-3">Web Developer</span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      2+ years of experience with React, Vue, and Next.js. Passionate about creating responsive and performant web applications.
                    </p>
                  </div>
                </div>

                {/* Team Member 5 */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 w-80 flex-shrink-0 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-indigo-400">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                      alt="Ahmed Raza"
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-100"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Ahmed Raza</h3>
                    <span className="text-indigo-600 font-semibold text-sm mb-3">Flutter Developer</span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      3 years building cross-platform mobile apps with Flutter. Expert in state management with Bloc and Riverpod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">← Scroll to see all team members →</p>
          </div>
        </div>

        {/* Continue with other sections in grid layout */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div></div>
          <div>
            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Skills</h3>
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-indigo-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Table */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Comprehensive Tech Stack</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-md font-semibold text-indigo-600 mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**FlutterFlow**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**Flutter**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Responsive UI/UX</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Animations</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-indigo-600 mb-3">Backend & API</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**Node.js**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**Express.js**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">RESTful APIs</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">WebSockets</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-indigo-600 mb-3">DevOps & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**Docker**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**GitHub**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">**Postman**</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">App Store/Play Store Deployment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Experience Timeline</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V8a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-gray-900">Flutter Developer at Fortex Solutions</h4>
                    <p className="text-gray-600 text-sm mb-2">Current Position</p>
                    <p className="text-gray-700">Leading mobile app development initiatives, architecting end-to-end product deliveries for enterprise clients using **Flutter** and **FlutterFlow**.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-gray-900">Lead Freelance Developer</h4>
                    <p className="text-gray-600 text-sm mb-2">5+ Years</p>
                    <p className="text-gray-700">Transitioned from building individual apps to orchestrating complex ecosystems, delivering scalable solutions for startups and enterprises worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
