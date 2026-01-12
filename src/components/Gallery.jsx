"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import sunflowerCake from '@/assets/sunflower-cake.png';
import heartCake from '@/assets/hero-cake.png'; // Reusing hero cake for gallery sample
import floralCake from '@/assets/floral-cake.png';

const products = [
    { img: sunflowerCake, title: "সানফ্লাওয়ার থিম" },
    { img: heartCake, title: "হার্ট শেপ ভ্যালেন্টাইন" },
    { img: floralCake, title: "রয়্যাল ফ্লোরাল" },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-multi">আমাদের পছন্দের কেকসমূহ</h2>
                        <p className="text-foreground/70 max-w-md mx-auto md:mx-0">প্রতিটি কেক একটি শিল্পকর্ম, যা আপনার বিশেষ দিনে রং ছড়াবে।</p>
                    </motion.div>

                    <motion.button
                        whileHover={{ x: 10 }}
                        className="text-brand-warm font-bold flex items-center gap-2"
                    >
                        ফেসবুক গ্যালারি দেখুন <span>→</span>
                    </motion.button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {products.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative aspect-square overflow-hidden rounded-3xl group"
                        >
                            <Image
                                src={p.img}
                                alt={p.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                <p className="text-white text-xl font-bold">{p.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
