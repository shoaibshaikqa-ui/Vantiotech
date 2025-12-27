
import React from 'react';
import { ShieldAlert, TrendingUp, Target, Brain, Scale, ShieldCheck, AlertTriangle } from 'lucide-react';

const Trading: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">Risk-Managed <br /><span className="text-purple-500">Trading Education</span></h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            Trading is 10% strategy and 90% psychology and risk management. We teach you how to survive before you learn how to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="glass p-10 rounded-3xl border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Scale className="mr-4 text-purple-500" /> Our Philosophy
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Preservation First</h4>
                  <p className="text-slate-400">Capital preservation is the single most important rule of longevity in the markets.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Brain size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Psychological Edge</h4>
                  <p className="text-slate-400">Understand the cognitive biases that lead to poor decision-making under pressure.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Process Over Outcome</h4>
                  <p className="text-slate-400">Winning trades can be bad trades if the process was flawed. We focus on mechanical execution.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-4">Educational Paths</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-purple-500/50 cursor-pointer transition-all">
                  <span className="text-slate-200 font-semibold">Risk Management Frameworks</span>
                  <TrendingUp size={18} className="text-purple-500" />
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-purple-500/50 cursor-pointer transition-all">
                  <span className="text-slate-200 font-semibold">Price Action Analysis</span>
                  <TrendingUp size={18} className="text-purple-500" />
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-purple-500/50 cursor-pointer transition-all">
                  <span className="text-slate-200 font-semibold">Macroeconomics & Sentiment</span>
                  <TrendingUp size={18} className="text-purple-500" />
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border-red-500/20 bg-red-500/5">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="text-red-500" size={24} />
                <h4 className="text-xl font-bold text-white">Strictly Educational</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                VantioTech provides purely educational content. We do not offer financial advice, signal services, or wealth management. 
                Trading involves substantial risk of loss and is not suitable for everyone. Always perform your own due diligence.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
           <button className="px-12 py-5 bg-purple-600 hover:bg-purple-500 text-white font-black text-lg rounded-full shadow-2xl shadow-purple-500/20 transition-all">
             Start Learning Safely
           </button>
        </div>
      </div>
    </div>
  );
};

export default Trading;
