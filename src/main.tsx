import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'

import Layout from '@/components/Layout';
import Dashboard from '@/components/Dashboard';
import Signin from '@/components/Signin';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="signin" element={<Signin />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)


