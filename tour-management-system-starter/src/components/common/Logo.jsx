import { Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900">
      <span className="rounded-lg bg-blue-700 p-2 text-white"><Compass size={19} /></span>
      TourEase
    </Link>
  )
}