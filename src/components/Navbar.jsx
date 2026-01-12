"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-brand-pink/20">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold bg-gradient-to-r from-brand-warm to-brand-gold bg-clip-text text-transparent italic"
                >
                    সাইমাস বেকড হোম
                </motion.div>

                <div className="hidden md:flex space-x-8 text-foreground/80 font-medium">
                    <a href="#hero" className="hover:text-brand-warm transition-colors">হোম</a>
                    <a href="#services" className="hover:text-brand-warm transition-colors">সেবা</a>
                    <a href="#gallery" className="hover:text-brand-warm transition-colors">গ্যালারি</a>
                    <a href="#contact" className="hover:text-brand-warm transition-colors">যোগাযোগ</a>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-warm text-white px-6 py-2 rounded-full font-semibold shadow-lg shadow-brand-warm/30"
                >
                    অর্ডার করুন
                </motion.button>
            </div>
        </nav>
    );
}
