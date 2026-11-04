import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem('demoUser')) || null
    } catch {
      return null
    }
  })

  // Demo-only login. Replace this with your Spring Boot authentication API.
  const loginAs = (role) => {
    const demoUser = { name: role === 'ADMIN' ? 'Super Admin' : role === 'TRAVEL_ADMIN' ? 'Travel Agent' : 'Customer', role }
    sessionStorage.setItem('demoUser', JSON.stringify(demoUser))
    sessionStorage.setItem('accessToken', 'demo-token')
    sessionStorage.setItem('role', role)
    setUser(demoUser)
  }

  const logout = () => {
    sessionStorage.removeItem('demoUser')
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('role')
    setUser(null)
  }

  const value = useMemo(() => ({ user, loginAs, logout, isAuthenticated: Boolean(user) }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}