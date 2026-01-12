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
                    className="text-2xl md:text-3xl font-extrabold italic drop-shadow-sm text-gradient-multi overflow-visible"
                >
                    সাইমাস বেকড হোম
                </motion.div>

                <div className="hidden md:flex space-x-8 text-foreground/80 font-bold">
                    <a href="#hero" className="hover:text-brand-green transition-colors">হোম</a>
                    <a href="#services" className="hover:text-brand-green transition-colors">সেবা</a>
                    <a href="#gallery" className="hover:text-brand-green transition-colors">গ্যালারি</a>
                    <a href="#contact" className="hover:text-brand-green transition-colors">যোগাযোগ</a>
                </div>

                <motion.a
                    href="https://wa.me/8801815186079"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-green text-white px-6 py-2 rounded-full font-semibold shadow-lg shadow-brand-green/30"
                >
                    অর্ডার করুন
                </motion.a>
            </div>
        </nav>
    );
}
