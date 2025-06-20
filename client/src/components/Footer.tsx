import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  MapPin, 
  Briefcase, 
  BookOpen, 
  MessageSquare, 
  Mail, 
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  GraduationCap,
  Users,
  Target,
  Heart,
  Globe,
  Shield
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/', icon: Compass },
    { name: 'Pathways', href: '/pathways', icon: MapPin },
    { name: 'Courses', href: '/courses', icon: GraduationCap },
    { name: 'Government Jobs', href: '/government-jobs', icon: Briefcase },
    { name: 'Roadmaps', href: '/roadmaps', icon: BookOpen },
    { name: 'Interview Prep', href: '/interview-prep', icon: MessageSquare },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  const features = [
    { name: 'AI-Powered Guidance', icon: MessageSquare },
    { name: 'Expert Counselors', icon: Users },
    { name: 'Secure Platform', icon: Shield },
    { name: 'Global Reach', icon: Globe }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-purple-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">The Way</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Empowering students to make informed career decisions through comprehensive guidance, 
              AI support, and personalized pathways to success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-slate-800 rounded-lg hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 group"
                    >
                      <Icon className="w-4 h-4 group-hover:text-emerald-400 transition-colors duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm">Email</p>
                  <p className="text-white">support@theway.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm">Phone</p>
                  <p className="text-white">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center space-x-3 text-slate-300">
                  <Icon className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">{feature.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 The Way. All rights reserved. Built with <Heart className="w-4 h-4 inline text-red-500" /> for students worldwide.
            </p>
            <div className="flex items-center space-x-4 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>50,000+ Students Guided</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>95% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;