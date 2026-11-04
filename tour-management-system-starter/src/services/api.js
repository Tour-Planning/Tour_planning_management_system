import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1',
  headers: { 'Content-Type': 'application/json' },
})

// Attach the access token when backend authentication is integrated.
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('accessToken')
  if (token && token !== 'demo-token') config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api