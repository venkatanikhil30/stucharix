import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const to = "team.stucharix@gmail.com";
        const subject = encodeURIComponent(`New Message from ${formData.name}`);
        const body = encodeURIComponent(`Hello Team Stucharix,\n\nYou have received a new message from the contact form:\n\nSender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage Content:\n------------------------------\n${formData.message}\n------------------------------`);

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

        window.open(gmailUrl, '_blank');
    };

    return (
        <section className="section">
            <div className="container">
                <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                <div className="grid grid-2">
                    <div>
                        <p className="text-lg mb-4 text-muted">Have questions? We'd love to hear from you.</p>
                        <ul className="space-y-4">
                            <li><strong>Email:</strong> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=team.stucharix@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">team.stucharix@gmail.com</a></li>
                            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                        </ul>
                    </div>
                    <form className="card space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-border bg-background"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-border bg-background"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-border bg-background"
                        ></textarea>
                        <button type="submit" className="btn btn-primary w-full">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
