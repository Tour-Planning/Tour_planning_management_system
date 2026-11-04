import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import CustomerLayout from '../layouts/CustomerLayout'
import TravelAdminLayout from '../layouts/TravelAdminLayout'
import AdminLayout from '../layouts/AdminLayout'
import ProtectedRoute from './ProtectedRoute'
import Home from '../pages/public/Home'
import AboutUs from '../pages/public/AboutUs'
import Packages from '../pages/public/Packages'
import PackageDetails from '../pages/public/PackageDetails'
import Login from '../pages/public/Login'
import Register from '../pages/public/Register'
import Dashboard from '../pages/customer/Dashboard'
import MyBookings from '../pages/customer/MyBookings'
import BookingDetails from '../pages/customer/BookingDetails'
import Enquiries from '../pages/customer/Enquiries'
import CustomerProfile from '../pages/customer/Profile'
import AgentDashboard from '../pages/travelAdmin/Dashboard'
import MyPackages from '../pages/travelAdmin/MyPackages'
import AddPackage from '../pages/travelAdmin/AddPackage'
import AgentBookings from '../pages/travelAdmin/MyBookings'
import MyCustomers from '../pages/travelAdmin/MyCustomers'
import AgentProfile from '../pages/travelAdmin/Profile'
import AdminDashboard from '../pages/admin/Dashboard'
import ManagePackages from '../pages/admin/ManagePackages'
import ManageCustomers from '../pages/admin/ManageCustomers'
import ManageAgents from '../pages/admin/ManageTravelAgents'
import ManageBookings from '../pages/admin/ManageBookings'
import AdminProfile from '../pages/admin/Profile'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={['CUSTOMER']} />}>
        <Route path="/customer" element={<CustomerLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="bookings/:id" element={<BookingDetails />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="profile" element={<CustomerProfile />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRoles={['TRAVEL_ADMIN']} />}>
        <Route path="/travel-admin" element={<TravelAdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AgentDashboard />} />
          <Route path="packages" element={<MyPackages />} />
          <Route path="packages/add" element={<AddPackage />} />
          <Route path="customers" element={<MyCustomers />} />
          <Route path="bookings" element={<AgentBookings />} />
          <Route path="profile" element={<AgentProfile />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="packages" element={<ManagePackages />} />
          <Route path="customers" element={<ManageCustomers />} />
          <Route path="travel-agents" element={<ManageAgents />} />
          <Route path="bookings" element={<ManageBookings />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}