// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Directory from './pages/Directory';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import About from './pages/About';
import Gallery from './pages/Gallery';
import ProminentAlumni from './pages/ProminentAlumni';
import NotFound from './pages/NotFound';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="w-screen h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/gallery" element={<Gallery />} />
            <Route path="/alumni/prominent-alumni" element={<ProminentAlumni />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
