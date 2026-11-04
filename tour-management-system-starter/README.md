# TourEase – Tour Package Management System

React SPA frontend scaffold built with JavaScript, Vite, Tailwind CSS v4 and React Router.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```
Open the URL printed by Vite (normally http://localhost:5173).

## Demo role navigation
Open `/login` and choose Customer, Travel Admin or Super Admin. This is a temporary frontend-only demo login so you can verify protected routes and layouts. It is **not real authentication**. Replace it with your Spring Boot login API before deployment.

## Build
```bash
npm run build
npm run preview
```

## Structure
- `pages/`: route-level screens
- `layouts/`: public and role-specific application shells
- `components/common/`: reusable UI components
- `features/`: feature-specific API services, hooks and components
- `routes/`: application routing and route protection
- `context/`: global authentication state
- `services/`: shared Axios client and endpoint constants

## Backend integration
Set `VITE_API_BASE_URL` in `.env` to your Spring Boot API base URL. Implement feature service functions in `src/features/*` and call them from pages/hooks. Never rely on frontend route guards as backend authorization; secure every protected endpoint in Spring Security.
