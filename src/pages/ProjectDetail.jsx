import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { projectsData } from '../data/projects'

const ProjectDetail = () => {
    const { id } = useParams()
    // decodeURI to handle spaces in URL
    const project = projectsData.find(p => p.title === decodeURIComponent(id))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!project) {
        return (
            <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                    <Link to="/" className="text-blue-600 hover:text-blue-800">Back to Home</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link to="/#portfolio" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Projects
                </Link>

                {/* Hero Section */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-12">
                    <div className="relative h-64 sm:h-80 lg:h-96">
                        <div className="absolute inset-0 bg-blue-900/40 z-10"></div>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 z-20 text-white">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className={`${project.bgAccent} ${project.accent} bg-white/90 px-4 py-1 rounded-full text-sm font-semibold`}>
                                    {project.category}
                                </span>
                                <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    {project.service}
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
                            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl flex items-center">
                                <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-lg mr-3">
                                    {project.company}
                                </span>
                                Client Project
                            </p>
                        </div>
                    </div>
                </div>

                {/* Detailed Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Project Overview */}
                        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {project.description.replace(/\*\*(.*?)\*\*/g, '$1')}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                This project represents a significant milestone in our portfolio, showcasing our ability to deliver
                                high-quality, scalable solutions. We worked closely with the client to understand their unique constraints
                                and requirements, resulting in a product that not only meets but exceeds their expectations.
                            </p>
                        </section>

                        {/* The Challenge */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    The client faced significant hurdles in scalability and user engagement. They needed a solution that could
                                    handle high traffic loads while providing a seamless, intuitive experience for users across multiple platforms.
                                    Legacy systems were holding them back, and data synchronization was a major pain point.
                                </p>
                                <ul className="space-y-3">
                                    {['Scalability issues with previous architecture', 'Need for real-time data synchronization', 'Cross-platform compatibility requirements', 'Strict security compliance mandates'].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-gray-700">
                                            <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* The Solution */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Solution</h2>
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    We architected a modern, cloud-native solution focusing on performance and reliability. By adopting a
                                    microservices architecture and utilizing cutting-edge frontend frameworks, we delivered a robust platform
                                    that scales effortlessly. Use of real-time technologies ensured that users always have the latest data at their fingertips.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-green-50 p-5 rounded-xl">
                                        <h3 className="font-bold text-green-800 mb-2">Architecture</h3>
                                        <p className="text-sm text-green-700">Microservices-based backend with containerization for easy deployment.</p>
                                    </div>
                                    <div className="bg-blue-50 p-5 rounded-xl">
                                        <h3 className="font-bold text-blue-800 mb-2">Frontend</h3>
                                        <p className="text-sm text-blue-700">Responsive, mobile-first design facilitating a consistent experience.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Tech Stack */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Node.js', 'MongoDB', 'AWS', 'TailwindCSS', 'Docker', 'Redis'].map((tech, idx) => (
                                    <span key={idx} className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-lg">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Quote / Testimonial Placeholder */}
                        <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>

                            <svg className="w-10 h-10 text-white/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 16.6569 20.6739 18 19.017 18H16.017C15.4647 18 15.017 18.4477 15.017 19V21L14.017 21ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166C6.46432 18 6.0166 18.4477 6.0166 19V21L5.0166 21Z" />
                            </svg>
                            <p className="text-lg italic mb-4 relative z-10">
                                "The team delivered an outstanding product that transformed our business. Highly recommended!"
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold mr-3">
                                    C
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Client Name</p>
                                    <p className="text-xs text-blue-200">Director of Technology</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                            <Link to="/#contact" className="inline-block bg-white border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md">
                                Discuss Your Project
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
