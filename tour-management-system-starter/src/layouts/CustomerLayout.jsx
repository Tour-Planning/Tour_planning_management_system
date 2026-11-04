import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'
import DashboardHeader from '../components/common/DashboardHeader'

const items = [
  { label: 'Dashboard', to: '/customer/dashboard', icon: 'dashboard' },
  { label: 'My Bookings', to: '/customer/bookings', icon: 'bookings' },
  { label: 'Enquiries', to: '/customer/enquiries', icon: 'customers' },
  { label: 'My Profile', to: '/customer/profile', icon: 'profile' },
]
export default function CustomerLayout() {
  return <div className="min-h-screen bg-slate-50 md:flex"><Sidebar title="Customer menu" items={items} /><div className="min-w-0 flex-1"><DashboardHeader title="Customer Portal" /><main className="p-5 md:p-8"><Outlet /></main></div></div>
}