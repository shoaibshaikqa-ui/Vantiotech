
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Globe, Zap, Coffee, ChevronRight, Star } from 'lucide-react';

const Careers: React.FC = () => {
  const benefits = [
    { title: "High-Impact Projects", desc: "Work with fast-growing startups and enterprises.", icon: <Star /> },
    { title: "Remote Autonomy", desc: "Full control over your schedule and workspace.", icon: <Globe /> },
    { title: "No Administrative Overhead", desc: "We handle sales, billing, and project specs.", icon: <Zap /> },
    { title: "Top-Tier Compensation", desc: "Market-leading rates for verified experts.", icon: <Award /> }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-black uppercase tracking-widest mb-6">
            Expert Intake Open
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8">Join the Network.</h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            VantioTech connects senior technical specialists with exclusive client opportunities. Do the work you love, without the hunt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {benefits.map((b, i) => (
            <div key={i} className="glass p-8 rounded-3xl border-slate-800 hover:-translate-y-2 transition-transform">
              <div className="text-indigo-500 mb-6">{b.icon}</div>
              <h4 className="text-white font-bold mb-2">{b.title}</h4>
              <p className="text-slate-500 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Who we are looking for:</h2>
          <div className="space-y-6">
            {[
              "Senior Automation Engineers (8+ years)",
              "Full-Stack Architects (React/Node/Go)",
              "Cloud Infrastructure Specialists (AWS/Azure)",
              "API Security & Penetration Testers"
            ].map((role, i) => (
              <Link 
                key={i} 
                to="/contact"
                className="glass p-8 rounded-2xl flex items-center justify-between border-slate-800 hover:border-indigo-500/50 cursor-pointer group transition-all"
              >
                <span className="text-xl font-bold text-white">{role}</span>
                <div className="p-3 bg-slate-900 rounded-full group-hover:bg-indigo-600 transition-colors">
                  <ChevronRight size={20} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-32 p-12 glass rounded-[3rem] border-indigo-500/20 text-center">
            <h3 className="text-3xl font-black text-white mb-6">Ready to apply?</h3>
            <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
              Our vetting process includes technical screening and a portfolio review. Join 200+ elite engineers.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-12 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl shadow-2xl transition-all"
            >
              Submit Expert Application
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
