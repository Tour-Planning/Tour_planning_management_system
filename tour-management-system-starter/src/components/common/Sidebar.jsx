import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Package, Users, CalendarCheck, UserCircle, PlusCircle } from 'lucide-react'
import Logo from './Logo'

const icons = { dashboard: LayoutDashboard, packages: Package, customers: Users, bookings: CalendarCheck, profile: UserCircle, add: PlusCircle }

export default function Sidebar({ title, items }) {
  return (
    <aside className="flex w-full shrink-0 flex-col border-r border-slate-200 bg-white md:min-h-screen md:w-64">
      <div className="hidden h-16 items-center border-b border-slate-200 px-5 md:flex"><Logo /></div>
      <div className="px-5 pb-2 pt-5 text-xs font-semibold uppercase tracking-wider text-slate-400">{title}</div>
      <nav className="flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col">
        {items.map((item) => {
          const Icon = icons[item.icon] || LayoutDashboard
          return (
            <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) =>
              `flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`
            }>
              <Icon size={18} />{item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}