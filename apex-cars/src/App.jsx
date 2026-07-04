import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import Service from './pages/Service';
import Warranty from './pages/Warranty';

// Tijdelijke simpele Layout wrapper
const SimpleLayout = ({ children }) => (
  <div className="min-h-screen bg-obsidian text-alabaster font-body">
    <nav className="p-6 border-b border-steel flex gap-6 bg-card">
      <Link to="/service" className="text-ochre font-bold hover:underline">Service</Link>
      <Link to="/warranty" className="text-ochre font-bold hover:underline">Warranty</Link>
      <Link to="/login" className="text-foreground/70 hover:text-alabaster ml-auto">Log in</Link>
    </nav>
    <main>{children}</main>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/service" element={<SimpleLayout><Service /></SimpleLayout>} />
        <Route path="/warranty" element={<SimpleLayout><Warranty /></SimpleLayout>} />
        <Route path="*" element={<SimpleLayout><Service /></SimpleLayout>} />
      </Routes>
    </Router>
  );
}