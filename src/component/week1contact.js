import React from 'react';
import "./week1contact.css";

function week1contact() {
    return (
        <>
            <div id="heading">
                <h1>Contact Us</h1>
                <h2>Shri Ram Engineering College</h2>
            </div>
            <hr />
            <p>
                Address: 420, Sector 47, Chandigarh, India<br />
                Email: info@srec.edu<br />
                Phone: +91 1234567890<br />
                Post Office: 160047
            </p>

            <h2>Send us a Query or Feedback</h2>
            <form id="contactForm" action="/">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" /><br />

                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" /><br />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"></textarea><br />

                <label htmlFor="applied">Previously applied</label>
                <input type="checkbox" id="applied" /><br />

                <input type="hidden" name="_captcha" value="false" />

                <input id="submit" type="submit" value="Submit" />
            </form>
        </>
    );
}

export default week1contact;
