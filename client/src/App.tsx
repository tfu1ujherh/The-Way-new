import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import PathwaysPage from './pages/PathwaysPage';
import GovernmentJobsPage from './pages/GovernmentJobsPage';
import RoadmapsPage from './pages/RoadmapsPage';
import InterviewPrepPage from './pages/InterviewPrepPage';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AIChat from './components/AIChat';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
          <Navbar />

          {/* ✅ Added padding-top to avoid overlap with fixed navbar */}
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/pathways" element={
                <ProtectedRoute>
                  <PathwaysPage />
                </ProtectedRoute>
              } />
              <Route path="/courses" element={
                <ProtectedRoute>
                  <CoursesPage />
                </ProtectedRoute>
              } />
              <Route path="/government-jobs" element={
                <ProtectedRoute>
                  <GovernmentJobsPage />
                </ProtectedRoute>
              } />
              <Route path="/roadmaps" element={
                <ProtectedRoute>
                  <RoadmapsPage />
                </ProtectedRoute>
              } />
              <Route path="/interview-prep" element={
                <ProtectedRoute>
                  <InterviewPrepPage />
                </ProtectedRoute>
              } />
            </Routes>
          </main>

          {/* AI Chat - Only for authenticated users */}
          <ProtectedRoute>
            <AIChat />
          </ProtectedRoute>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
