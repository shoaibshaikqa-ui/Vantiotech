
import React from 'react';
import { MessageSquare, UserPlus, Zap, BarChart3, ShieldCheck, HeartHandshake } from 'lucide-react';

const HowWeWork: React.FC = () => {
  const steps = [
    {
      title: "Discovery & Solution Design",
      desc: "We analyze your technical requirements and business goals to draft a tailored delivery strategy.",
      icon: <MessageSquare size={24} />
    },
    {
      title: "Expert Matching",
      desc: "We hand-pick specialists from our network who possess the specific domain expertise your project needs.",
      icon: <UserPlus size={24} />
    },
    {
      title: "Managed Onboarding",
      desc: "Our project managers integrate the experts into your workflow, ensuring all tools and access are aligned.",
      icon: <Zap size={24} />
    },
    {
      title: "Execution & Quality Gate",
      desc: "The experts build; VantioTech core team reviews. Every deliverable passes through our internal quality gate.",
      icon: <ShieldCheck size={24} />
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8">The VantioTech Model.</h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            We provide a transparent, managed pathway to the world's best technical talent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-800 -z-10"></div>
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="w-16 h-16 bg-slate-900 border-4 border-slate-950 rounded-full flex items-center justify-center text-indigo-500 mb-8 mx-auto group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xl">
                {step.icon}
              </div>
              <div className="text-center">
                <span className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-2 block">Step 0{i+1}</span>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black text-white mb-8">The Single Point of Contact.</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Managing freelancers can be chaotic. We solve that by providing a dedicated VantioTech Project Manager for every client engagement.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg"><BarChart3 size={20} /></div>
                <div>
                  <h4 className="text-white font-bold">Consolidated Reporting</h4>
                  <p className="text-slate-400 text-sm">One weekly report covering all specialists and deliverables.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-indigo-500/10 text-indigo-500 rounded-lg"><HeartHandshake size={20} /></div>
                <div>
                  <h4 className="text-white font-bold">Unified Accountability</h4>
                  <p className="text-slate-400 text-sm">One contract covers the whole network. We handle the risk.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="glass aspect-video rounded-[3rem] border-slate-800 flex items-center justify-center">
              <div className="text-center">
                 <div className="text-indigo-500 font-black text-8xl opacity-10 uppercase tracking-tighter select-none">MANAGED</div>
                 <p className="text-slate-500 font-bold uppercase tracking-widest">Expert Network Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
