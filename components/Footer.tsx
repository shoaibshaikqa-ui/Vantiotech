
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-indigo-500" />
              <span className="text-2xl font-black text-white">VANTIOTECH</span>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm">
              Premium expert network delivery. We manage the best technical specialists so you don't have to.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-3 text-slate-400 text-sm font-semibold">
              <li><Link to="/services" className="hover:text-white transition-colors">Software QA</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Test Automation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">App Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cloud/DevOps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-xs">VantioTech</h4>
            <ul className="space-y-3 text-slate-400 text-sm font-semibold">
              <li><Link to="/how-we-work" className="hover:text-white transition-colors">How We Work</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Expert Network</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-3 text-slate-400 text-sm font-semibold">
              <li><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">© {new Date().getFullYear()} VantioTech Solutions Ltd.</p>
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/shaik-shoaib-52915b288/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
