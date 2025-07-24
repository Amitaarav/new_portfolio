"use client"
import React from "react";
import emailjs from "@emailjs/browser";
import SendingEmailImg from "../../assets/send-email.png";
import Image from "next/image";
import { useState } from "react";
export const ContactForm = () => {
    function handleSubmit(e) {
        e.preventDefault();

        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
          .then(
            (result) => {
              console.log(result.text);
              alert("Your Email sent successfully! We will get back to you soon.");
            },
            (error) => {
              console.log(error.text);
              alert("Failed to send email. Please try again.");
            }
          );
      }
    const [formData, setFormData] =useState({
        email: "",
        name: "",
        message: "",
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
  return (
    <section id="contacts" className="bg-black text-white scroll pt-16">
        <div className="container grid grid-cols-1 md:grid-cols-2">
            {/* Form section */}
            <div className="bg-gradient-to-b from-red-700 via-red-900/70 to-red-950 p-4 rounded-xl m-10">
                <form onSubmit={handleSubmit} action="">
                    <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
                    <div>
                        <label htmlFor="name" className="block text-white">Name</label>
                        <input type="text"
                        name='name'
                        placeholder="Please enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block text-start w-full border-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 ring-red-700 bg-black sm:text-sm p-2 text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-white" htmlFor="email">Email</label>
                        <input type="email"
                        name='email'
                        placeholder="Please enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block  text-start w-full rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 ring-red-700 bg-black sm:text-sm p-2 text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-white" htmlFor="message">Message</label>
                        <textarea type="text"
                        name='message'
                        placeholder="Write your message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block text-start w-full border-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 ring-red-700 bg-black sm:text-sm p-2 text-white"
                        />
                    </div>
                    <div>
                        <button type="submit" className="bg-gradient-to-r from-red-700 via-red-900/70 to-red-950 border-red-700 mt-4 px-6  border-2 text-white font-bold py-2 rounded">
                            Send Email
                        </button>
                    </div>
                </form>
            </div>
            {/* Image section */}
            <div className="hidden md:flex justify-center item-center">
                <Image
                    src={SendingEmailImg}
                    alt="send-email"
                    className="w-[300px] hover:animate-bounce animate-none duration-300"
                />
            </div>
        </div>
    </section>
    )
};
