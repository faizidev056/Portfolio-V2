const About = () => {
  const skills = [
    { name: 'Flutter', level: 95 },
    { name: 'FlutterFlow', level: 90 },
    { name: 'Firebase', level: 92 },
    { name: 'REST APIs', level: 88 },
    { name: 'GetX', level: 94 },
    { name: 'UI/UX Design', level: 85 },
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
      number: '4+',
      label: 'Years in Flutter',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '50+',
      label: 'Projects Completed',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-white mb-6">
                    <h3 className="text-2xl font-bold mb-2">Faizan Saeed</h3>
                    <p className="text-white/80 leading-relaxed">
                      I'm a passionate Flutter developer specializing in cross-platform mobile development. 
                      With 5+ years of overall experience and 4+ years focused on the Flutter ecosystem, 
                      I've helped businesses across the globe turn their ideas into successful applications.
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
            <div className="inline-flex items-center bg-indigo-100 rounded-full px-4 py-2 mb-4">
              <span className="text-indigo-700 text-sm font-semibold">About Me</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Crafting Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Excellence</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm Faizan Saeed, a passionate Flutter developer who brings ideas to life through clean code and intuitive design. 
              My focus is on creating applications that not only look great but perform exceptionally well, ensuring a seamless 
              user experience that drives engagement and business growth.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-5 hover:bg-indigo-50 transition-colors group">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
