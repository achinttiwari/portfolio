'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      ) {
        setStatus('EmailJS is not configured. Please add environment variables.');
        setIsLoading(false);
        return;
      }

      const templateParams = {
        to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setStatus('Message sent successfully! I'll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('Failed to send message. Please try again or email me directly.');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">Contact</h2>

        {/* Contact Methods */}
        <div className="mb-12 space-y-6">
          <p className="text-gray-700 text-center mb-8">
            Let's connect! Feel free to reach out through any of these channels:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email */}
            <div className="text-center">
              <p className="font-semibold text-black mb-2">Email</p>
              <Link
                href="mailto:achinttiwari.dev@gmail.com"
                className="text-gray-700 hover:text-black transition underline"
              >
                achinttiwari.dev@gmail.com
              </Link>
            </div>

            {/* WhatsApp */}
            <div className="text-center">
              <p className="font-semibold text-black mb-2">WhatsApp Business</p>
              <Link
                href="https://wa.me/919369754266"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition underline"
              >
                +91 9369754266
              </Link>
            </div>

            {/* GitHub */}
            <div className="text-center">
              <p className="font-semibold text-black mb-2">GitHub</p>
              <Link
                href="https://github.com/achinttiwari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition underline"
              >
                github.com/achinttiwari
              </Link>
            </div>

            {/* LinkedIn */}
            <div className="text-center">
              <p className="font-semibold text-black mb-2">LinkedIn</p>
              <Link
                href="https://www.linkedin.com/in/achinttiwari/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition underline"
              >
                linkedin.com/in/achinttiwari
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-black mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Status Message */}
            {status && (
              <div
                className={`p-3 rounded-lg text-sm ${
                  status.includes('successfully')
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {status}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-black text-white rounded-lg font-medium hover:opacity-80 transition disabled:opacity-50"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            Note: Ensure EmailJS is configured in environment variables for the form to work properly.
          </p>
        </div>
      </div>
    </section>
  );
}
