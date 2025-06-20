import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Compass,
  Search,
  Menu,
  X,
  User,
  LogOut,
  MapPin,
  Briefcase,
  BookOpen,
  MessageSquare,
  GraduationCap
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  // ✅ Correct logout and redirection
  const handleLogout = async () => {
    await logout(); // wait for logout process
    setShowUserMenu(false);
    navigate('/'); // redirect to homepage
  };

  const navLinks = [
    { name: 'Pathways', href: '/pathways', icon: MapPin },
    { name: 'Courses', href: '/courses', icon: GraduationCap },
    { name: 'Government Jobs', href: '/government-jobs', icon: Briefcase },
    { name: 'Roadmaps', href: '/roadmaps', icon: BookOpen },
    { name: 'Interview Prep', href: '/interview-prep', icon: MessageSquare },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg group-hover:shadow-lg transition-all duration-300">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              The Way
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-1 text-slate-700 hover:text-emerald-600 transition-colors duration-200 group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium text-sm">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-slate-100 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-slate-700">
                    {user?.name}
                  </span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors duration-200"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors duration-200 flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
              >
                Get Started
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-100">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
