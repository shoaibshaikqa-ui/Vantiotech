
import React from 'react';
import { GraduationCap, Award, BookOpen, Monitor, Code, Star, Clock, BarChart } from 'lucide-react';

const Academy: React.FC = () => {
  const courses = [
    {
      title: "QA Automation Masterclass",
      level: "Professional",
      duration: "12 Weeks",
      features: ["Selenium & Playwright", "API Automation", "CI/CD Integration", "Live Projects"],
      icon: <Code size={24} className="text-cyan-400" />
    },
    {
      title: "Full-Stack Development",
      level: "Intermediate",
      duration: "24 Weeks",
      features: ["MERN Stack", "TypeScript", "Microservices", "System Design"],
      icon: <Monitor size={24} className="text-indigo-400" />
    },
    {
      title: "DevOps & Cloud Engineering",
      level: "Advanced",
      duration: "16 Weeks",
      features: ["AWS/Azure", "Docker & K8s", "Infrastructure as Code", "Terraform"],
      icon: <Award size={24} className="text-emerald-400" />
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-bold mb-6">
              VANTIOTECH ACADEMY
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">Bridge the Skill Gap</h1>
            <p className="text-slate-400 text-xl leading-relaxed mb-8">
              Practical, project-based learning led by senior industry professionals. We don't just teach tools; we build careers.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 text-slate-300">
                <Star size={20} className="text-yellow-500" />
                <span>Industry Certified</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <BookOpen size={20} className="text-indigo-400" />
                <span>LMS Access</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Clock size={20} className="text-cyan-400" />
                <span>Flexible Schedules</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <BarChart size={20} className="text-purple-400" />
                <span>Placement Support</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
             <div className="glass rounded-[2rem] p-1 border-slate-700/50">
               <img src="https://picsum.photos/800/600?grayscale" alt="Learning" className="rounded-[1.9rem] opacity-70 grayscale" />
             </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-12 text-center">Upcoming Cohorts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center justify-between mb-6">
                {course.icon}
                <span className="text-xs font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-400 uppercase tracking-widest">
                  {course.level}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
              <p className="text-slate-500 text-sm mb-6 flex items-center">
                <Clock size={14} className="mr-2" /> {course.duration}
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {course.features.map(f => (
                  <li key={f} className="flex items-center text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academy;
