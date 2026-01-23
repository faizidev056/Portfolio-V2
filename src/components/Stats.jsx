const Stats = () => {
  const stats = [
    {
      number: '5+',
      label: 'YEARS ON\nMARKET',
    },
    {
      number: '50+',
      label: 'PROFESSIONALS\nON BOARD',
    },
    {
      number: '100%',
      label: 'OF CLIENTS RETURN FOR\nLONG-TERM PARTNERSHIPS',
    },
    {
      number: '4',
      label: 'GLOBAL\nOFFICES',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            I'm committed to lead your digital journey to success.
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            I have a proven track record of building scalable software solutions for businesses.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Work with me
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center border-l border-white/20 pl-8 first:border-l-0 first:pl-0"
            >
              <div className="text-5xl lg:text-6xl font-bold text-white mb-4">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm font-semibold uppercase leading-tight whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats