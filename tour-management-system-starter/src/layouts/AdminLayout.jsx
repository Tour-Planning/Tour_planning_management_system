import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'
import DashboardHeader from '../components/common/DashboardHeader'

const items = [
  { label: 'Dashboard', to: '/admin/dashboard', icon: 'dashboard' },
  { label: 'Manage Packages', to: '/admin/packages', icon: 'packages' },
  { label: 'Customers', to: '/admin/customers', icon: 'customers' },
  { label: 'Travel Agents', to: '/admin/travel-agents', icon: 'customers' },
  { label: 'Bookings', to: '/admin/bookings', icon: 'bookings' },
  { label: 'My Profile', to: '/admin/profile', icon: 'profile' },
]
export default function AdminLayout() {
  return <div className="min-h-screen bg-slate-50 md:flex"><Sidebar title="Administration" items={items} /><div className="min-w-0 flex-1"><DashboardHeader title="Super Admin Portal" /><main className="p-5 md:p-8"><Outlet /></main></div></div>
}