import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear().toString();
    const banglaDigits = {
        '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
        '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
    };
    const banglaYear = currentYear.split('').map(digit => banglaDigits[digit]).join('');

    return (
        <footer className="py-12 border-t border-brand-pink/10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div>
                    <h2 className="text-xl font-bold italic mb-2 text-gradient-multi">সাইমাস বেকড হোম</h2>
                    <p className="text-foreground/50 text-sm" suppressHydrationWarning>
                        © {banglaYear} সর্বস্বত্ব সংরক্ষিত।
                    </p>
                </div>

                <div className="flex gap-8 text-foreground/60 font-medium">
                    <a href="#" className="hover:text-brand-warm">ফেসবুক</a>
                    <a href="#" className="hover:text-brand-warm">ইনস্টাগ্রাম</a>
                    <a href="#" className="hover:text-brand-warm">নীতিমালা</a>
                </div>

                <p className="text-foreground/50 text-sm">ডিজাইন করেছে <span className="font-bold">অ্যান্টিগ্রাভিটি</span></p>
            </div>
        </footer>
    );
}
