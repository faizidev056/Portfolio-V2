import faizanSaeedImage from '../assets/faizan_saeed.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Full Stack App Development', href: '/#services' },
      { name: 'Web Development', href: '/#services' },
      { name: 'Backend Development', href: '/#services' },
      { name: 'Database Management', href: '/#services' },
      { name: 'UI/UX Design', href: '/#services' },
      { name: 'WordPress Development', href: '/#services' },
    ],
    company: [
      { name: 'Home', href: '/#home' },
      { name: 'Services', href: '/#services' },
      { name: 'Team', href: '/#team' },
      { name: 'Projects', href: '/#portfolio' },
      { name: 'Reviews', href: '/#reviews' },
      { name: 'Contact', href: '/#contact' },
    ],
    social: [
      { name: 'LinkedIn', href: 'https://linkedin.com' },
      { name: 'GitHub', href: 'https://github.com/faizidev056' },
      { name: 'Upwork', href: 'https://www.upwork.com/freelancers/~0158ca01ae8505c1b9' },
      { name: 'Fiverr', href: 'https://www.fiverr.com/users/faizidev_/seller_dashboard' },
    ]
  }

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/#home" className="inline-block mb-6 transition-transform duration-200 hover:scale-105">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                  <img src={faizanSaeedImage} alt="FS" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">Faizan Saeed</span>
                  <span className="text-sm text-gray-400">Flutter Developer</span>
                </div>
              </div>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Expert Flutter & FlutterFlow developer with 5+ years of experience
              building high-quality mobile applications. Specializing in cross-platform
              development that drives business growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/faizidev056"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-200 hover:scale-110 hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0158ca01ae8505c1b9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-200 hover:scale-110 hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                </svg>
              </a>
              <a
                href="https://www.fiverr.com/users/faizidev_/seller_dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-500 transition-all duration-200 hover:scale-110 hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.639 11.928h-.954c.06-.258.216-.492.534-.492.246 0 .42.228.42.492zm10.362.072c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-17.784-2.22c0 .298.242.54.54.54.298 0 .54-.242.54-.54s-.242-.54-.54-.54c-.298 0-.54.242-.54.54zm1.518 3.42h-.42v-2.526h-2.466v-.162c0-.318.318-.324.48-.324.186 0 .27.018.27.018v-.684c0 0-.168-.024-.396-.024-.516 0-1.47.144-1.47 1.236v.138h-.45v.81h.45v1.71h-.42v.81h2.028v-1.71h-2.466v-1.71h1.35v1.71h-.42v.81h1.956v-1.278zm3.414-1.716h.372v-.81h-1.77v.81h.3l-.384 1.2c-.072.198-.09.438-.09.438h-1.034c0 0-.018-.24-.09-.438l-.384-1.2h.3v-.81h-1.77v.81h.372l.924 2.52h1.32l.924-2.52zm3.648.72c0-.924-.558-1.608-1.548-1.608-1.074 0-1.734.762-1.734 1.74 0 .888.642 1.746 1.83 1.746.9 0 1.434-.468 1.434-.468l-.408-.774c0 0-.444.318-.936.318-.354 0-.69-.186-.774-.612h2.112c-.03-.432 0-.66 0-.768l-.046-.012 0 .048zm2.976-1.572c0 0-.066-.012-.132-.012-.51-.006-.93.366-1.068.822v0h-.012c0 0 .012-.066.012-.168v-.642c0-.306-.168-.426-.474-.426h-1.05v.81h.312c.09 0 .144.054.144.144v1.89h-.45v.81h2.022v-1.26h-.45v-.486c0-.606.3-1.002.918-1.002.138 0 .228.018.228.018v-1.5zm2.958 1.098v-1.098c0 0-.066-.012-.132-.012-.504-.006-.924.366-1.068.822v0h-.012c0 0 .012-.066.012-.168v-.642c0-.306-.168-.426-.474-.426h-1.05v.81h.312c.09 0 .144.054.144.144v1.89h-.45v.81h2.022v-1.26h-.45v-.486c0-.606.3-1.002.918-1.002.138 0 .228.018.228.018z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Faizan Saeed. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
