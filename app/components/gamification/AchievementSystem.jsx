"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, CheckCircle2, Zap, Search, MousePointer2 } from 'lucide-react';
import { useSound } from '../sound/SoundProvider';

const ACHIEVEMENTS = {
    EXPLORER: { id: 'explorer', title: 'Deep Explorer', desc: 'Scrolled to the very bottom.', icon: <MousePointer2 className="text-blue-500" /> },
    COMMANDER: { id: 'commander', title: 'Power User', desc: 'Opened the Command Palette.', icon: <Search className="text-red-500" /> },
    CONTACT: { id: 'contact', title: 'Curious Mind', desc: 'Starting a conversation?', icon: <Zap className="text-yellow-500" /> },
    VETERAN: { id: 'veteran', title: 'Dedicated Reader', desc: 'Spent significant time browsing.', icon: <CheckCircle2 className="text-green-500" /> }
};

export const AchievementSystem = () => {
    const [unlocked, setUnlocked] = useState([]);
    const [currentToast, setCurrentToast] = useState(null);
    const { isEnabled } = useSound();

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('achievements') || '[]');
        setUnlocked(saved);
    }, []);

    const unlock = (achievement) => {
        if (unlocked.includes(achievement.id)) return;

        const newUnlocked = [...unlocked, achievement.id];
        setUnlocked(newUnlocked);
        localStorage.setItem('achievements', JSON.stringify(newUnlocked));

        setCurrentToast(achievement);

        // Play achievement sound if enabled
        if (isEnabled && typeof window !== 'undefined') {
            try {
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.frequency.setValueAtTime(440, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1);
                gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.5);
            } catch (e) {
                console.warn("Audio context failed", e);
            }
        }

        setTimeout(() => setCurrentToast(null), 5000);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
                unlock(ACHIEVEMENTS.EXPLORER);
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                unlock(ACHIEVEMENTS.COMMANDER);
            }
        };

        // Tracker: Time on site (1 minute)
        const timer = setTimeout(() => unlock(ACHIEVEMENTS.VETERAN), 60000);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timer);
        };
    }, [unlocked, isEnabled]);

    return (
        <AnimatePresence>
            {currentToast && (
                <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 100, scale: 0.8 }}
                    className="fixed bottom-10 right-10 z-[200] flex items-center gap-4 bg-gray-900/95 backdrop-blur-2xl border border-red-500/30 p-5 rounded-3xl shadow-[0_20px_50px_rgba(255,0,0,0.15)] min-w-[300px]"
                >
                    <div className="p-4 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl shadow-lg">
                        <Trophy className="text-white w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-1">Achievement Unlocked</p>
                        <h4 className="text-white font-extrabold text-lg leading-none mb-1">{currentToast.title}</h4>
                        <p className="text-gray-400 text-xs font-medium">{currentToast.desc}</p>
                    </div>
                    <div className="absolute top-4 right-4 opacity-10 scale-150 grayscale rotate-12">
                        {currentToast.icon}
                    </div>

                    {/* Progress bar for auto-dismiss */}
                    <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: 0 }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="absolute bottom-0 left-0 h-1 bg-red-600/50 rounded-full"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
