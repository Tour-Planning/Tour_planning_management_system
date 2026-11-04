import { Link, useParams } from 'react-router-dom'
export default function PackageDetails() {
  const { id } = useParams()
  return <section className="page-container py-12"><Link to="/packages" className="text-sm font-medium text-blue-700">← Back to packages</Link><div className="panel mt-5 p-7"><p className="text-sm text-blue-700">Package #{id}</p><h1 className="mt-2 text-2xl font-bold">Tour Package Details</h1><p className="mt-3 text-slate-500">Package information and booking options will appear here once connected to the backend.</p><Link to="/login" className="btn-primary mt-6">Login to book</Link></div></section>
}