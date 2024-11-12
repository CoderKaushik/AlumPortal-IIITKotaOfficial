// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Directory from './pages/Directory';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import About from './pages/About';
import Gallery from './pages/Gallery';
import ProminentAlumni from './pages/ProminentAlumni';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import JobsPosting from './pages/JobsPosting';
import Loading from './pages/Loading';
import NotFound from './pages/NotFound';
import JobDetails from './pages/JobDetails';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
            <Route path="/alumni/gallery" element={<Gallery />} />
            <Route path="/alumni/prominent-alumni" element={<ProminentAlumni />} />
            <Route path="/alumni/job-postings" element={<JobsPosting />} />
            <Route path="/alumni/contact" element={<ContactUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/job/:title" element={<JobDetails />} />
            <Route path="/alumni/job-postings/:id" element={<JobDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
