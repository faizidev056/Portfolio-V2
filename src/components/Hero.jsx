import { useState, useEffect } from 'react'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Full Stack App Developer using Flutter & Flutterflow'
  
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 80) // 80ms delay between characters for realistic typing

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 min-h-[180px] sm:min-h-[200px] lg:min-h-[240px]">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>

            <p className="text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
              With over 5 years of experience, I specialize in bridging low-code platforms like FlutterFlow with custom development using Node.js and Flutter. I have successfully deployed 10+ production-ready applications, utilizing advanced skills in Flutter (Dart), Node.js, Express.js, and Prisma to create scalable, high-performance solutions that deliver measurable business value.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              Let's talk
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Content - Webinar Card */}
          <div className="relative transition-transform duration-300 hover:scale-105">
            <div className="bg-blue-800 rounded-2xl p-8 border border-blue-600 transition-shadow duration-300 hover:shadow-2xl">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold uppercase">
                    Live Demo
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                How Faizan's Flutter Expertise Is Transforming Business Workflows
              </h3>

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                  alt="Developer"
                  className="w-12 h-12 rounded-full"
                />
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
                  alt="Developer"
                  className="w-12 h-12 rounded-full"
                />
              </div>

              <a
                href="#contact"
                className="inline-flex items-center text-white hover:text-blue-200 font-semibold transition-colors"
              >
                Schedule Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Recognition Section */}
        <div className="mt-20">
          <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-8 text-center">
            RECOGNIZED BY
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Inc 5000</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Forbes</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Upwork Top Rated</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Financial Times</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
