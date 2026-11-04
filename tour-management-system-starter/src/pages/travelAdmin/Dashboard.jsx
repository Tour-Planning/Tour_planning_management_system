import PageHeading from '../../components/common/PageHeading'
import StatCard from '../../components/common/StatCard'
import { CalendarCheck, MapPin, Clock } from 'lucide-react'

export default function Page() {
  const stats = ['My packages', 'Total customers', 'Booking requests']
  const icons = [CalendarCheck, MapPin, Clock]
  return <div><PageHeading title="Travel Agent Dashboard" description="Overview of your packages and customers." /><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{stats.map((label, index) => <StatCard key={label} label={label} value="0" helper="Connect backend API to load data" icon={icons[index % icons.length]} />)}</div><div className="panel mt-6 p-6"><h2 className="font-semibold text-slate-900">Welcome to Travel Agent Dashboard</h2><p className="mt-2 text-sm text-slate-500">This section is ready for its module-specific UI and API integration.</p></div></div>
}
