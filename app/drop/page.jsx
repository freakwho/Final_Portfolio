"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { assets } from '@/assets/assets';
import { motion, AnimatePresence } from 'framer-motion';



const page = () => {

    return (
        <div className="flex h-screen justify-center bg-neutral-900 px-3 py-12">
            <FlyoutLink href='#' FlyoutContent={PricingContent}>
                Pricing
            </FlyoutLink>
        </div>
    );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = open && FlyoutContent;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="group relative h-fit w-fit"
        >

            <a href={href} className="relative text-white">
                {children}
                <span
                    style={{
                        transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
                />
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ x: "-50%" }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="absolute left-1/2 top-12 bg-white text-black">
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 ratote-45 bg-white" />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const PricingContent = () => {
    return (
        <div className="w-64 bg-white p-6 shadow-xl">
            <div className="mb-3 space-y-3">
                <h3 className="font-semibold">For Individual</h3>
                <a href="#" className="block text-sm hover:underline">Introduction</a>
                <a href="#" className="block text-sm hover:underline">Pay as you go</a>
            </div>
        </div>
    );
};

export default page;