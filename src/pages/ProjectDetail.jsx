import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'

const ProjectDetail = () => {
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Project: {id}</h1>
                <p className="text-xl text-gray-600 mb-8">
                    This is a placeholder page for the project: {id}. Case studies, screenshots, and technical details will be available here.
                </p>
                <Link to="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    Back to Home
                </Link>
            </div>
        </div>
    )
}

export default ProjectDetail
