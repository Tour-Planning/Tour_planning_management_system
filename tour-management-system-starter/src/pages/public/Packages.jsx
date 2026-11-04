import { Link } from 'react-router-dom'
import PageHeading from '../../components/common/PageHeading'

const samplePackages = [
  { id: 1, name: 'Mountain Escape', place: 'Himachal Pradesh', days: '5 Days / 4 Nights', price: '₹12,999' },
  { id: 2, name: 'Beach Holiday', place: 'Goa', days: '4 Days / 3 Nights', price: '₹9,499' },
  { id: 3, name: 'Heritage Journey', place: 'Jaipur', days: '3 Days / 2 Nights', price: '₹7,999' },
]
export default function Packages() {
  return <section className="page-container py-10"><PageHeading title="Explore Tour Packages" description="Discover destinations and find your next trip." /><div className="grid gap-5 md:grid-cols-3">{samplePackages.map((item) => <article className="panel overflow-hidden" key={item.id}><div className="flex h-36 items-center justify-center bg-blue-50 text-blue-700"><span className="text-sm font-semibold">Destination image</span></div><div className="p-5"><p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{item.place}</p><h2 className="mt-2 text-lg font-bold">{item.name}</h2><p className="mt-1 text-sm text-slate-500">{item.days}</p><div className="mt-5 flex items-center justify-between"><strong>{item.price}</strong><Link className="text-sm font-semibold text-blue-700 hover:underline" to={`/packages/${item.id}`}>View details</Link></div></div></article>)}</div></section>
}