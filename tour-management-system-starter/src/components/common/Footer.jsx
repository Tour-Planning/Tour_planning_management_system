export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="page-container flex flex-col justify-between gap-2 py-6 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} TourEase. Tour Package Management System.</p>
        <p>Plan your journey with confidence.</p>
      </div>
    </footer>
  )
}