"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-brand-pink/20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="glass rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 overflow-hidden relative">
                    {/* Decorative gradients */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-green/20 blur-3xl rounded-full"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-gold/20 blur-3xl rounded-full"></div>

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-gradient-multi inline-block">আমাদের সাথে যোগাযোগ করুন</h2>
                            <p className="text-foreground/70 mb-10">আপনার পছন্দের কেক অর্ডার করতে বা যেকোনো প্রশ্নে আমাদের কল করুন অথবা সরাসরি মেসেজ দিন।</p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/50">কল করুন</p>
                                        <p className="text-xl font-bold">01815-186079</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/50">অবস্থান</p>
                                        <p className="text-xl font-bold leading-tight">পূর্ব ফটিকছড়ি, ভূজপুর থানা, চট্টগ্রাম</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-green/5 border border-brand-green/10 transition-all"
                            >
                                <h3 className="text-2xl font-bold mb-4 text-brand-green">অর্ডার করতে চান?</h3>
                                <p className="mb-8 text-foreground/60 font-medium">সরাসরি হোয়াটসঅ্যাপে কথা বলুন এবং আপনার পছন্দ জানিয়ে দিন। আমরা খুব দ্রুত আপনার সাথে যোগাযোগ করব।</p>

                                <a
                                    href="https://wa.me/8801815186079"
                                    target="_blank"
                                    className="w-full bg-[#10b981] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-brand-green/20 transition-all hover:brightness-110 active:scale-95"
                                >
                                    <MessageCircle size={24} />
                                    হোয়াটসঅ্যাপ মেসেজ দিন
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
