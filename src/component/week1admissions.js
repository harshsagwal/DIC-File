import React, { useState } from 'react';
import "./week1admissions.css";


function week1admissions() {

    return (
        <>
            <h1>Admission Form</h1>

            <form action="/" id="admissionForm">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" /><br /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" /><br /><br />

                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" /><br /><br />

                <label htmlFor="course">Course:</label>
                <select id="course" name="course" style={{ backgroundColor: 'grey', color: 'beige' }}>
                    <option value="IT">IT</option>
                    <option value="CS">CS</option>
                    <option value="ECE">ECE</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="EEE">EEE</option>
                    <option value="Biotechnology">Biotechnology</option>
                </select><br /><br />

                <label htmlFor="documents">Documents:</label>
                <input type="file" id="documents" name="documents" multiple /><br /><br />

                <input type="hidden" name="_captcha" value="false" />

                <input type="submit" value="Submit" style={{ padding: '5px', marginLeft: '5px', backgroundColor: 'brown', color: 'beige' }} />
            </form>
            
        </>
    );
}

export default week1admissions;
