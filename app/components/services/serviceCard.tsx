"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Meteors } from "@/components/ui/meteors";

interface ServiceCardProps {
  id: string | number;
  icon: ReactNode;
  title: string;
  desc: string;
  delay?: number;
}

export const ServiceCard = ({ id, icon, title, desc, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative overflow-hidden p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl space-y-4 hover:shadow-lg hover:shadow-red-900 transition-shadow"
    >
      {/* Meteors animation */}
      <Meteors number={20} />

      <div className="relative z-10">
        <div className="text-red-400 bg-white/20 p-3 rounded-full w-fit">{icon}</div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-sm text-white/70">{desc}</p>
      </div>
    </motion.div>
  );
};
