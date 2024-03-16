'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full md:w-2/3 lg:w-1/3 p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Sign In
          </button>
        </form>
      </div>

      <div className="hidden md:block w-1/3 lg:w-2/3 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48">
            {/* Placeholder for your sleek animation */}
            <Player
                   autoplay
                   speed={1.5}
                   loop
                   src="https://lottie.host/e8b16c97-b290-4ac4-b573-7df929029e14/LzbW0QUqqD.json"
                   style={{ height: "500px", width: "500px" }}
                                 /> 
          </div>
        </div>
      </div>
    </div>
  );
}
