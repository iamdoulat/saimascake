"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Palette } from 'lucide-react';

const services = [
    {
        title: "ঘরোয়া পরিবেশ",
        desc: "একদম ঘরের পরিবেশে ভালোবাসা ও যত্ন নিয়ে তৈরি করা হয় প্রতিটি কেক।",
        icon: Heart,
        color: "bg-brand-pink"
    },
    {
        title: "পরিপচ্ছন্নতা",
        desc: "আমরা স্বাস্থ্যবিধি মেনে অত্যন্ত পরিষ্কার-পরিচ্ছন্নভাবে কেক তৈরি নিশ্চিত করি।",
        icon: ShieldCheck,
        color: "bg-brand-gold"
    },
    {
        title: "কাস্টমাইজড ডিজাইন",
        desc: "আপনার পছন্দমতো যেকোনো থিম বা ডিজাইনে আমরা কেক সাজিয়ে থাকি।",
        icon: Palette,
        color: "bg-brand-pink"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-white/50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-gradient-multi inline-block"
                >
                    আমাদের বিশেষত্ব
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 glass rounded-3xl hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className={`w-16 h-16 ${s.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                                <s.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                            <p className="text-foreground/70 leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
