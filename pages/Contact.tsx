
import React, { useState } from 'react';
import { Send, Mail, Globe, MessageSquare, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    project: 'Development',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry received. A Solution Architect will contact you within 24 hours.");
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/5">
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-8">Scale your <br /><span className="text-indigo-500">capability.</span></h1>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Book a session with a solution architect to discuss your roadmap, tech stack, and resource needs.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500"><Clock size={20} /></div>
                <div>
                  <h4 className="text-white font-bold">Rapid Turnaround</h4>
                  <p className="text-slate-500 text-sm">Experts onboarded in under 72 hours.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500"><Globe size={20} /></div>
                <div>
                  <h4 className="text-white font-bold">Global Presence</h4>
                  <p className="text-slate-500 text-sm">Teams across all timezones.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="glass p-12 rounded-[3rem] border-slate-800">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Name</label>
                    <input 
                      type="text" required
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Work Email</label>
                    <input 
                      type="email" required
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Organization</label>
                    <input 
                      type="text" required
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors"
                      placeholder="TechScale Inc."
                      value={formData.org}
                      onChange={e => setFormData({...formData, org: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Primary Need</label>
                    <select 
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 appearance-none"
                      value={formData.project}
                      onChange={e => setFormData({...formData, project: e.target.value})}
                    >
                      <option>Development</option>
                      <option>Software QA</option>
                      <option>Automation</option>
                      <option>Cloud / DevOps</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Project Details</label>
                  <textarea 
                    rows={4} required
                    className="w-full bg-slate-950 border border-slate-800 rounded-3xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Briefly describe your requirements..."
                    value={formData.details}
                    onChange={e => setFormData({...formData, details: e.target.value})}
                  />
                </div>

                <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-lg rounded-2xl flex items-center justify-center group transition-all">
                  Book My Consultation <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
