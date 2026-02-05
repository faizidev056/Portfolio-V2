import { Link } from 'react-router-dom'
import { projectsData } from '../data/projects'
import { useEffect } from 'react'


const AllProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <main className="flex-grow pt-24 pb-16 sm:pb-20 lg:pb-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16 lg:mb-20">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            All Projects
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A comprehensive list of my work, featuring mobile apps, web platforms, and backend systems.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                        {projectsData.map((project, index) => (
                            <Link
                                to={`/project/${project.title}`}
                                key={index}
                                className="group cursor-pointer block"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 h-full">
                                    {/* Image Section */}
                                    <div className="relative aspect-[16/10] sm:aspect-video overflow-hidden">
                                        <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 sm:p-8">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-all duration-300 leading-tight">
                                            {project.title}
                                        </h3>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            <span className={`${project.bgAccent} ${project.accent} px-4 py-2 rounded-full text-sm font-semibold shadow-sm`}>
                                                {project.category}
                                            </span>
                                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                                                {project.service}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                                            {project.description.replace(/\*\*(.*?)\*\*/g, '$1')}
                                        </p>

                                        {/* Company Badge */}
                                        <div className="flex items-center justify-between">
                                            <div className="bg-blue-600 text-white rounded-xl px-6 py-3 shadow-lg">
                                                <span className="font-bold text-sm sm:text-base">{project.company}</span>
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            {/* Add custom CSS for animations if not already global */}
            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    )
}

export default AllProjects
