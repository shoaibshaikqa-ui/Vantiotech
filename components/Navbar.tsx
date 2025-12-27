
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Academy', href: '/academy' },
    { label: 'Trading', href: '/trading' },
    { label: 'Join as Expert', href: '/careers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Shield className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-extrabold tracking-tighter text-white">
              VANTIOTECH
            </span>
          </Link>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive(link.href)
                      ? 'text-indigo-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-indigo-500/20"
              >
                Hire Experts
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden glass border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.href)
                    ? 'text-indigo-400 bg-slate-900'
                    : 'text-slate-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-center bg-indigo-600 text-white rounded-md text-base font-bold"
            >
              Hire Experts
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
