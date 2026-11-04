import { Link } from 'react-router-dom'
export default function NotFound() {
  return <div className="page-container py-24 text-center"><p className="text-sm font-semibold text-blue-700">404 ERROR</p><h1 className="mt-2 text-3xl font-bold">Page not found</h1><Link to="/" className="btn-primary mt-6">Go to homepage</Link></div>
}