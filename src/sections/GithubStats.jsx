import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, Star, Folder, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { githubStats } from '../data/portfolioData';

export function GithubStats() {
  // Generate a mock contribution matrix grid (52 weeks x 7 days)
  const weeks = Array.from({ length: 28 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const val = Math.random();
      if (val > 0.8) return 'bg-cyan-400 shadow-[0_0_8px_#00f0ff]';
      if (val > 0.6) return 'bg-cyan-600';
      if (val > 0.35) return 'bg-cyan-950/80';
      return 'bg-slate-900';
    })
  );

  return (
    <section className="relative py-24 bg-[#0b1120] text-white overflow-hidden">
      <div className="aurora-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaGithub className="w-3.5 h-3.5 text-cyan-400" />
            <span>OPEN SOURCE METRICS</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold text-white text-gradient mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            GitHub Activity & Statistics
          </motion.h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Consistent open-source contributions, code commits, and repository metrics.
          </p>
        </div>

        {/* Stats Grid Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Commits', value: githubStats.totalCommits, icon: GitCommit, color: 'text-cyan-400' },
            { label: 'Pull Requests', value: githubStats.pullRequests, icon: GitPullRequest, color: 'text-purple-400' },
            { label: 'Repositories', value: githubStats.repositories, icon: Folder, color: 'text-pink-400' },
            { label: 'Stars Earned', value: githubStats.starsEarned, icon: Star, color: 'text-amber-400' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 text-center hover:border-cyan-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-3">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-xs font-mono text-slate-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Simulated Contribution Heatmap Matrix */}
        <motion.div
          className="glass-card p-6 md:p-8 rounded-2xl overflow-x-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-mono font-bold text-slate-200">
                2,480 Contributions in the Last Year
              </span>
            </div>
            <a
              href="https://github.com/hidayathullah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-400 hover:underline flex items-center space-x-1"
            >
              <span>@hidayathullah on GitHub</span>
            </a>
          </div>

          {/* Matrix Grid */}
          <div className="flex space-x-1.5 justify-center min-w-[600px] overflow-x-auto py-2">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col space-y-1.5">
                {week.map((cellClass, cIdx) => (
                  <div
                    key={cIdx}
                    className={`w-3 h-3 rounded-xs border border-slate-950 ${cellClass}`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end space-x-2 text-[10px] font-mono text-slate-400 pt-4">
            <span>Less</span>
            <div className="w-2.5 h-2.5 rounded-xs bg-slate-900" />
            <div className="w-2.5 h-2.5 rounded-xs bg-cyan-950" />
            <div className="w-2.5 h-2.5 rounded-xs bg-cyan-600" />
            <div className="w-2.5 h-2.5 rounded-xs bg-cyan-400 shadow-[0_0_5px_#00f0ff]" />
            <span>More</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
