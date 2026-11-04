import { Bell, LogOut } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import Button from './Button'

export default function DashboardHeader({ title }) {
  const { user, logout } = useAuth()
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 md:px-8">
      <h2 className="font-semibold text-slate-800">{title}</h2>
      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Notifications"><Bell size={18} /></button>
        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-slate-800">{user?.name || 'User'}</p>
          <p className="text-xs text-slate-500">{user?.role?.replace('_', ' ')}</p>
        </div>
        <Button variant="secondary" className="gap-2 !px-3 !py-2" onClick={logout}><LogOut size={16} /><span className="hidden sm:inline">Logout</span></Button>
      </div>
    </header>
  )
}