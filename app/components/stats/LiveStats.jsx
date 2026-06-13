"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Code2, Trophy, Star, Activity } from 'lucide-react';
import { useSound } from '../sound/SoundProvider';

export const LiveStats = () => {
    const [stats, setStats] = useState({
        github: { repos: 0, stars: 0 },
        leetcode: { totalSolved: 0, mediumSolved: 0, hardSolved: 0 },
        loading: true
    });
    const { playHover } = useSound();

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch GitHub stats
                const githubRes = await fetch('https://api.github.com/users/Amitaarav');
                const githubData = await githubRes.json();

                const reposRes = await fetch('https://api.github.com/users/Amitaarav/repos?per_page=100');
                const reposData = await reposRes.json();
                const stars = Array.isArray(reposData) ? reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0) : 0;

                // Fetch LeetCode stats
                const leetcodeRes = await fetch('/api/leetcode');
                const leetcodeData = await leetcodeRes.json();

                setStats({
                    github: {
                        repos: githubData.public_repos || 0,
                        stars: stars || 0
                    },
                    leetcode: {
                        totalSolved: leetcodeData.totalSolved || 0,
                        mediumSolved: leetcodeData.mediumSolved || 0,
                        hardSolved: leetcodeData.hardSolved || 0
                    },
                    loading: false
                });
            } catch (error) {
                console.error("Error fetching stats:", error);
                setStats(prev => ({ ...prev, loading: false }));
            }
        };

        fetchStats();
    }, []);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <span className="w-8 h-[1px] bg-red-600" />
                            <span className="text-red-500 font-mono tracking-widest text-xs uppercase">Real-time Metrics</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-2xl md:text-3xl font-black text-white"
                        >
                            STATS <span className="text-red-600">.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 text-sm max-w-xs text-right"
                    >
                        Fetched live from GitHub and LeetCode APIs to show current progress and community impact.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard
                        title="Open Source"
                        value={stats.github.repos}
                        icon={<Github size={24} />}
                        label="Repositories"
                        loading={stats.loading}
                        onHover={playHover}
                    />
                    <StatCard
                        title="DSA Problems"
                        value={stats.leetcode.totalSolved}
                        icon={<Code2 size={24} />}
                        label="Solved on LeetCode"
                        loading={stats.loading}
                        color="text-green-500"
                        onHover={playHover}
                    />
                    <StatCard
                        title="Hard & Medium"
                        value={stats.leetcode.mediumSolved + stats.leetcode.hardSolved}
                        icon={<Trophy size={24} />}
                        label="High Complexity"
                        loading={stats.loading}
                        color="text-red-500"
                        onHover={playHover}
                    />
                    <StatCard
                        title="Stars Earned"
                        value={stats.github.stars}
                        icon={<Star size={24} />}
                        label="Project Stargazers"
                        loading={stats.loading}
                        color="text-yellow-500"
                        onHover={playHover}
                    />
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ title, value, icon, label, loading, color = "text-red-500", onHover }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10, scale: 1.02 }}
        onMouseEnter={onHover}
        className="flex flex-col items-center text-center gap-4 group transition-all duration-500"
    >
        <div className={`p-4 rounded-2xl bg-black/40 border border-white/5 group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all duration-500 ${color}`}>
            {icon}
        </div>
        <div className="space-y-1">
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider">{title}</h3>
            <div className="text-4xl font-black text-white tracking-tighter">
                {loading ? (
                    <div className="h-12 w-20 bg-white/5 animate-pulse rounded-xl mx-auto" />
                ) : (
                    value
                )}
            </div>
            <p className="text-md text-gray-500 font-medium">{label}</p>
        </div>
    </motion.div>
);
