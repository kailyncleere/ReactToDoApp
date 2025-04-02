import React from "react";
import './contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <form>
                <h2>Contact Us</h2>
                <div className = "input-box">
                    <label>First Name</label>
                    <input type="text" className="field" placeholder="First Name" required />
                </div>
                <div className = "input-box">
                    <label>Last Name</label>
                    <input type="text" className="field" placeholder="Last Name" required />
                </div>
                <div className = "input-box">
                    <label>Email</label>
                    <input type="email" className="field" placeholder="Email" required />
                </div>
                <div className = "input-box">
                    <label>Message</label>
                    <textarea className="field-message" placeholder="Message" required></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </section>

    );
}

export default Contact;