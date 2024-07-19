// src/components/Contact.jsx

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import Footer from "./Footer";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const resetForm = () => {
        setForm({ name: "", email: "", message: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { name, email, message } = form;

        if (!name.trim() || !email.trim() || !message.trim()) {
            setLoading(false);
            toast.error("Please fill all the fields.", { position: 'bottom-right' });
            return;
        }
        if (!validateEmail(email)) {
            setLoading(false);
            toast.error("Please enter a valid email address.", { position: 'bottom-right' });
            return;
        }

        try {
            await emailjs.send(
                EMAIL_JS_SERVICE_ID,
                EMAIL_JS_TEMPLATE_ID,
                {
                    from_name: name.trim(),
                    to_name: "Nikhil Babasaheb Jagtap",
                    reply_to: email.trim(),
                    to_email: "jagtapnikhil2411@gmail.com",
                    message: message.trim(),
                },
                EMAIL_JS_PUBLIC_KEY
            );
            toast.success("Message sent successfully!", { position: 'bottom-right' });
            resetForm();
        } catch (error) {
            console.error(error);
            toast.error("Uh, oh! Something went wrong. Please try again later.", { position: 'bottom-right' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='relative z-0 bg-black w-screen h-screen mt-12'>
            <div className='text-white contact overflow-x-hidden pt-12 mt-8' id='contact'>
                <div className='z-10 w-full sm:w-[650px] m-auto p-8 pb-16 rounded-2xl'>
                    <p className='font-light'>REACH OUT TO ME</p>
                    <h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>Contact.</h2>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='mt-12 flex flex-col gap-8 mb-8'
                    >
                        <label className='flex flex-col'>
                            <span className='font-medium mb-4'>Your Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
                                required
                                aria-label="Your Name"
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='font-medium mb-4'>Your Email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Ex: abc@gmail.com"
                                className='py-4 px-6 rounded-lg font-medium bg-gray-900'
                                required
                                aria-label="Your Email"
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='font-medium mb-4'>Your Message</span>
                            <textarea
                                rows={7}
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder='Do you have anything to say?'
                                className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
                                required
                                aria-label="Your Message"
                            />
                        </label>

                        <button
                            type='submit'
                            className='py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md bg-gray-900 mb-4'>
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>
                <ToastContainer />
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
