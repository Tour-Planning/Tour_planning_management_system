import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import Button from './Button'

const linkClass = ({ isActive }) => `text-sm font-medium ${isActive ? 'text-blue-700' : 'text-slate-600 hover:text-blue-700'}`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="page-container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/packages" className={linkClass}>Packages</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login" className="btn-secondary">Sign in</Link>
          <Link to="/register" className="btn-primary">Sign up</Link>
        </div>
      </div>
    </header>
  )
}