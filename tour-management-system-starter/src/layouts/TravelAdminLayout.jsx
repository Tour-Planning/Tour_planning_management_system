import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'
import DashboardHeader from '../components/common/DashboardHeader'

const items = [
  { label: 'Dashboard', to: '/travel-admin/dashboard', icon: 'dashboard' },
  { label: 'My Packages', to: '/travel-admin/packages', icon: 'packages' },
  { label: 'Add Package', to: '/travel-admin/packages/add', icon: 'add' },
  { label: 'My Customers', to: '/travel-admin/customers', icon: 'customers' },
  { label: 'My Bookings', to: '/travel-admin/bookings', icon: 'bookings' },
  { label: 'My Profile', to: '/travel-admin/profile', icon: 'profile' },
]
export default function TravelAdminLayout() {
  return <div className="min-h-screen bg-slate-50 md:flex"><Sidebar title="Travel agent menu" items={items} /><div className="min-w-0 flex-1"><DashboardHeader title="Travel Agent Portal" /><main className="p-5 md:p-8"><Outlet /></main></div></div>
}