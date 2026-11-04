// Central place for backend endpoint paths. Update these to match your Spring Boot controllers.
const API_ENDPOINTS = {
  auth: { login: '/auth/login', register: '/auth/register' },
  packages: '/packages',
  bookings: '/bookings',
  customers: '/customers',
  travelAgents: '/travel-agents',
  enquiries: '/enquiries',
  payments: '/payments',
}
export default API_ENDPOINTS