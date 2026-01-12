"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import heroCake from '@/assets/hero-cake.png';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[radial-gradient(circle_at_top_right,var(--soft-pink),transparent)]">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        প্রতিটি কামড়ে <br />
                        <span className="text-brand-warm italic">ভালোবাসার</span> স্বাদ
                    </h1>
                    <p className="text-xl text-foreground/70 mb-8 max-w-lg">
                        ফটিকছড়িতে ঘরোয়া পরিবেশে তৈরি ১০০% স্বাস্থ্যকর এবং সুস্বাদু কেক। আপনার বিশেষ মুহূর্তগুলোকে আরও স্মরণীয় করে তুলতে আমরা আছি আপনার পাশে।
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-warm text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-warm/20"
                        >
                            এখনই অর্ডার দিন
                        </motion.a>
                        <motion.a
                            href="#gallery"
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-4 border-2 border-brand-warm text-brand-warm rounded-xl font-bold text-lg"
                        >
                            গ্যালারি দেখুন
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="relative"
                >
                    {/* Animated Blob Background */}
                    <div className="absolute -inset-10 bg-brand-pink/40 blur-3xl rounded-full -z-10 animate-pulse"></div>

                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 drop-shadow-2xl"
                    >
                        <Image
                            src={heroCake}
                            alt="Saima's Baked Home Cake"
                            className="w-full h-auto rounded-3xl"
                            priority
                        />
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, 40, 0], x: [0, 20, 0], rotate: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-0 p-4 glass rounded-2xl shadow-xl z-20"
                    >
                        <span className="text-brand-warm font-bold">🍰 সেরা স্বাদ</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-10 left-0 p-4 glass rounded-2xl shadow-xl z-20"
                    >
                        <span className="text-brand-gold font-bold">✨ ১০০% ফ্রেশ</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
