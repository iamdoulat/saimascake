"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import heroCake from '@/assets/hero-cake.png';

export default function Hero() {
    const sentence = "প্রতিটি কামড়ে ভালোবাসার স্বাদ";
    const words = sentence.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[radial-gradient(circle_at_top_right,var(--soft-pink),transparent)]">
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="text-center md:text-left overflow-visible"
                >
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 overflow-visible">
                        <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-wrap justify-center md:justify-start gap-x-4 md:gap-x-8 overflow-visible">
                            {words.map((word, index) => (
                                <motion.span
                                    variants={child}
                                    key={index}
                                    className="italic text-gradient-multi py-2"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.div>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-xl text-foreground/70 mb-8 max-w-lg mx-auto md:mx-0"
                    >
                        ফটিকছড়িতে ঘরোয়া পরিবেশে তৈরি ১০০% স্বাস্থ্যকর এবং সুস্বাদু কেক। আপনার বিশেষ মুহূর্তগুলোকে আরও স্মরণীয় করে তুলতে আমরা আছি আপনার পাশে।
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex flex-wrap justify-center md:justify-start gap-4"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-green text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-green/20"
                        >
                            এখনই অর্ডার দিন
                        </motion.a>
                        <motion.a
                            href="#gallery"
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-4 border-2 border-brand-green text-brand-green rounded-xl font-bold text-lg"
                        >
                            গ্যালারি দেখুন
                        </motion.a>
                    </motion.div>
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
