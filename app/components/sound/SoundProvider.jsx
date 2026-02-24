"use client";

import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

const SoundContext = createContext({
    isEnabled: false,
    toggleSound: () => { },
    playHover: () => { },
    playClick: () => { },
});

export const useSound = () => useContext(SoundContext);

export const SoundProvider = ({ children }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const audioCtxRef = useRef(null);

    useEffect(() => {
        const saved = localStorage.getItem("sound-enabled");
        if (saved === "true") setIsEnabled(true);
    }, []);

    const toggleSound = () => {
        const newState = !isEnabled;
        setIsEnabled(newState);
        localStorage.setItem("sound-enabled", String(newState));
    };

    const initAudio = useCallback(() => {
        if (!audioCtxRef.current && typeof window !== 'undefined') {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
    }, []);

    const playHover = useCallback(() => {
        if (!isEnabled) return;
        initAudio();
        const ctx = audioCtxRef.current;
        if (!ctx) return;
        if (ctx.state === 'suspended') ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    }, [isEnabled, initAudio]);

    const playClick = useCallback(() => {
        if (!isEnabled) return;
        initAudio();
        const ctx = audioCtxRef.current;
        if (!ctx) return;
        if (ctx.state === 'suspended') ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);

        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    }, [isEnabled, initAudio]);

    return (
        <SoundContext.Provider value={{ isEnabled, toggleSound, playHover, playClick }}>
            {children}
        </SoundContext.Provider>
    );
};
