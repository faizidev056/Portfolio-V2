import { useEffect, useState } from 'react'

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const teamMembers = [
    {
      name: 'Faizan Saeed',
      role: 'Lead Flutter Developer',
      specialty: 'FlutterFlow & Mobile Architecture',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Full-stack developer specializing in Flutter and backend integration with 5+ years of experience.',
      skills: ['Flutter', 'FlutterFlow', 'Node.js', 'Firebase']
    },
    {
      name: 'Faizan Sattar',
      role: 'UI/UX Designer',
      specialty: 'User Experience & Interface Design',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      bio: 'Creative designer focused on crafting beautiful, intuitive user experiences that drive engagement.',
      skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      name: 'Ambreen Fatima',
      role: 'Full Stack Web Developer',
      specialty: 'MERN Stack',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: 'Results-driven Full Stack Developer with 3+ years of experience building scalable web applications using React, Next.js, TypeScript, and the MERN stack. Skilled in secure backend API development, JWT authentication, and role-based access control with Prisma and NodeACL.',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'WordPress',
        'JavaScript (ES6+)',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Prisma ORM',
        'JWT Authentication',
        'REST APIs',
        'NodeACL',
        'Git & GitHub'
      ]
    },
    {
      name: 'Kabir Ahmad',
      role: 'Web Developer',
      specialty: 'Cloud Infrastructure & CI/CD',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'DevOps expert focused on automation, deployment pipelines, and cloud infrastructure.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      name: 'Talha Ashraf',
      role: 'Flutter and Flutterflow Devloper',
      specialty: 'Quality Assurance & Testing',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      bio: 'Meticulous QA engineer ensuring flawless user experiences through comprehensive testing.',
      skills: ['Test Automation', 'Selenium', 'Jest', 'Quality Standards']
    },
    {
      name: 'Muhammad Usman',
      role: 'Flutter App Developer',
      specialty: 'Agile & Client Relations',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face',
      bio: 'Experienced PM ensuring seamless project delivery and exceptional client communication.',
      skills: ['Agile', 'Scrum', 'Jira', 'Stakeholder Management']
    }
  ]

  const itemsPerView = 3
  const maxIndex = Math.max(0, teamMembers.length - itemsPerView)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section id="team" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
            <span className="text-blue-700 text-sm font-semibold">Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet the
            <span className="text-blue-600"> Experts</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your vision to life with expertise and passion
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Wrapper */}
          <div className="overflow-hidden px-2 md:px-8">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-4"
                >
                  <div className="group h-full">
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col transform hover:-translate-y-2">
                      {/* Image Container with Gradient Overlay */}
                      <div className="relative h-56 sm:h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-blue-900/70 z-10"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Overlay Info */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-5 text-white">
                          <h3 className="text-xl sm:text-2xl font-bold mb-1">{member.name}</h3>
                          <p className="text-white/90 font-medium text-sm sm:text-base">{member.role}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 flex-grow flex flex-col">
                        <div className="mb-3">
                          <span className="inline-block bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                            {member.specialty}
                          </span>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                          {member.bio}
                        </p>

                        {/* Skills */}
                        <div className="border-t border-gray-100 pt-3">
                          <div className="flex flex-wrap gap-2">
                            {member.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Accent */}
                      <div className="h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center space-x-3 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${currentIndex === index
                  ? 'w-8 h-3 bg-blue-600'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center justify-center space-x-2 mx-auto"
            >
              {isAutoPlaying ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="hidden sm:inline">Pause Auto-play</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="hidden sm:inline">Resume Auto-play</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
