export default function StatCard({ label, value, helper, icon: Icon }) {
  return (
    <div className="panel p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
          {helper && <p className="mt-1 text-xs text-slate-500">{helper}</p>}
        </div>
        {Icon && <span className="rounded-lg bg-blue-50 p-3 text-blue-700"><Icon size={20} /></span>}
      </div>
    </div>
  )
}