
import React from 'react';
import { Link } from 'react-router-dom';
import { Bug, Settings, Globe, Cloud, Layout, CheckCircle, Search, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  const offerings = [
    {
      title: "Software Testing & QA",
      icon: <Bug size={32} />,
      desc: "Comprehensive manual and functional testing to ensure your product is bug-free and user-friendly.",
      accent: "text-red-400"
    },
    {
      title: "Automation (Web & Mobile)",
      icon: <Settings size={32} />,
      desc: "Custom-built test automation frameworks using Playwright, Appium, and Selenium for rapid regression testing.",
      accent: "text-indigo-400"
    },
    {
      title: "App Development",
      icon: <Globe size={32} />,
      desc: "Full-stack web and mobile application development using modern technologies like React, Node.js, and Flutter.",
      accent: "text-emerald-400"
    },
    {
      title: "API Testing & Integration",
      icon: <Search size={32} />,
      desc: "Ensuring your backend services are secure, reliable, and capable of handling high-volume traffic.",
      accent: "text-orange-400"
    },
    {
      title: "Cloud & DevOps Support",
      icon: <Cloud size={32} />,
      desc: "Infrastructure as Code (IaC), CI/CD pipelines, and cloud optimization to streamline your release cycles.",
      accent: "text-blue-400"
    },
    {
      title: "QA Consulting & Process",
      icon: <Layout size={32} />,
      desc: "Strategic advisory to help you implement testing cultures, select toolsets, and optimize delivery workflows.",
      accent: "text-purple-400"
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8">Specialized Solutions.</h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            We deliver results across the entire software lifecycle by matching your project with top-tier specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((service, i) => (
            <div key={i} className="glass p-10 rounded-[2rem] border-slate-800 hover:border-slate-600 transition-all flex flex-col h-full group">
              <div className={`${service.accent} mb-8 p-4 bg-slate-900 w-fit rounded-2xl group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-8 flex-grow">{service.desc}</p>
              <div className="pt-6 border-t border-slate-800">
                <Link to="/contact" className="text-white font-bold inline-flex items-center group-hover:text-indigo-400 transition-colors">
                  Learn more <Rocket size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Value Prop */}
        <div className="mt-32 p-12 glass rounded-[3rem] border-indigo-500/20 bg-indigo-500/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">Why our model works.</h2>
              <ul className="space-y-4">
                {[
                  "No bench costs – You only pay for active expertise.",
                  "Zero management overhead – We handle the specialists.",
                  "Rigorous vetting – Only senior experts join our network.",
                  "Elastic scaling – Add or remove resources in days, not months."
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <CheckCircle className="text-emerald-500 mr-3 shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-indigo-500 mb-4 tracking-tighter">40%</div>
              <p className="text-slate-400 text-lg uppercase font-bold tracking-widest">Faster Time-to-Market</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
