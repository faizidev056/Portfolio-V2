import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { servicesData } from '../data/services'

const ServiceDetail = () => {
    const { id } = useParams()
    // decodeURI to handle spaces in URL
    const service = servicesData.find(s => s.title === decodeURIComponent(id))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!service) {
        return (
            <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                    <Link to="/" className="text-blue-600 hover:text-blue-800">Back to Home</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>

                {/* Hero Section */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-12">
                    <div className="relative h-64 sm:h-80 lg:h-96">
                        <div className="absolute inset-0 bg-blue-900/60 z-10"></div>
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 z-20 text-white">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{service.title}</h1>
                            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl">{service.description}</p>
                        </div>
                    </div>
                </div>

                {/* Dummy Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview */}
                        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Overview</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Our {service.title} service is designed to deliver top-tier results tailored to your specific needs.
                                Whether you are a startup looking to make an impact or an established enterprise seeking to optimize
                                operations, we bring expertise and innovation to every project. We handle everything from initial
                                concept to final deployment and ongoing support.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We leverage the latest technologies and industry best practices to ensure your solution is scalable,
                                secure, and future-proof. Our team works closely with you to understand your objectives and deliver
                                a product that exceeds expectations.
                            </p>
                        </section>

                        {/* Key Features */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Feature {item}</h3>
                                        <p className="text-gray-600 text-sm">
                                            Detailed explanation of feature {item} and how it benefits your business by improving efficiency.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Process */}
                        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
                            <div className="space-y-8">
                                {[
                                    { step: '01', title: 'Discovery & Planning', desc: 'We start by understanding your goals and requirements.' },
                                    { step: '02', title: 'Design & Strategy', desc: 'Creating a roadmap and visual blueprint for success.' },
                                    { step: '03', title: 'Development & Testing', desc: 'Building the solution with rigorous quality assurance.' },
                                    { step: '04', title: 'Launch & Support', desc: 'Deploying the product and providing ongoing maintenance.' },
                                ].map((process, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 mr-6 shadow-lg">
                                            {process.step}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                                            <p className="text-gray-600">{process.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* CTA Box */}
                        <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>

                            <h3 className="text-2xl font-bold mb-4 relative z-10">Ready to start?</h3>
                            <p className="text-blue-100 mb-8 relative z-10">
                                Let's discuss how we can help you achieve your goals with our {service.title} services.
                            </p>
                            <Link to="/#contact" className="block w-full bg-white text-blue-600 text-center py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg relative z-10">
                                Get a Quote
                            </Link>
                        </div>

                        {/* Why Choose Us */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
                            <ul className="space-y-4">
                                {['Expert Team', 'Proven Track Record', 'Dedicated Support', 'Competitive Pricing'].map((reason, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {reason}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail
