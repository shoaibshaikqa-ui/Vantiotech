
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Briefcase, Zap, ShieldCheck, Quote } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="hero-gradient min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full mb-8">
              <span className="text-indigo-400 text-xs font-black uppercase tracking-widest">Enterprise-Grade Managed Network</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Elite Technical <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">Expertise on Demand.</span>
            </h1>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl leading-relaxed">
              Scale your product with a curated network of senior freelancers, managed by VantioTech. One contract, one point of contact, unlimited possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact" className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl transition-all shadow-2xl shadow-indigo-500/30 flex items-center justify-center">
                Book a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/how-we-work" className="px-10 py-5 bg-slate-900 border border-slate-800 text-white font-black rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center">
                Our Model
              </Link>
            </div>
            
            <div className="mt-16 flex items-center space-x-8 opacity-50 grayscale">
              <span className="text-slate-500 font-bold tracking-widest text-sm uppercase">Trusted By Leading</span>
              <div className="flex space-x-8 items-center text-white font-bold text-xl">
                <span>STARTUPS</span>
                <span>•</span>
                <span>SMES</span>
                <span>•</span>
                <span>ENTERPRISE</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative">
            <div className="glass p-8 rounded-[2.5rem] border-slate-800 relative z-20 overflow-hidden">
              <div className="space-y-6">
                {[
                  { label: "QA & Automation", val: "99% Success" },
                  { label: "Web Development", val: "150+ Projects" },
                  { label: "Cloud & DevOps", val: "24/7 Reliability" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800">
                    <span className="text-slate-400 font-bold">{stat.label}</span>
                    <span className="text-indigo-400 font-black">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* The Model Section */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Built for Accountability</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We bridge the gap between freelance flexibility and corporate reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-10 rounded-3xl border-slate-800 hover:border-indigo-500/30 transition-all">
              <Users className="text-indigo-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">Curated Specialists</h3>
              <p className="text-slate-400">Only the top 3% of freelancers make it into our network. You get senior experts, not generalists.</p>
            </div>
            <div className="glass p-10 rounded-3xl border-slate-800 hover:border-emerald-500/30 transition-all">
              <ShieldCheck className="text-emerald-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">Centralized QA</h3>
              <p className="text-slate-400">Our core team manages every project, ensuring strict quality standards and consistent communication.</p>
            </div>
            <div className="glass p-10 rounded-3xl border-slate-800 hover:border-indigo-500/30 transition-all">
              <Zap className="text-indigo-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">Single Accountability</h3>
              <p className="text-slate-400">VantioTech is your partner. We handle billing, legal, and project management so you can focus on your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-24 lg:py-32 border-y border-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-2/5 relative group">
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-indigo-500/30 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src="founder.jpg" 
                  alt="Shaik Shoaib - Founder and QA Specialist" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 object-cover"
                  onError={(e) => {
                    // If local file not found, use a professional placeholder that matches the style
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519085185753-6ce13be24782?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl -z-10"></div>
            </div>
            
            <div className="lg:w-3/5">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-[2px] w-12 bg-indigo-500"></div>
                <span className="text-indigo-400 font-black uppercase tracking-[0.3em] text-sm">Founder's Perspective</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Engineering <span className="text-indigo-500 italic">Trust</span> Through Quality.
              </h2>
              <div className="relative mb-10">
                <Quote className="absolute -top-8 -left-8 text-indigo-500/10 w-24 h-24 -z-10" />
                <p className="text-slate-300 text-xl leading-relaxed italic font-medium">
                  "At VantioTech, we don't just provide resources; we provide peace of mind. As a QA Specialist, I built this organization on the belief that software excellence is non-negotiable. Our managed network ensures that every line of code and every test case meets the highest industry standards."
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-white">Shaik Shoaib</h4>
                <p className="text-indigo-400 font-bold tracking-widest uppercase text-xs mt-1">Founder and QA Specialist</p>
                <div className="mt-8">
                  <a 
                    href="https://www.linkedin.com/in/shaik-shoaib-52915b288/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-400 hover:text-white transition-colors group"
                  >
                    <span className="border-b border-slate-800 group-hover:border-indigo-500 pb-1 text-sm font-bold">Connect on LinkedIn</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">Ready to Build?</h2>
          <p className="text-slate-400 text-xl mb-12">
            Schedule a session with a Solution Architect to discuss your requirements.
          </p>
          <Link to="/contact" className="inline-block px-12 py-6 bg-white text-slate-950 font-black text-xl rounded-2xl hover:scale-105 transition-transform shadow-2xl">
            Start Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
