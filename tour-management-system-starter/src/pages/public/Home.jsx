import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, ShieldCheck, Users } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <section className="bg-white">
        <div className="page-container grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">TOUR PACKAGE MANAGEMENT SYSTEM</span>
            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">Make your next journey <span className="text-blue-700">memorable.</span></h1>
            <p className="mt-5 max-w-lg leading-7 text-slate-600">Explore tour packages, manage bookings and plan your travel with a simple and convenient platform.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link to="/packages" className="btn-primary gap-2">Explore packages <ArrowRight size={17} /></Link><Link to="/about" className="btn-secondary">Learn more</Link></div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <MapPin className="text-blue-700" size={30} />
              <h2 className="mt-4 text-xl font-bold text-slate-900">Discover new destinations</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Find packages that match your interests, schedule and budget.</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-50 p-3"><Users className="text-blue-700" /><p className="mt-2 text-sm font-semibold">Easy booking</p></div>
                <div className="rounded-lg bg-slate-50 p-3"><ShieldCheck className="text-blue-700" /><p className="mt-2 text-sm font-semibold">Organized travel</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-container py-14 text-center"><h2 className="text-2xl font-bold text-slate-900">Travel planning, made simple</h2><p className="mx-auto mt-3 max-w-2xl text-slate-500">Browse packages, submit enquiries and keep track of your bookings from one place.</p></section>
    </div>
  )
}