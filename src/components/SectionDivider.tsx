import React from 'react';
import { motion } from 'framer-motion';

export const SectionDivider: React.FC = () => {
  return (
    <div className="relative w-full h-px bg-[#E8E8E5] dark:bg-[#272A2E] overflow-hidden pointer-events-none">
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '100%' }}
        viewport={{ once: false }}
        transition={{ duration: 2.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3 }}
        className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-[#1e3fd8]/60 dark:via-[#38bdf8]/60 to-transparent"
      />
    </div>
  );
};
