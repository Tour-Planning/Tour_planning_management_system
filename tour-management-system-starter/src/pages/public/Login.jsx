import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import Button from '../../components/common/Button'

export default function Login() {
  const [role, setRole] = useState('CUSTOMER')
  const { loginAs } = useAuth()
  const navigate = useNavigate()
  const submit = (event) => {
    event.preventDefault()
    loginAs(role)
    navigate(role === 'ADMIN' ? '/admin/dashboard' : role === 'TRAVEL_ADMIN' ? '/travel-admin/dashboard' : '/customer/dashboard')
  }
  return <section className="page-container flex justify-center py-12"><form onSubmit={submit} className="panel w-full max-w-md p-7"><h1 className="text-2xl font-bold">Welcome back</h1><p className="mt-1 text-sm text-slate-500">Sign in to continue to TourEase.</p><label className="mt-6 block text-sm font-medium">Email address</label><input className="input mt-2" type="email" placeholder="you@example.com" required /><label className="mt-4 block text-sm font-medium">Password</label><input className="input mt-2" type="password" placeholder="Enter password" required /><label className="mt-4 block text-sm font-medium">Demo role (temporary)</label><select className="input mt-2" value={role} onChange={(e) => setRole(e.target.value)}><option value="CUSTOMER">Customer</option><option value="TRAVEL_ADMIN">Travel Admin</option><option value="ADMIN">Super Admin</option></select><Button type="submit" className="mt-6 w-full">Sign in</Button><p className="mt-5 text-center text-sm text-slate-500">New here? <Link className="font-semibold text-blue-700" to="/register">Create an account</Link></p><p className="mt-4 rounded-lg bg-amber-50 p-3 text-xs leading-5 text-amber-800">Demo login only: authentication is not connected to Spring Boot yet. Remove the role selector when real login is implemented.</p></form></section>
}