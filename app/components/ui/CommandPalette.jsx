"use client";

import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Briefcase, Code, Mail, User, FileText, Github, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const CommandPalette = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const runCommand = (command) => {
        setOpen(false);
        command();
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                    />
                    <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[20vh] px-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="w-full max-w-2xl bg-gray-900 border border-red-900/50 rounded-xl shadow-2xl overflow-hidden pointer-events-auto"
                        >
                            <Command className="w-full">
                                <div className="flex items-center border-b border-red-900/30 px-4">
                                    <Search className="w-5 h-5 text-gray-400 mr-2" />
                                    <Command.Input
                                        autoFocus
                                        placeholder="Type a command or search..."
                                        className="w-full bg-transparent py-4 text-gray-100 outline-none placeholder:text-gray-500"
                                    />
                                    <div className="hidden sm:flex items-center gap-1 ml-2 px-2 py-1 rounded bg-gray-800 border border-gray-700 text-[10px] text-gray-400">
                                        <span className="font-sans">ESC</span>
                                    </div>
                                </div>

                                <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-transparent">
                                    <Command.Empty className="py-6 text-center text-sm text-gray-500">
                                        No results found.
                                    </Command.Empty>

                                    <Command.Group heading="Navigation" className="px-2 py-2 text-[10px] font-semibold text-red-500 uppercase tracking-wider">
                                        <Item onSelect={() => runCommand(() => { window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); })}>
                                            <Home className="w-4 h-4 mr-2" />
                                            <span>Home</span>
                                        </Item>
                                        <Item onSelect={() => runCommand(() => window.location.hash = 'services')}>
                                            <Briefcase className="w-4 h-4 mr-2" />
                                            <span>Services</span>
                                        </Item>
                                        <Item onSelect={() => runCommand(() => window.location.hash = 'experience')}>
                                            <User className="w-4 h-4 mr-2" />
                                            <span>Experience</span>
                                        </Item>
                                        <Item onSelect={() => runCommand(() => window.location.hash = 'projects')}>
                                            <Code className="w-4 h-4 mr-2" />
                                            <span>Projects</span>
                                        </Item>
                                        <Item onSelect={() => runCommand(() => window.location.hash = 'skills')}>
                                            <Code className="w-4 h-4 mr-2" />
                                            <span>Skills</span>
                                        </Item>
                                        <Item onSelect={() => runCommand(() => window.location.hash = 'contacts')}>
                                            <Mail className="w-4 h-4 mr-2" />
                                            <span>Contact</span>
                                        </Item>
                                    </Command.Group>

                                    <Command.Group heading="Actions" className="mt-2 px-2 py-2 text-[10px] font-semibold text-red-500 uppercase tracking-wider">
                                        <Item onSelect={() => runCommand(() => window.open("https://drive.google.com/file/d/1TfBWWerakNOgpbR3HF2sknR65U2Enc5Q/view?usp=sharing"))}>
                                            <FileText className="w-4 h-4 mr-2" />
                                            <span>Download Resume</span>
                                        </Item>
                                        <Item onSelect={() => runCommand(() => window.open("https://github.com/Amitaarav"))}>
                                            <Github className="w-4 h-4 mr-2" />
                                            <span>Go to GitHub</span>
                                        </Item>
                                    </Command.Group>
                                </Command.List>

                                <div className="border-t border-red-900/30 p-2 flex items-center justify-between text-[10px] text-gray-500 bg-black/20">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center gap-1"><kbd className="bg-gray-800 px-1 rounded">↑↓</kbd> Navigate</span>
                                        <span className="flex items-center gap-1"><kbd className="bg-gray-800 px-1 rounded">Enter</kbd> Select</span>
                                    </div>
                                    <span className="italic">Pro Tip: Use Ctrl+K to open anytime</span>
                                </div>
                            </Command>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

const Item = ({ children, onSelect }) => (
    <Command.Item
        onSelect={onSelect}
        className="flex items-center px-4 py-3 rounded-lg text-gray-300 cursor-pointer data-[selected='true']:bg-red-900/20 data-[selected='true']:text-white data-[selected='true']:outline-none transition-colors"
    >
        {children}
    </Command.Item>
);
