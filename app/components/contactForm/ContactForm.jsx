"use client"
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SendingEmailImg from "../../assets/send-email.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export const ContactForm = () => {
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        user_email: "",
        user_name: "",
        message: "",
    })

    const validate = () => {
        let tempErrors = {};
        if (!formData.user_name) tempErrors.user_name = "Name is required";
        if (!formData.user_email) tempErrors.user_email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.user_email)) tempErrors.user_email = "Email is invalid";
        if (!formData.message) tempErrors.message = "Message is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // Clear error when user types
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!validate()) return;

        setIsLoading(true);
        setStatus(null);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus('success');
                    setFormData({ user_name: "", user_email: "", message: "" });
                },
                (error) => {
                    console.log(error.text);
                    setStatus('error');
                }
            )
            .finally(() => {
                setIsLoading(false);
                setTimeout(() => setStatus(null), 5000);
            });
    }

    return (
        <section id="contacts" className="bg-black text-white scroll pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-center pb-4"
                    >
                        Good ideas deserve <span className="text-red-600">great execution.</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-500"
                    >
                        Let’s start with yours!
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                    {/* Form section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-900/50 backdrop-blur-sm border border-red-900/30 p-8 rounded-2xl shadow-xl"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-1 h-8 bg-red-600 rounded-full"></span>
                                Get in touch
                            </h2>

                            <div>
                                <label htmlFor="user_name" className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name='user_name'
                                    placeholder="Your full name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    className={`w-full bg-black/50 border ${errors.user_name ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors`}
                                />
                                {errors.user_name && <p className="text-red-500 text-xs mt-1">{errors.user_name}</p>}
                            </div>

                            <div>
                                <label htmlFor="user_email" className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name='user_email'
                                    placeholder="Your email address"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    className={`w-full bg-black/50 border ${errors.user_email ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors`}
                                />
                                {errors.user_email && <p className="text-red-500 text-xs mt-1">{errors.user_email}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                                <textarea
                                    name='message'
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full bg-black/50 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none`}
                                />
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <FaSpinner className="animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane /> Send Message
                                    </>
                                )}
                            </button>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="bg-green-500/10 border border-green-500/50 text-green-400 p-3 rounded-lg flex items-center gap-2"
                                    >
                                        <FaCheckCircle /> Message sent successfully!
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg flex items-center gap-2"
                                    >
                                        <FaExclamationCircle /> Failed to send. Please try again.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>

                    {/* Image section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:flex justify-center items-center"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full"></div>
                            <Image
                                src={SendingEmailImg}
                                alt="send-email"
                                className="w-[400px] relative z-10 hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};
