'use client'

import React, { useState } from "react";
import StepWithLine from "../components/stepsWithLines"
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Application = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [resume, setResume] = useState(null);
    const [experience, setExperience] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you can send the form data to Firestore or your preferred backend
        const formData = {
            name,
            phone,
            email,
            linkedin,
            resume,
            experience,
            role
        };
        console.log(formData);
    };

    return (<>
        <StepWithLine></StepWithLine>
        <div className="flex h-screen">

        
        {/* Job Application Form */}
        <div className="w-1/3 bg-white p-8">
        <h1 className="text-3xl text-black font-semibold text-center mb-8">Job Application Form</h1>
            <form className="max-w-md text-black border-black mx-auto" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 font-semibold">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 rounded border-gray-300" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 font-semibold">Phone No.:</label>
                    <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 rounded border-gray-300" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 font-semibold">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 rounded border-gray-300" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="linkedin" className="block mb-2 font-semibold">LinkedIn Profile:</label>
                    <input type="text" id="linkedin" name="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className="w-full px-4 py-2 rounded border-gray-300" />
                </div>
                <div className="mb-6">
                    <label htmlFor="resume" className="block mb-2 font-semibold">Resume (PDF):</label>
                    <input type="file" id="resume" name="resume" onChange={(e) => setResume(e.target.files[0])} className="w-full px-4 py-2 rounded border-gray-300" accept=".pdf" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="experience" className="block mb-2 font-semibold">Years of Experience:</label>
                    <input type="number" id="experience" name="experience" value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full px-4 py-2 rounded border-gray-300" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="role" className="block mb-2 font-semibold">Role applying for:</label>
                    <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)} className="w-full px-4 py-2 rounded border-gray-300" required>
                        <option value="">Select Role</option>
                        <option value="Role 1">Role 1</option>
                        <option value="Role 2">Role 2</option>
                        <option value="Role 3">Role 3</option>
                    </select>
                </div>                
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Submit Application</button>
            </form>
        </div>       
        <div className="w-2/3 bg-gray-200">
        <Player
                   autoplay
                   speed={1.5}
                   loop
                   src="https://lottie.host/e8b16c97-b290-4ac4-b573-7df929029e14/LzbW0QUqqD.json"
                   style={{ height: "300px", width: "300px" }}
                                 />
        </div>
    </div>
    </>
        
    );
};

export default Application;