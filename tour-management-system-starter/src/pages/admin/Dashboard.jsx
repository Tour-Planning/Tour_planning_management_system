import PageHeading from '../../components/common/PageHeading'
import StatCard from '../../components/common/StatCard'
import { CalendarCheck, MapPin, Clock } from 'lucide-react'

export default function Page() {
  const stats = ['Total customers', 'Travel agents', 'Total bookings']
  const icons = [CalendarCheck, MapPin, Clock]
  return <div><PageHeading title="Super Admin Dashboard" description="Monitor the complete tour management platform." /><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{stats.map((label, index) => <StatCard key={label} label={label} value="0" helper="Connect backend API to load data" icon={icons[index % icons.length]} />)}</div><div className="panel mt-6 p-6"><h2 className="font-semibold text-slate-900">Welcome to Super Admin Dashboard</h2><p className="mt-2 text-sm text-slate-500">This section is ready for its module-specific UI and API integration.</p></div></div>
}
