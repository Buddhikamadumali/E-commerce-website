import React from 'react'
import { useState } from 'react';

function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
    
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 pt-16">
          <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
            
            
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              Sign Up
            </h2>
    
           
            <form className="space-y-5">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
    
              
              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
    
              
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold transition duration-300 mt-6"
              >
                Sign Up
              </button>
            </form>
    
            
            
          </div>
        </div>
      )
    }
    
  


export default RegisterPage