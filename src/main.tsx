import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'

import Layout from '@/components/Main';
import Dashboard from '@/components/pages/Dashboard';

import { ClerkProvider } from '@clerk/clerk-react';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY){
  throw new Error('Missing Publishable Clerk Key');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="dashboard" element={<Dashboard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
)


